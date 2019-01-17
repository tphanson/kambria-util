var assert = require('assert');
var kamUtil = require('../dist');

const hex1 = '1';
const _hex1 = '0x1';
const hex2 = '2';
const _hex2 = '0x2';
const hex12 = '0x12';

describe('Hex lib', function () {
  
  describe('padHex()', function () {
    it('add prefix 0x', function () {
      let re = kamUtil.hex.padHex(hex1);
      assert.equal(re, _hex1);
    });
  });
  
  describe('unpadHex()', function () {
    it('remove prefix 0x', function () {
      let re = kamUtil.hex.unpadHex(_hex2);
      assert.equal(re, hex2);
    });
  });
  
  describe('mergeHex()', function () {
    it('merge hex strings into one', function () {
      let re = kamUtil.hex.mergeHex(hex1, hex2);
      assert.equal(re, hex12);
    });
  });
});