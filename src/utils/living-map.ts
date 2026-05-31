/**
 * Living Map interactivity — vanilla TS, no framework.
 * Handles: domain region hover/focus, checkpoint node hover/focus,
 * tooltip positioning, route pathway drawing, keyboard navigation.
 */

export function initLivingMap(): void {
  const container = document.getElementById("lmap-container") as HTMLElement | null;
  const svg = document.getElementById("lmap-svg") as SVGSVGElement | null;
  const tooltip = document.getElementById("lmap-tooltip") as HTMLElement | null;
  const domainCard = document.getElementById("lmap-domain-card") as HTMLElement | null;
  const pathwaysGroup = document.getElementById("lmap-pathways") as SVGGElement | null;

  if (!container || !svg) return;

  const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const regions = Array.from(svg.querySelectorAll<SVGElement>("[data-domain-id]"));
  const nodes = Array.from(svg.querySelectorAll<SVGElement>("[data-place-id]"));

  // ── Domain region interactions ───────────────────────────────
  regions.forEach((el) => {
    el.addEventListener("mouseenter", () => onRegionEnter(el));
    el.addEventListener("focus", () => onRegionEnter(el));
    el.addEventListener("mouseleave", onRegionLeave);
    el.addEventListener("blur", onRegionLeave);
    el.addEventListener("keydown", (e) => {
      const ke = e as KeyboardEvent;
      if (ke.key === "Enter" || ke.key === " ") {
        ke.preventDefault();
        onRegionEnter(el);
      }
      if (ke.key === "Escape") onRegionLeave();
    });
  });

  // ── Node interactions ─────────────────────────────────────────
  nodes.forEach((el) => {
    el.addEventListener("mouseenter", () => onNodeEnter(el));
    el.addEventListener("focus", () => onNodeEnter(el));
    el.addEventListener("mouseleave", () => onNodeLeave(el));
    el.addEventListener("blur", () => onNodeLeave(el));
    el.addEventListener("click", () => navigate(el.dataset.href ?? ""));
    el.addEventListener("keydown", (e) => {
      const ke = e as KeyboardEvent;
      if (ke.key === "Enter") navigate(el.dataset.href ?? "");
      if (ke.key === "Escape") onNodeLeave(el);
    });
  });

  // ── Region handlers ───────────────────────────────────────────
  function onRegionEnter(el: SVGElement) {
    const id = el.dataset.domainId;
    regions.forEach((r) => {
      r.classList.toggle("lmap-region-active", r.dataset.domainId === id);
      r.classList.toggle("lmap-region-dim", r.dataset.domainId !== id);
    });
    showDomainCard(el);
  }

  function onRegionLeave() {
    regions.forEach((r) => r.classList.remove("lmap-region-active", "lmap-region-dim"));
    hideDomainCard();
  }

  // ── Node handlers ─────────────────────────────────────────────
  function onNodeEnter(el: SVGElement) {
    el.classList.add("lmap-node-active");
    showTooltip(el);
    if (!rm && pathwaysGroup) drawPathways(el);
  }

  function onNodeLeave(el: SVGElement) {
    el.classList.remove("lmap-node-active");
    hideTooltip();
    clearPathways();
  }

  // ── Tooltip ───────────────────────────────────────────────────
  function showTooltip(el: SVGElement) {
    if (!tooltip || !container) return;
    const pos = svgToContainer(Number(el.dataset.cx), Number(el.dataset.cy));
    tooltip.style.left = `${pos.x}px`;
    tooltip.style.top = `${pos.y}px`;
    const titleEl = tooltip.querySelector<HTMLElement>(".lmap-tt-title");
    const subEl = tooltip.querySelector<HTMLElement>(".lmap-tt-sub");
    if (titleEl) titleEl.textContent = el.dataset.title ?? "";
    if (subEl) subEl.textContent = el.dataset.subtitle ?? "";
    tooltip.removeAttribute("hidden");
  }

  function hideTooltip() {
    tooltip?.setAttribute("hidden", "");
  }

  // ── Domain card ───────────────────────────────────────────────
  function showDomainCard(el: SVGElement) {
    if (!domainCard) return;
    const nameEl = domainCard.querySelector<HTMLElement>(".lmap-dc-name");
    const epochEl = domainCard.querySelector<HTMLElement>(".lmap-dc-epoch");
    const regionEl = domainCard.querySelector<HTMLElement>(".lmap-dc-region");
    const keyEl = domainCard.querySelector<HTMLElement>(".lmap-dc-key");
    if (nameEl) nameEl.textContent = el.dataset.domainName ?? "";
    if (epochEl) {
      epochEl.textContent = el.dataset.epochLabel ?? "";
      epochEl.dataset.epoch = el.dataset.epoch ?? "";
    }
    if (regionEl) regionEl.textContent = el.dataset.domainRegion ?? "";
    if (keyEl) keyEl.textContent = el.dataset.domainKey ?? "";
    domainCard.removeAttribute("hidden");
  }

  function hideDomainCard() {
    domainCard?.setAttribute("hidden", "");
  }

  // ── Route pathways ────────────────────────────────────────────
  function drawPathways(el: SVGElement) {
    if (!pathwaysGroup || !svg) return;
    clearPathways();
    const routeId = el.dataset.routeId;
    if (!routeId) return;
    const cx0 = Number(el.dataset.cx);
    const cy0 = Number(el.dataset.cy);
    const mates = svg.querySelectorAll<SVGElement>(`[data-place-id][data-route-id="${routeId}"]`);
    mates.forEach((mate) => {
      if (mate === el) return;
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", String(cx0));
      line.setAttribute("y1", String(cy0));
      line.setAttribute("x2", mate.dataset.cx ?? "0");
      line.setAttribute("y2", mate.dataset.cy ?? "0");
      line.setAttribute("class", "lmap-pathway");
      pathwaysGroup.appendChild(line);
    });
  }

  function clearPathways() {
    if (pathwaysGroup) pathwaysGroup.innerHTML = "";
  }

  // ── Helpers ───────────────────────────────────────────────────
  function navigate(href: string) {
    if (href) window.location.href = href;
  }

  function svgToContainer(cx: number, cy: number): { x: number; y: number } {
    if (!svg || !container) return { x: 0, y: 0 };
    const svgRect = svg.getBoundingClientRect();
    const cRect = container.getBoundingClientRect();
    const sx = svgRect.width / 800;
    const sy = svgRect.height / 500;
    return {
      x: cx * sx + svgRect.left - cRect.left,
      y: cy * sy + svgRect.top - cRect.top,
    };
  }
}
