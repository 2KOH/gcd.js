const assert = require('assert');
const gcd = require('./index.js');

assert.equal(gcd(15, 24), 3);
assert.equal(gcd(15, 1), 1);
assert.equal(gcd(15, 15), 15);

console.log('ok');
