/* =========================================================
   Vikash Tiwari — portfolio scripts
   1. Central WhatsApp config (change number in ONE place)
   2. Mobile nav toggle
   3. Enquiry form -> WhatsApp message (no backend on GitHub Pages)
   ========================================================= */

// ---------------------------------------------------------
// 1. WHATSAPP CONFIG — update the number here only.
// Country code + number, no + sign, no spaces (e.g. "91XXXXXXXXXX")
// ---------------------------------------------------------
const WHATSAPP_CONFIG = {
  number: "917550690731",
  defaultMessage: "Hello Vikash, I visited your portfolio and would like to discuss a PHP / Website / ERP project."
};

function buildWhatsAppUrl(message) {
  const text = encodeURIComponent(message || WHATSAPP_CONFIG.defaultMessage);
  return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${text}`;
}

function applyWhatsAppLinks() {
  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    const customMsg = el.getAttribute("data-whatsapp-message");
    el.setAttribute("href", buildWhatsAppUrl(customMsg));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
}

// ---------------------------------------------------------
// 2. MOBILE NAV TOGGLE
// ---------------------------------------------------------
function setupNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ---------------------------------------------------------
// 3. ENQUIRY FORM
// This site is hosted on GitHub Pages (static, no PHP backend),
// so the form currently routes enquiries to WhatsApp with the
// details pre-filled.
//
// TO CONNECT A REAL BACKEND LATER (Formspree / EmailJS / your
// own PHP endpoint on separate hosting):
//   1. Replace the contents of `handleFormSubmit` below with
//      your service's submit call (e.g. fetch() to Formspree,
//      or emailjs.send(...) for EmailJS).
//   2. Keep (or remove) the WhatsApp fallback as you prefer.
// ---------------------------------------------------------
function setupEnquiryForm() {
  const form = document.getElementById("enquiry-form");
  const status = document.getElementById("form-status");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleFormSubmit(form, status);
  });
}

function handleFormSubmit(form, status) {
  const data = new FormData(form);
  const name = (data.get("name") || "").toString().trim();
  const company = (data.get("company") || "").toString().trim();
  const email = (data.get("email") || "").toString().trim();
  const whatsapp = (data.get("whatsapp") || "").toString().trim();
  const service = (data.get("service") || "").toString().trim();
  const budget = (data.get("budget") || "").toString().trim();
  const details = (data.get("details") || "").toString().trim();

  if (!name || !whatsapp || !service || !details) {
    if (status) {
      status.textContent = "Please fill in your name, WhatsApp number, service required and project details.";
      status.classList.add("show");
      status.classList.remove("ok");
    }
    return;
  }

  const lines = [
    "New enquiry from portfolio site:",
    `Name: ${name}`,
    company ? `Company: ${company}` : null,
    email ? `Email: ${email}` : null,
    `WhatsApp: ${whatsapp}`,
    `Service required: ${service}`,
    budget ? `Budget range: ${budget}` : null,
    `Project details: ${details}`
  ].filter(Boolean);

  const message = lines.join("\n");
  window.open(buildWhatsAppUrl(message), "_blank", "noopener");

  if (status) {
    status.textContent = "Opening WhatsApp with your enquiry details — please tap send there to reach me directly.";
    status.classList.add("show", "ok");
  }
  form.reset();
}

// ---------------------------------------------------------
// Init
// ---------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  applyWhatsAppLinks();
  setupNavToggle();
  setupEnquiryForm();
});
