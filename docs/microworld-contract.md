# Signal Wall microworld contract

## Boundary
One local user, one remote, six fixture channels, and no network, storage, media, account, room, clock, or external source. The only shareable state is a public fixture channel fragment.

## State
State contains power, selectedId, focusId, pending tune, muted, effects, and route. IDs always come from the fixture manifest.

## Invariants
- Power off clears pending tuning and blocks every channel action/history write.
- Mute remains usable and survives power cycles; reload persistence is not promised.
- Only the newest tune token can settle.
- Exactly one enabled channel control has tabindex zero; arrows move focus only; Enter or Space tunes.
- A valid deliberate tune pushes history once; remote scans and reconciliation replace it.
- Unknown fragments remain unavailable and never load media.
- No transition can issue a request, use storage, or create a media element.

## Probes
Run reducer traces for stale token, power off, wraparound focus, unknown route, and effects. Browser probes assert interactions add zero requests.