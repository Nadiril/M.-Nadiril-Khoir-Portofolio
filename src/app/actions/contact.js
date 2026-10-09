'use server';

const LIMITS = { name: 100, email: 200, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(prevState, formData) {
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();
  const honeypot = String(formData.get('company') ?? '').trim();

  if (honeypot) {
    return { status: 'ok', message: 'Thanks! Your message has been received.' };
  }

  if (!name || !email || !message) {
    return { status: 'error', message: 'Please fill in all fields.' };
  }
  if (name.length > LIMITS.name || email.length > LIMITS.email) {
    return { status: 'error', message: 'One of the fields is too long.' };
  }
  if (message.length > LIMITS.message) {
    return { status: 'error', message: 'Message is too long (max 5000 characters).' };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' };
  }

  // TODO: metode kirim menyusul (SMTP / Web3Forms / dll).
  console.log('[contact] delivery not wired yet:', { name, email, message });

  return { status: 'ok', message: 'Thanks! Your message has been received.' };
}
