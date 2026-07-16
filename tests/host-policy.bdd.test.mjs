import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const files=['index.html','assets/app.mjs','assets/manifest.mjs','assets/state.mjs','assets/styles.css'];
test('BDD: static artifact contains no remote media, network, or persistence APIs',async()=>{const source=(await Promise.all(files.map(f=>readFile(f,'utf8')))).join(String.fromCharCode(10));for(const forbidden of ['fetch(','XMLHttpRequest','WebSocket','sendBeacon','localStorage','sessionStorage','indexedDB','serviceWorker','<iframe','<video','<audio','http://','https://'])assert.equal(source.includes(forbidden),false,forbidden)});
test('BDD: Netlify policy blocks network and media',async()=>{const policy=await readFile('_headers','utf8');for(const directive of ["default-src 'none'","connect-src 'none'","media-src 'none'","frame-ancestors 'none'","script-src 'self'","style-src 'self'",'Referrer-Policy: no-referrer'])assert.ok(policy.includes(directive),directive)});
