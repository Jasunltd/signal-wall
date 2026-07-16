# Plan

## Accepted architecture
- CSS-first 2.5D CRT baseline; optional GLB/Three.js decoration only. See docs/adr/0003-css-first-2-5d-crt.md.
- Radio Garden informs spatial discovery behavior, not copied layout or brand.

## Next session
1. Isolate or roll back the current eager 3D production path.
2. Build deterministic CSS hierarchy plates for minimized and focused states.
3. Review screenshots at 320, 768, 1024, and 1440 widths before adding any GLB enhancement.
4. Add an explicit Focus/Minimize native control and CSS-only fallback tests.
5. Resume live catalog-adapter design only after the visual baseline passes.
