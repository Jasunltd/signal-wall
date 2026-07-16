import test from 'node:test';
import assert from 'node:assert/strict';
import {createState,requestTune,settleTune,togglePower,toggleMute,moveFocus,setEffects,unavailable} from '../assets/state.mjs';
const ids=['night-drive','archive-hour','public-access'];
test('BDD: power off cancels a tune and mute survives a power cycle',()=>{let s=createState(ids[0]);s=requestTune(s,ids[1],false);const token=s.tuneToken;s=togglePower(s);assert.equal(s.powered,false);assert.equal(s.pendingChannelId,null);assert.equal(settleTune(s,token),s);s=toggleMute(s);assert.equal(s.muted,false);s=togglePower(s);assert.equal(s.selectedChannelId,ids[0]);assert.equal(s.muted,false)});
test('BDD: roving focus wraps without tuning',()=>{let s=createState(ids[0]);s=moveFocus(s,ids,-1);assert.equal(s.focusId,ids[2]);assert.equal(s.selectedChannelId,ids[0])});
test('BDD: effects are constrained and unavailable routes retain their fragment',()=>{let s=createState(ids[0]);assert.equal(setEffects(s,'high').effects,'high');assert.equal(setEffects(s,'bad'),s);s=unavailable(s,'bad-route');assert.deepEqual(s.route,{kind:'unavailable',fragment:'bad-route'})});
