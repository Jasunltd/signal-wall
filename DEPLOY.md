# Deployment

## Host
Netlify is the selected first host. It provides static deploy previews and reads the version-controlled _headers file at the publish root.

## Current boundary
Deploy only static first-party files. There are no APIs, databases, forms, cookies, analytics, remote fonts, embeds, service workers, or media.

## Release procedure
1. Connect this repository to Netlify and keep the publish directory as the repository root.
2. Confirm the deploy preview returns the exact headers in _headers.
3. Run the BDD suite and inspect browser requests: only the initial same-origin HTML, CSS, and modules may load.
4. Promote only after the preview has no cookies, storage, third-party requests, or CSP violations.

Redirect HTTP to HTTPS. Enable HSTS only after all relevant subdomains are HTTPS.
