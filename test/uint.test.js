var assert = require('assert');
var kamUtil = require('../dist');

const KAT = '10';
const WKAT = '10000000000000000000';

describe('Unit lib', function () {

  describe('wkat2KAT()', function () {
    it('convert WKAT to KAT', function () {
      let re = kamUtil.unit.wkat2KAT(WKAT);
      assert.equal(re, KAT);
      assert.equal(typeof re, 'string');
    });
  });

  describe('kat2WKAT()', function () {
    it('convert KAT to WKAT', function () {
      let re = kamUtil.unit.kat2WKAT(KAT);
      assert.equal(re, WKAT);
      assert.equal(typeof re, 'string');
    });
  });
});