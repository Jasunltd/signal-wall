import test from 'node:test';
import assert from 'node:assert/strict';
import { createState, requestTune, settleTune, stepChannel, togglePower } from '../assets/state.mjs';

test('a tune only settles the newest request', () => {
  let state = createState('night-drive');
  state = requestTune(state, 'archive-hour', false);
  const stale = state.tuneToken;
  state = requestTune(state, 'public-access', false);
  assert.equal(settleTune(state, stale).selectedChannelId, 'night-drive');
  assert.equal(settleTune(state, state.tuneToken).selectedChannelId, 'public-access');
});

test('reduced motion commits immediately and power blocks tuning', () => {
  let state = createState('night-drive');
  state = requestTune(state, 'archive-hour', true);
  assert.equal(state.selectedChannelId, 'archive-hour');
  state = togglePower(state);
  assert.equal(requestTune(state, 'public-access', false), state);
});

test('channel stepping wraps through the supplied channel order', () => {
  const ids = ['night-drive', 'archive-hour', 'public-access'];
  assert.equal(stepChannel(ids, 'night-drive', -1), 'public-access');
  assert.equal(stepChannel(ids, 'public-access', 1), 'night-drive');
});
