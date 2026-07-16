# API Reference: [Project Name]

Public and internal API contracts for [Project Name].

---

## 1. API Overview

- **Base URL**: `https://api.example.com/v1`
- **Content-Type**: `application/json`
- **Authentication**: [Bearer token \| API key \| OAuth 2.0]
- **Rate Limiting**: [e.g. 1000 req/min per key, 429 on exceed]
- **Versioning**: URL path (`/v1/`). Breaking changes = new version.

---

## 2. Conventions

### Request Headers
```
Authorization: Bearer <token>
Content-Type: application/json
Accept: application/json
X-Request-ID: <uuid>
```

### Response Envelope
```json
{
  "data": {},
  "error": null,
  "meta": {
    "request_id": "uuid",
    "page": 1,
    "total": 100
  }
}
```

### Error Format
```json
{
  "data": null,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "details": [{"field": "email", "reason": "missing"}]
  }
}
```

### HTTP Status Codes
| Code | Meaning | When |
| :--- | :--- | :--- |
| `200` | OK | Successful GET, PUT, PATCH |
| `201` | Created | Successful POST |
| `204` | No Content | Successful DELETE |
| `400` | Bad Request | Malformed input, validation failure |
| `401` | Unauthorized | Missing or invalid credentials |
| `403` | Forbidden | Valid credentials, insufficient permissions |
| `404` | Not Found | Resource does not exist |
| `409` | Conflict | Duplicate resource, version mismatch |
| `422` | Unprocessable | Semantically invalid input |
| `429` | Too Many Requests | Rate limit exceeded |
| `500` | Internal Error | Unexpected server failure |

### Pagination
- **Parameters**: `?page=1&per_page=20` (default: `per_page=50`, max: `100`)
- **Response**: includes `meta.page`, `meta.total`, `meta.per_page`
- **Link header**: `<url>; rel="next"` for cursor-based navigation

---

## 3. Endpoints

### [Resource Name]

#### `GET /v1/[resource]`
List resources. Supports `?page=`, `?per_page=`, `?sort=`, `?filter[field]=`.

**Response**: `200 OK`
```json
{
  "data": [{ "id": "uuid", "created_at": "ISO8601" }],
  "meta": { "page": 1, "total": 42, "per_page": 20 }
}
```

#### `POST /v1/[resource]`
Create a resource.

**Request**:
```json
{ "name": "string (required)", "description": "string" }
```

**Response**: `201 Created`

#### `GET /v1/[resource]/:id`
Get a single resource.

**Response**: `200 OK`

#### `PUT /v1/[resource]/:id`
Full update. All fields required.

**Request**: (same as POST)

**Response**: `200 OK`

#### `PATCH /v1/[resource]/:id`
Partial update. Only send changed fields.

**Response**: `200 OK`

#### `DELETE /v1/[resource]/:id`
Soft-delete by default. Hard delete via `?hard=true`.

**Response**: `204 No Content`

---

## 4. Webhooks (if applicable)

- **Signature**: `X-Signature: HMAC-SHA256(payload, secret)`
- **Retry policy**: 3 attempts with exponential backoff (1s, 5s, 25s)
- **Idempotency**: `X-Idempotency-Key` header, unique per event

| Event | Payload | Trigger |
| :--- | :--- | :--- |
| `resource.created` | `{ id, type, data }` | After POST |
| `resource.updated` | `{ id, type, changes }` | After PUT/PATCH |
| `resource.deleted` | `{ id, type }` | After DELETE |

---

## 5. Rate Limits

| Tier | Limit | Window |
| :--- | :--- | :--- |
| Free | 100 req | 1 minute |
| Pro | 1000 req | 1 minute |
| Enterprise | Custom | — |

Headers in every response:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 87
X-RateLimit-Reset: 1623456789
```

---

## 6. Changelog

| Version | Date | Changes |
| :--- | :--- | :--- |
| v1.0 | YYYY-MM-DD | Initial release |

---

## 7. Architectural Decisions

| ADR ID | Decision Title | Status | Date |
| :--- | :--- | :--- | :--- |
| [ADR-XXXX](docs/adr/XXXX-api-design.md) | API versioning strategy | [Proposed \| Accepted] | YYYY-MM-DD |
| [ADR-XXXX](docs/adr/XXXX-response-format.md) | Response envelope and error format | [Proposed \| Accepted] | YYYY-MM-DD |

---

## Related Docs

- `ARCHITECTURE.md` — module decomposition, interfaces
- `AUTH.md` — authentication, authorization, rate limits
- `PLAN.md` — roadmap, milestones
- `docs/adr/` — architecture decision records
