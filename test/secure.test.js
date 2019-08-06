var assert = require('assert');
var kamUtil = require('../dist');

describe('Secure lib', function () {

  describe('rand()', function () {
    it('securely randomize a number', function () {
      let re = kamUtil.secure.rand(256);
      assert.notEqual(re, null);
    });
  });
});