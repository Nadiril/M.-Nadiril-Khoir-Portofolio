'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

export { gsap, ScrollTrigger };

export const EASE = 'power3.out';
export const NO_MOTION_QUERY = '(prefers-reduced-motion: no-preference)';

export const useIsoLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

let refreshFrame = 0;
export function queueRefresh() {
  if (typeof window === 'undefined') return;
  cancelAnimationFrame(refreshFrame);
  refreshFrame = requestAnimationFrame(() => {
    refreshFrame = 0;
    ScrollTrigger.refresh();
  });
}

let fontsWatched = false;
function watchFonts() {
  if (fontsWatched || typeof document === 'undefined') return;
  fontsWatched = true;
  document.fonts?.ready.then(queueRefresh);
}

/**
 * Scroll-triggered reveal for [data-reveal] descendants of the returned ref.
 * Animations only exist inside a (prefers-reduced-motion: no-preference)
 * matchMedia context, so with reduced motion (or without JS) the content
 * simply renders in its final state.
 */
export function useReveal({
  selector = '[data-reveal]',
  start = 'top 80%',
  y = 18,
  duration = 0.7,
  stagger = 0.08,
  delay = 0,
} = {}) {
  const scopeRef = useRef(null);

  useIsoLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return undefined;

    const media = gsap.matchMedia();

    media.add(NO_MOTION_QUERY, () => {
      const targets = scope.querySelectorAll(selector);
      if (!targets.length) return undefined;

      const tween = gsap.from(targets, {
        y,
        opacity: 0,
        duration,
        ease: EASE,
        stagger,
        delay,
        scrollTrigger: { trigger: scope, start, once: true },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    watchFonts();
    queueRefresh();

    return () => media.revert();
  }, [selector, start, y, duration, stagger, delay]);

  return scopeRef;
}
