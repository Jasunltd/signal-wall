# ADR 0003: CSS-first 2.5D CRT with optional 3D enhancement

- Status: Accepted
- Date: 2026-07-16

## Context
The shipped Three.js CRT treated a low-poly GLB as the primary experience. Visual review found it did not establish a believable CRT, obscured the product hierarchy, used unconditional rendering, and lacked a non-WebGL visual baseline. Radio Garden is an interaction reference for spatial discovery, not a visual layout to copy.

## Decision
Signal Wall will use a CSS/HTML CRT as the required 2.5D baseline. The DOM owns the recessed 4:3 screen, bezel, cabinet silhouette, status, controls, metadata, focus behavior, and responsive layouts.

A GLB/Three.js scene may return only as a lazy-loaded decorative enhancement behind the DOM screen. It cannot own routing, tuning, media, status, accessibility, or an essential interaction. A visible native Focus/Minimize button replaces canvas-only toggling.

## Constraints
- The minimized state has a compact CRT physically above the control dock and an interactive discovery field.
- The focused desktop state is 25% controls/discovery, 50% CRT stage, 25% dossier; mobile expresses that hierarchy vertically.
- The channel discovery field is deterministic and spatially meaningful; never random decoration.
- CSS-only, model-load failure, WebGL loss, reduced motion, and low-capability paths remain fully functional.
- Optional enhancement pauses when hidden/offscreen, honors reduced motion, and has explicit transfer/CPU/GPU budgets.
- Any same-origin GLB request requires a reviewed CSP update and browser verification.

## Consequences
The current 3D release is an experiment, not the target architecture. Future visual work must pass screenshot review at 320, 768, 1024, and 1440 widths; keyboard/reduced-motion checks; deterministic visual regression; and a recorded go/no-go decision before deployment.
