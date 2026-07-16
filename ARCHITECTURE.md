# Architecture

Signal Wall is a dependency-free static application. `index.html` loads `assets/app.mjs`, which renders fixture channels from `assets/manifest.mjs` and uses the immutable reducer in `assets/state.mjs`.

`tests/` contains Node BDD checks. Netlify serves the root with headers from `_headers`. The system has no backend or external integration.
