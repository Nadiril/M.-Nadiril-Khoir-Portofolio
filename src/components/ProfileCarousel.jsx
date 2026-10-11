'use client';

import { useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import { PiCaretLeft, PiCaretRight } from 'react-icons/pi';
import { gsap, EASE, NO_MOTION_QUERY, useIsoLayoutEffect } from '@/lib/animations';

const photos = [
  {
    src: '/Profile2.webp',
    alt: 'M. Nadiril Khoir smiling in a cream blazer against a grey studio backdrop',
  },
  {
    src: '/Profile.webp',
    alt: 'M. Nadiril Khoir in a black shirt against a light grey studio backdrop',
  },
];

const IMAGE_SIZES = '(max-width: 640px) 320px, (max-width: 768px) 384px, 448px';
const SLIDE_DURATION = 0.7;
const SWIPE_RATIO = 0.2;
const FLICK_VELOCITY = 0.45;
const EDGE_RESISTANCE = 0.3;

const hasReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function ProfileCarousel() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const dragRef = useRef(null);
  const indexRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [status, setStatus] = useState('');

  const moveTo = useCallback((requestedIndex) => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const target = Math.min(Math.max(requestedIndex, 0), photos.length - 1);
    indexRef.current = target;
    setActiveIndex(target);
    setStatus(`Photo ${target + 1} of ${photos.length}`);

    gsap.to(track, {
      x: -target * viewport.clientWidth,
      duration: hasReducedMotion() ? 0 : SLIDE_DURATION,
      ease: EASE,
      overwrite: 'auto',
    });
  }, []);

  useIsoLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return undefined;

    const settle = () => {
      if (dragRef.current) return;
      gsap.killTweensOf(track);
      gsap.set(track, { x: -indexRef.current * viewport.clientWidth });
    };

    const onPointerDown = (event) => {
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      if (event.target?.closest?.('button')) return;

      gsap.killTweensOf(track);
      dragRef.current = {
        pointerId: event.pointerId,
        startX: event.clientX,
        baseX: -indexRef.current * viewport.clientWidth,
        lastX: event.clientX,
        lastTime: performance.now(),
        velocity: 0,
        moved: false,
      };
      viewport.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event) => {
      const drag = dragRef.current;
      if (!drag || drag.pointerId !== event.pointerId) return;

      const width = viewport.clientWidth;
      const delta = event.clientX - drag.startX;
      if (Math.abs(delta) > 4) drag.moved = true;

      let x = drag.baseX + delta;
      if (x > 0) x *= EDGE_RESISTANCE;
      else if (x < -width) x = -width + (x + width) * EDGE_RESISTANCE;

      const now = performance.now();
      const elapsed = now - drag.lastTime;
      if (elapsed > 0) {
        drag.velocity =
          drag.velocity * 0.7 + ((event.clientX - drag.lastX) / elapsed) * 0.3;
      }
      drag.lastX = event.clientX;
      drag.lastTime = now;

      gsap.set(track, { x });
    };

    const onPointerEnd = (event, cancelled) => {
      const drag = dragRef.current;
      if (!drag || drag.pointerId !== event.pointerId) return;

      dragRef.current = null;
      if (viewport.hasPointerCapture(event.pointerId)) {
        viewport.releasePointerCapture(event.pointerId);
      }

      if (cancelled) {
        moveTo(indexRef.current);
        return;
      }

      const delta = event.clientX - drag.startX;
      const passed = Math.abs(delta) > viewport.clientWidth * SWIPE_RATIO;
      const flicked =
        Math.abs(delta) > 24 && Math.abs(drag.velocity) > FLICK_VELOCITY;

      if (drag.moved && (passed || flicked)) {
        moveTo(indexRef.current + (delta < 0 ? 1 : -1));
      } else {
        moveTo(indexRef.current);
      }
    };

    const onPointerUp = (event) => onPointerEnd(event, false);
    const onPointerCancel = (event) => onPointerEnd(event, true);

    const onLostCapture = () => {
      if (!dragRef.current) return;
      dragRef.current = null;
      moveTo(indexRef.current);
    };

    const resizeObserver = new ResizeObserver(settle);
    resizeObserver.observe(viewport);

    viewport.addEventListener('pointerdown', onPointerDown);
    viewport.addEventListener('pointermove', onPointerMove);
    viewport.addEventListener('pointerup', onPointerUp);
    viewport.addEventListener('pointercancel', onPointerCancel);
    viewport.addEventListener('lostpointercapture', onLostCapture);

    return () => {
      resizeObserver.disconnect();
      viewport.removeEventListener('pointerdown', onPointerDown);
      viewport.removeEventListener('pointermove', onPointerMove);
      viewport.removeEventListener('pointerup', onPointerUp);
      viewport.removeEventListener('pointercancel', onPointerCancel);
      viewport.removeEventListener('lostpointercapture', onLostCapture);
      dragRef.current = null;
      gsap.killTweensOf(track);
    };
  }, [moveTo]);

  useIsoLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return undefined;

    const media = gsap.matchMedia();

    media.add(`${NO_MOTION_QUERY} and (hover: hover) and (pointer: fine)`, () => {
      const zoom = (scale) =>
        gsap.to(viewport.querySelectorAll('[data-photo-image]'), {
          scale,
          duration: scale === 1 ? 0.6 : 0.7,
          ease: 'power2.out',
          overwrite: 'auto',
        });

      const onEnter = () => zoom(1.06);
      const onLeave = () => zoom(1);

      viewport.addEventListener('pointerenter', onEnter);
      viewport.addEventListener('pointerleave', onLeave);

      return () => {
        viewport.removeEventListener('pointerenter', onEnter);
        viewport.removeEventListener('pointerleave', onLeave);
        gsap.set(viewport.querySelectorAll('[data-photo-image]'), {
          clearProps: 'transform',
        });
      };
    });

    return () => media.revert();
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      moveTo(indexRef.current - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      moveTo(indexRef.current + 1);
    }
  };

  const navButton =
    'flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-ink-soft transition-colors duration-200 hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-40';

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Portrait photos of M. Nadiril Khoir"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="relative"
    >
      <figure className="glass relative rounded-[2rem] p-2">
        <div
          ref={viewportRef}
          className="relative cursor-grab touch-pan-y select-none overflow-hidden rounded-[1.75rem] bg-paper-alt active:cursor-grabbing"
        >
          <div ref={trackRef} className="flex w-full will-change-transform">
            {photos.map((photo, i) => (
              <div
                key={photo.src}
                role="group"
                aria-roledescription="slide"
                aria-label={`Photo ${i + 1} of ${photos.length}`}
                aria-hidden={i === activeIndex ? undefined : true}
                className="w-full shrink-0"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-paper-alt">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={IMAGE_SIZES}
                    preload={i === 0}
                    draggable={false}
                    data-photo-image=""
                    className="object-cover select-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </figure>

      <p role="status" aria-live="polite" className="sr-only">
        {status}
      </p>

      <div className="mt-5 flex items-center justify-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => moveTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous photo"
          className={navButton}
        >
          <PiCaretLeft aria-hidden="true" className="h-4 w-4" />
        </button>

        <div
          role="group"
          aria-label="Choose a photo"
          className="flex items-center gap-1"
        >
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => moveTo(i)}
              aria-label={`Show photo ${i + 1} of ${photos.length}`}
              aria-current={i === activeIndex ? 'true' : undefined}
              className="flex h-9 w-9 items-center justify-center rounded-full"
            >
              <span
                className={`h-2 rounded-full transition-all duration-300 ease-out ${
                  i === activeIndex ? 'w-6 bg-accent' : 'w-2 bg-line-strong'
                }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => moveTo(activeIndex + 1)}
          disabled={activeIndex === photos.length - 1}
          aria-label="Next photo"
          className={navButton}
        >
          <PiCaretRight aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
