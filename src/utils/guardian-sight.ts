/**
 * Guardian Sight Prohodna — vanilla TS island, no framework.
 * Handles: clip-path slider reveal, toggle button, touch drag,
 * particle activation, keyboard navigation, ARIA live region.
 */

export function initGuardianSight(): void {
  const section = document.getElementById("gsp-section") as HTMLElement | null;
  if (!section) return;

  const slider = section.querySelector<HTMLInputElement>("#gsp-slider");
  const toggle = section.querySelector<HTMLButtonElement>("#gsp-toggle");
  const overlay = section.querySelector<HTMLElement>("#gsp-overlay");
  const particles = section.querySelector<HTMLElement>("#gsp-particles");
  const liveRegion = section.querySelector<HTMLElement>("#gsp-live");
  const photoContainer = section.querySelector<HTMLElement>("#gsp-photo-container");
  const dividerLine = section.querySelector<HTMLElement>(".gsp-divider-line");
  const dividerHandle = section.querySelector<HTMLElement>(".gsp-divider-handle");
  const hintLabel = section.querySelector<HTMLElement>(".gsp-hint-label");

  const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ── State ─────────────────────────────────────────────────────
  let isOn = false;

  // ── Apply clip-path at a given 0..100 percentage ──────────────
  function applyReveal(pct: number): void {
    if (!overlay) return;
    const clamped = Math.max(0, Math.min(100, pct));
    const right = 100 - clamped;
    overlay.style.clipPath = `inset(0 ${right}% 0 0)`;
    overlay.style.opacity = clamped > 0 ? "1" : "0";
    slider?.setAttribute("aria-valuenow", String(Math.round(clamped)));

    // Move divider line + handle to match
    if (dividerLine) dividerLine.style.left = `${clamped}%`;
    if (dividerHandle) dividerHandle.style.left = `calc(${clamped}% - 22px)`;

    // Fade out hint after first interaction
    if (clamped > 0 && hintLabel) hintLabel.style.opacity = "0";

    // Sync toggle aria-pressed when slider moved manually
    const pressed = clamped > 0;
    toggle?.setAttribute("aria-pressed", String(pressed));
    updateToggleLabel(pressed);
    setParticles(pressed && !rm);
  }

  // ── Toggle label ──────────────────────────────────────────────
  function updateToggleLabel(on: boolean): void {
    if (!toggle) return;
    const label = on
      ? (toggle.dataset.labelOff ?? "Lower the Guardian Sight")
      : (toggle.dataset.labelOn ?? "Raise the Guardian Sight");
    toggle.textContent = label;
  }

  // ── Announce to screen readers ─────────────────────────────────
  function announce(on: boolean): void {
    if (!liveRegion) return;
    liveRegion.textContent = on
      ? (liveRegion.dataset.msgOn ?? "Guardian Sight activated")
      : (liveRegion.dataset.msgOff ?? "Guardian Sight deactivated");
  }

  // ── Particle class toggle ─────────────────────────────────────
  function setParticles(active: boolean): void {
    particles?.classList.toggle("gsp-particles-active", active);
  }

  // ── Toggle button handler ─────────────────────────────────────
  function handleToggle(): void {
    isOn = !isOn;
    const target = isOn ? 100 : 0;
    if (slider) slider.value = String(target);
    applyReveal(target);
    announce(isOn);
  }

  toggle?.addEventListener("click", handleToggle);

  // ── Keyboard on toggle: Space/Enter already fires click ───────

  // ── Slider (range input) ──────────────────────────────────────
  if (slider) {
    slider.addEventListener("input", () => {
      applyReveal(Number(slider.value));
      isOn = Number(slider.value) > 0;
      if (Number(slider.value) === 100 || Number(slider.value) === 0) {
        announce(isOn);
      }
    });

    // Arrow keys — richer step control
    slider.addEventListener("keydown", (e) => {
      const step = e.shiftKey ? 10 : 5;
      let val = Number(slider.value);
      if (e.key === "ArrowRight" || e.key === "ArrowUp") {
        e.preventDefault();
        val = Math.min(100, val + step);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
        e.preventDefault();
        val = Math.max(0, val - step);
      } else if (e.key === "Home") {
        e.preventDefault();
        val = 0;
      } else if (e.key === "End") {
        e.preventDefault();
        val = 100;
      } else {
        return;
      }
      slider.value = String(val);
      slider.dispatchEvent(new Event("input"));
    });
  }

  // ── Pointer / touch drag on the photo container ───────────────
  if (photoContainer && slider) {
    let dragging = false;

    photoContainer.addEventListener("pointerdown", (e) => {
      // Only start drag on the image area, not on the slider thumb itself
      if ((e.target as HTMLElement).id === "gsp-slider") return;
      dragging = true;
      photoContainer.setPointerCapture(e.pointerId);
      moveDrag(e.clientX);
    });

    photoContainer.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      moveDrag(e.clientX);
    });

    const endDrag = () => { dragging = false; };
    photoContainer.addEventListener("pointerup", endDrag);
    photoContainer.addEventListener("pointercancel", endDrag);

    function moveDrag(clientX: number): void {
      const rect = photoContainer!.getBoundingClientRect();
      const pct = Math.round(
        Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
      );
      slider!.value = String(pct);
      slider!.dispatchEvent(new Event("input"));
    }
  }

  // ── Intersection Observer: reset when out of view ─────────────
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            // Quietly collapse when scrolled away
            isOn = false;
            if (slider) slider.value = "0";
            applyReveal(0);
          }
        });
      },
      { threshold: 0 }
    );
    observer.observe(section);
  }

  // ── Init ──────────────────────────────────────────────────────
  applyReveal(0);
}
