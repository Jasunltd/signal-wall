# Testing Specifications & Guidelines

This document details the testing strategy, frameworks, execution steps, and verification procedures for [Project Name].

---

## 1. Test Strategy Overview

We enforce a strict Test-Driven Development (TDD) cycle. Every bug fix or feature implementation should begin with a failing test.

| Test Level | Scope | Framework | Execution Command | Target Coverage |
| :--- | :--- | :--- | :--- | :--- |
| **Unit Tests** | Single function/class isolation; co-located with target files | [Vitest / pytest / cargo test] | `npm run test:unit` | `> 80%` |
| **Integration Tests** | Subsystem/API integrations; database reads/writes | [Vitest / pytest] | `npm run test:integration` | `> 70%` |
| **E2E / Visual** | User flows, browser checks, page rendering | [Playwright] | `npm run test:e2e` | Critical journeys |

---

## 2. Cryptographic Test Evidence (Mandatory Gate)

As defined in the development rules, commits are blocked unless fresh cryptographic proof of test execution is generated.

### How it works
1.  Tests must be run via the `just test-evidence` command.
2.  The script redirects stdout and stderr of the test runner to a temporary file, hashes the output using SHA-256, and writes the signed hash record to `.test-evidence/`.
3.  The pre-commit hook checks if the timestamp of the signed hash is less than 5 minutes old.

### Command Execution
To run tests and update the commit gate verification hash:
```bash
just test-evidence
```

---

## 3. Mocking & External Dependency Isolation

### Network Requests
*   **NEVER** make real network HTTP requests during unit tests.
*   Use libraries like `msw` (Mock Service Worker) for API endpoint mocks or mock standard network clients (fetch, axios).

### Databases
*   For integration tests that require a database, prefer a local in-memory instance (e.g., `sqlite3` in-memory mode `:memory:`) or set up a clean docker container database refreshed before each test suite runs.

### AI Model / LLM Calls
*   Always mock API calls to LiteLLM or direct providers (OpenAI, Anthropic). Create fixture responses matching standard chat completion response schemas.

---

## 4. Writing Unit Tests (Co-location Standard)

*   All unit tests must be co-located with their target implementation files.
*   Example file tree:
    ```text
    src/
    ├── application/
    │   ├── user-validator.ts
    │   └── user-validator.test.ts  <-- Co-located unit test
    ```

---

## 5. Visual Regression Testing (For UI Projects)

If the project includes a UI, run visual validation:
1.  Run screenshot diffs via Playwright:
    ```bash
    npm run test:visual
    ```
2.  If differences are intended (due to visual redesign), update visual baselines using:
    ```bash
    npx playwright test --update-snapshots
    ```
3.  Log visual updates with the prompt and screenshots inside `DESIGN.md`.

---

## Related Docs

- `SPEC.md` — acceptance criteria drive test cases
- `ARCHITECTURE.md` — module budgets, quality requirements
- `DESIGN.md` — visual regression baselines
- `SETUP.md` — test execution prerequisites
- `docs/adr/` — architecture decision records
