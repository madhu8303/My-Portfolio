import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import SocialLinks from '../components/SocialLinks.jsx';
import { profile } from '../data/profile.js';

const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const emailJsConfigured = Boolean(emailJsServiceId && emailJsTemplateId && emailJsPublicKey);

export default function Contact() {
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (isSending) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const sender = String(formData.get('email') ?? '').trim();
    const subject = String(formData.get('subject') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (emailJsConfigured) {
      setIsSending(true);
      setStatus('Sending your message...');

      try {
        await emailjs.send(
          emailJsServiceId,
          emailJsTemplateId,
          {
            from_name: name,
            from_email: sender,
            reply_to: sender,
            subject,
            message,
          },
          { publicKey: emailJsPublicKey },
        );
        form.reset();
        setStatus('Message sent successfully. Thanks for getting in touch.');
      } catch {
        setStatus(profile.email
          ? `Message could not be sent. Email me directly at ${profile.email}.`
          : 'Message could not be sent. Please try again later.');
      } finally {
        setIsSending(false);
      }
      return;
    }

    if (!profile.email) {
      setStatus('EmailJS is not configured. Add its service ID, template ID, and public key to .env.local.');
      return;
    }

    const body = `From: ${name} (${sender})\n\n${message}`;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus('Your email app should open with the message ready to send.');
  }

  return (
    <section className="section-wrap contact-section" id="contact" aria-labelledby="contact-title">
      <div className="page-shell">
        <SectionHeading eyebrow="Get in touch" title="Let’s make something useful." description="Have a role, project, or idea in mind? I’d be glad to hear from you." id="contact-title" />
        <div className="contact-layout">
          <aside className="contact-aside">
            <p>Open to conversations about software engineering, Python development, and AI-focused opportunities.</p>
            <div className="contact-detail"><MapPin size={18} aria-hidden="true" /><span>{profile.location}</span></div>
            <div className="contact-detail"><Mail size={18} aria-hidden="true" /><span>{profile.email || 'madhuleo33@gmail.com'}</span></div>
            <SocialLinks className="contact-social" />
          </aside>
          <form className="contact-form" onSubmit={handleSubmit} aria-busy={isSending}>
            <div className="form-grid">
              <label>Name<input name="name" type="text" autoComplete="name" required maxLength="100" /></label>
              <label>Email<input name="email" type="email" autoComplete="email" required maxLength="254" /></label>
              <label className="form-full">Subject<input name="subject" type="text" required maxLength="160" /></label>
              <label className="form-full">Message<textarea name="message" rows="5" required maxLength="5000" /></label>
            </div>
            <div className="form-submit-row">
              <button className="button button-primary" type="submit" disabled={isSending}>
                {isSending ? 'Sending...' : emailJsConfigured ? 'Send Message' : 'Send Email'}
                <ArrowRight size={16} aria-hidden="true" />
              </button>
              <p className="form-note" role="status" aria-live="polite">
                {status || (emailJsConfigured
                  ? 'Your message will be sent through Porfolio.'
                  : profile.email
                    ? 'EmailJS is not configured; this form opens your email app instead.'
                    : 'Send messages from this form.')}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}