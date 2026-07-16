# Feature Specifications: [Project Name]

Behavioral specifications, acceptance criteria, and invariants for each feature in [Project Name].

> **Traceability**: Feature IDs (F-0XX) correspond to `PRODUCT.md` §2. Module targets reference `ARCHITECTURE.md` §6.1.

---

## Feature Index

| ID | Feature | Type | Status | Module |
| :--- | :--- | :--- | :--- | :--- |
| F-001 | [Feature Name] | [New \| Enhancement] | [Proposed \| Specified \| Implemented] | `src/[module]/` |
| F-002 | [Feature Name] | [New \| Enhancement] | [Proposed \| Specified \| Implemented] | `src/[module]/` |

---

## F-001: [Feature Name]

### 1. Purpose & Scope
[1-2 sentences describing what this feature enables. Who benefits and why.]

**Priority**: [P0 (blocker) \| P1 (critical) \| P2 (important) \| P3 (nice-to-have)]

### 2. Acceptance Criteria
- [ ] [Criterion 1 — testable, binary pass/fail]
- [ ] [Criterion 2]
- [ ] [Criterion 3]

### 3. Scenarios

#### Happy Path
```
GIVEN [precondition state]
WHEN [trigger action]
THEN [expected outcome]
AND  [secondary assertion]
```

#### Alternate Paths
```
GIVEN [alternate precondition]
WHEN [different trigger]
THEN [expected outcome]
```

#### Error States
```
GIVEN [precondition]
WHEN [invalid or missing input / timeout / conflict]
THEN [error response or fallback behavior]
AND  [system should remain in valid state]
```

### 4. Data Model

| Field | Type | Required | Validation | Example |
| :--- | :--- | :--- | :--- | :--- |
| `[field_name]` | `[string \| number \| boolean \| uuid \| enum]` | [Yes \| No] | [rule] | `[value]` |
| `[field_name]` | `[string \| number \| boolean \| uuid \| enum]` | [Yes \| No] | [rule] | `[value]` |

### 5. Business Invariants
Rules that must always hold true after any operation.
- [Invariant 1]
- [Invariant 2]
- [Invariant 3]

### 6. Dependencies
- **Upstream**: [Service / module this feature depends on]
- **Downstream**: [Features / consumers that depend on this]
- **External**: [Third-party API, library, or service]

### 7. Non-Functional Requirements
- **Performance**: [e.g. Response time < 200ms p95]
- **Throughput**: [e.g. 100 ops/sec]
- **Availability**: [e.g. 99.9% uptime]
- **Security**: [e.g. Requires `user` role, input sanitized]

### 8. Test Plan
- **Unit**: [What isolated tests cover]
- **Integration**: [What cross-module tests cover]
- **E2E**: [What end-to-end scenario tests cover]

---

## F-002: [Feature Name]

### 1. Purpose & Scope
[1-2 sentences]

**Priority**: [P0 \| P1 \| P2 \| P3]

### 2. Acceptance Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]

### 3. Scenarios

#### Happy Path
```
GIVEN [...]
WHEN [...]
THEN [...]
```

#### Error States
```
GIVEN [...]
WHEN [...]
THEN [...]
```

### 4. Data Model

| Field | Type | Required | Validation | Example |
| :--- | :--- | :--- | :--- | :--- |
| `[field]` | `[type]` | [Yes \| No] | [rule] | `[value]` |

### 5. Business Invariants
- [Invariant 1]

### 6. Dependencies
- **Upstream**: [Dependency]
- **Downstream**: [Dependent]
- **External**: [External]

### 7. Non-Functional Requirements
- **Performance**: [Requirement]
- **Security**: [Requirement]

### 8. Test Plan
- **Unit**: [Coverage]
- **Integration**: [Coverage]

---

## Traceability Matrix

| Feature ID | PRODUCT.md | SPEC.md § | ARCHITECTURE.md §6.1 | ADR |
| :--- | :--- | :--- | :--- | :--- |
| F-001 | §2 Phase 1 | §F-001 | Feature A → `src/[module]` | [ADR-XXXX](docs/adr/) |
| F-002 | §2 Phase 1 | §F-002 | Feature B → `src/[module]` | [ADR-XXXX](docs/adr/) |

---

## Architectural Decisions

| ADR ID | Decision Title | Status | Date |
| :--- | :--- | :--- | :--- |
| [ADR-XXXX](docs/adr/XXXX-feature-design.md) | Feature design decisions | [Proposed \| Accepted] | YYYY-MM-DD |

---

## Related Docs

- `PRODUCT.md` — feature inventory, priorities, personas
- `ARCHITECTURE.md` — module decomposition, Runtime View §6.1
- `TESTING.md` — test strategy derived from acceptance criteria
- `docs/adr/` — architecture decision records
