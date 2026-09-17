# Vikash Tiwari — Portfolio

Live at: https://vikashtiwari060.github.io/

A single-page portfolio and enquiry site for PHP development, ERP customization
and business software work. Built with Bootstrap 5, custom CSS and vanilla JS —
no build step, deploys directly on GitHub Pages.

## Files

```
index.html          Page content and structure
styles.css           Design system and all visual styling
script.js             WhatsApp link config, mobile nav, enquiry form
assets/img/           Images (profile photo)
```

## Deploying

This repo is already set up for GitHub Pages (`main` branch, root folder).
Push to `main` and the site updates automatically at
https://vikashtiwari060.github.io/.

## Things to add before/after launch

Search the codebase for these markers and fill them in:

- `<!-- ADD REAL PROJECT SCREENSHOT HERE -->` (3 places in `index.html`) —
  drop real screenshots into `assets/img/` and swap the placeholder `.project-shot`
  divs for `<img>` tags.
- `<!-- ADD REAL CLIENT / INDUSTRY CONTEXT HERE -->` — fill in real, specific
  project context where you're able to share it.
- `<!-- ADD REAL CLIENT TESTIMONIAL HERE -->` — replace once you have a
  client willing to be quoted.
- `<!-- ADD LINKEDIN URL HERE IF AVAILABLE -->` in the footer, if you want a
  LinkedIn link.
- Double-check the phone number in `script.js` (`WHATSAPP_CONFIG.number`) and
  in the contact section of `index.html` — it's currently set to the number
  from the previous version of the site.

## Contact form

GitHub Pages can't run PHP or any backend, so the enquiry form currently
builds a WhatsApp message from the fields and opens `wa.me` with it prefilled.
To route it to email/inbox instead, see the comment block above
`handleFormSubmit` in `script.js` — swap in a Formspree endpoint or EmailJS
call there.

## WhatsApp number

Every WhatsApp link and button on the site reads from one place:
`WHATSAPP_CONFIG` at the top of `script.js`. Change the number there once —
every button, the floating WhatsApp icon, and the contact section update
automatically.
