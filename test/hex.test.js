var assert = require('assert');
var kamUtil = require('../dist');

const hexNumber = '0x3635c9adc5dea00000';
const bigNumber = '1000000000000000000000';
const hex1 = '1';
const _hex1 = '0x1';
const hex2 = '2';
const _hex2 = '0x2';
const hex12 = '0x12';

describe('Hex lib', function () {

  describe('toBigNumber()', function(){
    it('vonvert hex to big number', function () {
      let re = kamUtil.hex.toBigNumber(hexNumber);
      assert.equal(re.toFixed(), bigNumber);
    });
  });
  
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