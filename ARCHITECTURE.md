# Architecture

Signal Wall is a Vite-built static application. The required UI is a CSS/HTML 2.5D CRT: DOM owns the screen, controls, metadata, routing, and accessibility. A Three.js GLB may be a noncritical, lazy-loaded decorative layer only; it must not be required for core interaction or content.

The product has explicit minimized and focused states. Focused desktop layout uses 25% discovery/controls, 50% CRT stage, and 25% station dossier. Mobile expresses the same priority vertically. The discovery field is deterministic fixture data until reviewed catalog adapters exist.

Netlify serves the built root with headers from public/_headers. Tests live in tests. There is no backend or external integration in the baseline.

## Research sources
- https://radio.garden
- https://developers.google.com/youtube/iframe_api_reference
- https://developers.google.com/youtube/terms/developer-policies
- https://atproto.com/guides/overview
- https://docs.bsky.app/docs/advanced-guides/oauth-client
