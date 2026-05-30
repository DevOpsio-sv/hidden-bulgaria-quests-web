const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const header = document.querySelector("[data-header]");
const partnerForm = document.querySelector("[data-partner-form]");
const formNote = document.querySelector("[data-form-note]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (header) {
  const updateHeaderState = () => {
    header.toggleAttribute("data-scrolled", window.scrollY > 24);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });
}

if (partnerForm) {
  partnerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(partnerForm);
    const organization = String(data.get("organization") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Partnership inquiry from ${organization || "Unlocking Bulgaria website"}`);
    const body = encodeURIComponent(
      [`Organization: ${organization}`, `Email: ${email}`, "", "Partnership interest:", message].join("\n")
    );

    window.location.href = `mailto:partners@unlockingbulgaria.com?subject=${subject}&body=${body}`;

    if (formNote) {
      formNote.textContent = "Opening your email client with the partnership inquiry.";
    }
  });
}

const conversionEvents = [
  ["a[href='#download']", "download_cta_click"],
  ["a[href='#trailer']", "trailer_cta_click"],
  ["a[href='#partners']", "partner_cta_click"],
];

conversionEvents.forEach(([selector, eventName]) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.addEventListener("click", () => {
      window.dispatchEvent(new CustomEvent("unlockingbulgaria:conversion", { detail: { eventName } }));
    });
  });
});
