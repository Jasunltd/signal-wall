# Setup Guide: [Project Name]

One-command bootstrap. Get a working development environment in under 2 minutes.

---

## 1. Prerequisites

- [Node.js >= 22] / [Python >= 3.12] / [Rust >= 1.80] / [Go >= 1.22]
- [mise](https://mise.jdx.dev) (recommended) or install tools manually
- [Git](https://git-scm.com)
- [Docker](https://docker.com) (if the project needs containers)

---

## 2. Quick Start

```bash
git clone https://github.com/[owner]/[repo].git
cd [repo]

# Install toolchain
mise install          # or: nix develop / npm install / pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env with required values

# Initialize database (if applicable)
npm run db:migrate    # or: python manage.py migrate / diesel migration run

# Run tests to verify setup
just test-evidence    # or: npm test / cargo test / pytest

# Start development server
npm run dev           # or: cargo run / python -m [module] / go run .
```

---

## 3. Environment Variables

See `.env.example` for the full list. Required vars:

| Variable | Description | Example |
| :--- | :--- | :--- |
| `DATABASE_URL` | Database connection string | `postgresql://localhost:5432/db` |
| `API_KEY` | Third-party API key | `sk-xxxxxxxx` |
| `SECRET_KEY` | App signing secret | (generated via `openssl rand -hex 32`) |

---

## 4. Common Commands

| Task | Command |
| :--- | :--- |
| Run dev server | `npm run dev` |
| Run all tests | `just test-evidence` |
| Run linting | `just fix-slop .` |
| Build for production | `npm run build` |
| Run database migrations | `npm run db:migrate` |
| Open database console | `npm run db:console` |
| Generate new migration | `npm run db:generate -- --name [name]` |

---

## 5. Troubleshooting

| Symptom | Cause | Fix |
| :--- | :--- | :--- |
| `DATABASE_URL not set` | Missing `.env` file | `cp .env.example .env` and fill in values |
| Port already in use | Another process on port | `lsof -i :[port]` then `kill [PID]` |
| Migration errors | Database behind schema | `npm run db:migrate` or `npm run db:reset` |
| Permission denied | File ownership | `chmod +x ./scripts/*` |

---

## Related Docs

- `CONTRIBUTING.md` — PR process, commit conventions
- `DEPLOY.md` — deployment environments, rollback
- `TESTING.md` — test strategy and commands
- `.env.example` — required environment variables
