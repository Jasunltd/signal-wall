# Contributing

## Setup

```bash
git clone https://github.com/[owner]/[repo].git
cd [repo]
cp .env.example .env    # fill in required values
# toolchain installation (pick your platform)
mise install             # if using mise
# or: nix develop        # if using Nix
# or: npm install         # if using Node
```

## Development

```bash
# run tests
just test-evidence       # or: npm test / cargo test / pytest

# lint and format
just fix-slop .          # or: npm run lint / ruff check .

# run locally
npm run dev              # or: cargo run / python -m [module]
```

## Pull Requests

1. Create a feature branch from `main`.
2. Make changes. Keep commits small and focused.
3. Run `just test-evidence` before pushing.
4. Open a PR. The CI must pass.
5. Request review. At least one approval required.

## Commit Style

Follow [Conventional Commits](https://www.conventionalcommits.org/): `type(scope): description`

| Type     | When                           |
| -------- | ------------------------------ |
| `feat`   | New feature                    |
| `fix`    | Bug fix                        |
| `docs`   | Documentation only             |
| `refactor` | Code change, no fix/feature  |
| `test`   | Adding or updating tests       |
| `chore`  | Build, deps, tooling           |

## Architecture

Non-trivial changes should reference or create an ADR in `docs/adr/`. See `ARCHITECTURE.md` for the full system design.

---

## Related Docs

- `SETUP.md` — local development bootstrap
- `TESTING.md` — test strategy and commands
- `ARCHITECTURE.md` — system architecture and module boundaries
- `PLAN.md` — roadmap and active workstreams
