# My-Portfolio
Personal portfolio built with React.js, Vite, HTML, CSS, and JavaScript, showcasing my skills, projects, internship experience, achievements, and certifications in software engineering, backend development, and AI.

## Contact form

The contact form sends messages through EmailJS when all three settings below are configured. Copy `.env.example` to `.env.local`, then replace the example values with the Service ID, Template ID, and Public Key from your EmailJS account:

```text
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Restart the Vite dev server after changing `.env.local`. For a deployed site, add the same variables to the hosting provider's build-time environment settings and redeploy; Vite embeds `VITE_` variables in the built client app.

The EmailJS template should use `from_name`, `from_email`, `reply_to`, `subject`, and `message`. Configure the template's recipient in the EmailJS dashboard. If EmailJS is not configured, the form opens a prefilled email to the address in `src/data/profile.js` instead.
