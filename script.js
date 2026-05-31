/* ── Stars canvas ────────────────────────────────────────────── */
(function initStars() {
  const canvas = document.getElementById("stars-canvas");
  if (!canvas) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const ctx = canvas.getContext("2d");
  let W, H, stars;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = document.documentElement.scrollHeight;
  }

  function buildStars(count) {
    return Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.2 + 0.2,
      a: Math.random(),
      speed: Math.random() * 0.3 + 0.05,
      dir: Math.random() > 0.5 ? 1 : -1,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    stars.forEach((s) => {
      s.a += s.speed * 0.008 * s.dir;
      if (s.a > 1 || s.a < 0) s.dir *= -1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(245, 226, 168, ${s.a * 0.55})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  stars = buildStars(220);
  draw();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      resize();
      stars = buildStars(220);
    }, 200);
  });
})();

/* ── Header scroll state ─────────────────────────────────────── */
(function initHeader() {
  const header = document.querySelector("[data-header]");
  if (!header) return;
  const update = () => header.toggleAttribute("data-scrolled", window.scrollY > 24);
  update();
  window.addEventListener("scroll", update, { passive: true });
})();

/* ── Mobile nav toggle ───────────────────────────────────────── */
(function initNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.addEventListener("click", (e) => {
    if (e.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
  });
})();

/* ── Language selector ───────────────────────────────────────── */
(function initLang() {
  const openBtn = document.querySelector("[data-lang-toggle]");
  const overlay = document.querySelector("[data-lang-overlay]");
  const closeBtn = document.querySelector("[data-lang-close]");
  const label = document.querySelector("[data-lang-label]");
  if (!openBtn || !overlay || !closeBtn) return;

  const LANG_LABELS = {
    en: "EN", bg: "БГ", de: "DE", fr: "FR", es: "ES",
    it: "IT", ro: "RO", tr: "TR", el: "ΕΛ", hu: "HU", zh: "中文",
    ru: "РУ", ja: "JA", sr: "SR",
  };

  function openOverlay() {
    overlay.classList.add("is-open");
    openBtn.setAttribute("aria-expanded", "true");
    closeBtn.focus();
  }

  function closeOverlay() {
    overlay.classList.remove("is-open");
    openBtn.setAttribute("aria-expanded", "false");
    openBtn.focus();
  }

  openBtn.addEventListener("click", openOverlay);
  closeBtn.addEventListener("click", closeOverlay);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeOverlay();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) closeOverlay();
  });

  overlay.querySelectorAll(".lang-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      overlay.querySelectorAll(".lang-pill").forEach((p) => p.classList.remove("is-active"));
      pill.classList.add("is-active");
      const lang = pill.dataset.lang;
      if (label && LANG_LABELS[lang]) label.textContent = LANG_LABELS[lang];
      document.documentElement.lang = lang;
      closeOverlay();
    });
  });
})();

/* ── Timeline tabs ───────────────────────────────────────────── */
(function initTimeline() {
  const btns = document.querySelectorAll("[data-tl-target]");
  if (!btns.length) return;

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tlTarget;
      const panel = document.getElementById(`tl-${target}`);
      if (!panel) return;

      document.querySelectorAll(".timeline-year-btn").forEach((b) => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      document.querySelectorAll(".timeline-entry").forEach((e) => e.classList.remove("is-active"));

      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      panel.classList.add("is-active");
    });
  });
})();

/* ── FAQ accordion ───────────────────────────────────────────── */
(function initFaq() {
  const faq = document.querySelector("[data-faq]");
  if (!faq) return;

  faq.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const isOpen = item.classList.contains("is-open");

      faq.querySelectorAll(".faq-item").forEach((el) => {
        el.classList.remove("is-open");
        el.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
})();

/* ── Scroll reveal ───────────────────────────────────────────── */
(function initReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();

/* ── Partner form ────────────────────────────────────────────── */
(function initPartnerForm() {
  const form = document.querySelector("[data-partner-form]");
  const note = document.querySelector("[data-form-note]");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const org = String(data.get("organization") || "").trim();
    const email = String(data.get("email") || "").trim();
    const type = String(data.get("type") || "").trim();
    const region = String(data.get("region") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(
      `Partnership inquiry — ${org || "Unlocking Bulgaria website"}`
    );
    const body = encodeURIComponent(
      [
        `Organization: ${org}`,
        `Email: ${email}`,
        `Type: ${type}`,
        `Region: ${region}`,
        "",
        "Partnership interest:",
        message,
      ].join("\n")
    );

    window.location.href = `mailto:partners@unlockingbulgaria.com?subject=${subject}&body=${body}`;
    if (note) note.textContent = "Opening your email client with the inquiry.";
  });
})();

/* ── Conversion events ───────────────────────────────────────── */
(function initConversion() {
  [
    ["a[href='#download']", "download_cta_click"],
    ["[data-lang-toggle]", "language_selector_open"],
    [".domain-card-cta", "domain_explore_click"],
  ].forEach(([selector, event]) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.addEventListener("click", () => {
        window.dispatchEvent(
          new CustomEvent("unlockingbulgaria:conversion", { detail: { event } })
        );
      });
    });
  });
})();
