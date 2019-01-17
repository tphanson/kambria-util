var assert = require('assert');
var kamUtil = require('../dist');

describe('Net lib', function () {

  describe('rand()', function () {
    it('securely randomize a number', function () {
      let re = kamUtil.secure.rand(256);
      console.log('Random number:', re);
      assert.notEqual(re, null);
    });
  });
});