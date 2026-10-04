const test = require('node:test');
const assert = require('node:assert/strict');
const routes = require('../pathways.js');
test('all twelve goal/device combinations provide one bounded next route', () => {
  for (const goal of ['play', 'record', 'code', 'build']) for (const device of ['ipad', 'computer', 'browser']) {
    const route = routes[goal][device]; assert.equal(route.length, 5);
    assert.ok(route.every(s => typeof s === 'string' && s.trim())); assert.equal(new URL(route[2]).protocol, 'https:');
  }
});
test('game-building routes use the existing original exercise and disclose physical input limits', () => {
  for (const route of Object.values(routes.build)) { const u = new URL(route[2]); assert.equal(u.origin + u.pathname, 'https://ibloud.github.io/ren-tap-tap-revenge/lesson.html'); assert.ok(['', '#controller'].includes(u.hash)); }
  assert.match(routes.build.ipad[4], /no Cyber-G input/); assert.match(routes.build.computer[4], /not implemented/);
});
