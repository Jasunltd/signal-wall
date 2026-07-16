# Security headers

Configure these on the selected static host for every HTML response:

    Content-Security-Policy: default-src 'none'; base-uri 'none'; connect-src 'none'; form-action 'none'; frame-ancestors 'none'; frame-src 'none'; object-src 'none'; worker-src 'none'; manifest-src 'none'; img-src 'none'; media-src 'none'; font-src 'none'; script-src 'self'; script-src-attr 'none'; style-src 'self'; style-src-attr 'none'
    X-Content-Type-Options: nosniff
    Referrer-Policy: no-referrer
    Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()
    X-Frame-Options: DENY

Redirect HTTP to HTTPS. Enable HSTS only after all relevant subdomains are HTTPS. Do not permit remote sources or unsafe CSP directives without a new ADR and adapter review.
