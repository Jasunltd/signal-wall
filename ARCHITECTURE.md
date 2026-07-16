# Architecture

Signal Wall is a dependency-free static application. index.html loads assets/app.mjs, which renders fixture channels from assets/manifest.mjs and uses the immutable reducer in assets/state.mjs.

Tests live in tests. Netlify serves the root with headers from _headers. The system has no backend or external integration.

## Research sources
- https://developers.google.com/youtube/iframe_api_reference
- https://developers.google.com/youtube/terms/developer-policies
- https://atproto.com/guides/overview
- https://docs.bsky.app/docs/advanced-guides/oauth-client
