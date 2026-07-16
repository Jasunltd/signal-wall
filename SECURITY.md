# Security Policy

## Reporting a Vulnerability

**Do not open a public issue.** Instead, send details to:

- **Email:** [security-contact@example.com]
- **PGP Key:** [link-to-pgp-key] (fingerprint: `XXXX XXXX XXXX XXXX`)

You should receive a response within 48 hours. If the issue is confirmed, we will release a patch as soon as possible depending on complexity.

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| [latest]   | :white_check_mark: |
| < [latest]   | :x:                |

## Disclosure Policy

- Reporter will be credited in the release notes (unless they request anonymity).
- A CVE will be requested for confirmed vulnerabilities.
- Fixes are backported to the latest stable release only.

---

## Related Docs

- `AUTH.md` — authentication architecture, key management
- `ARCHITECTURE.md` — system boundaries, threat surface
- `DEPLOY.md` — secrets management, rotation
- `docs/adr/` — architecture decision records
