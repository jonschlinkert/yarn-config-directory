'use strict';

require('mocha');
var assert = require('assert');
var yarnConfig = require('./');

describe('yarn-config-directory', function() {
  it('should get the yarn global config directory', function() {
    assert.equal(typeof yarnConfig(), 'string');
    assert(/yarn/i.test(yarnConfig()));
  });
});
