'use strict';
require('../common');
const assert = require('assert');

// Check availibility of taint API on string prototpye
assert.strictEqual(typeof ''.isTainted, 'function');
assert.strictEqual(typeof ''.getTaint, 'function');
assert.strictEqual(typeof ''.taint, 'function');
assert.strictEqual(typeof ''.untaint, 'function');
