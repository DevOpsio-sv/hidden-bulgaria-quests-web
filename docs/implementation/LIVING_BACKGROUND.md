# Living Background

`LivingBackground.astro` is rendered once from `Base.astro` and is decorative only. The whole system is tuned by `--bg-intensity` on `:root` in `src/styles/global.css`; use `0` to effectively mute it and `1` for the strongest intended presentation.

The primary scroll response uses CSS scroll-driven animations:

```css
animation-timeline: scroll(root);
```

Browsers without scroll timeline support keep the same dark mood with a slow autonomous gradient drift. No content or navigation depends on this animation.

Reduced motion users receive a static dark gradient plus the SVG turbulence grain. Touch and small-screen devices keep only the gentle gradient mesh and grain to avoid expensive blur and particle work.

The grain is an inline SVG `feTurbulence` layer in the component, so there is no external image asset or dependency.
