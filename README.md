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

## Revision notes (2nd pass)

Refinements made after the first draft, per the more detailed brief:

- Nav simplified to: Home, Services, Projects, ERP, Agency Partnership, About, Contact
- Hero subheadline and a "10+ Years of Practical Development Experience" trust line updated to match the brief exactly
- Quick-fix band now lists the specific issue types (bug fixing, DB issues, reports, API integration, etc.)
- Each service card now has a "Discuss this service" link
- ERP section heading changed to "Business software that fits your workflow"
- Project screenshot placeholders redesigned as browser-frame mockups (not real screenshots — still placeholders)
- Project "view details" panels now show a visible "details coming soon" line instead of only an HTML comment
- Agency section adds the explicit line: "Your team handles the client relationship. I provide the technical development support behind it."
- Pricing split into two dedicated sections: a Quick PHP Fix section (₹1,500 / ₹2,000 / ₹3,000 tiers) and a Business Website package (from ₹7,500, with inclusions list)
- "Why work with me" rewritten to match the exact 9 reasons from the brief, including ERP experience
- Contact form service dropdown updated to the exact option list requested
- Added a proper favicon (inline SVG monogram)
- Removed the unused Bootstrap CSS import (~160KB) since no Bootstrap classes were actually used anywhere in the markup — the custom stylesheet is the full design system. This cuts page weight noticeably without changing anything visually.

## WhatsApp number

Every WhatsApp link and button on the site reads from one place:
`WHATSAPP_CONFIG` at the top of `script.js`. Change the number there once —
every button, the floating WhatsApp icon, and the contact section update
automatically.
