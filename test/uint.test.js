var assert = require('assert');
var kamUtil = require('../dist');

const KAT1 = '10';
const KAT2 = '1123456';
const WKAT1 = '10000000000000000000';
const WKAT2 = '1123456000000000000000000';

describe('Unit lib', function () {

  describe('wkat2KAT()', function () {
    it(`convert ${WKAT1} WKAT to KAT`, function () {
      let re = kamUtil.unit.wkat2KAT(WKAT1);
      assert.equal(re, KAT1);
      assert.equal(typeof re, 'string');
    });

    it(`convert ${WKAT2} WKAT to KAT`, function () {
      let re = kamUtil.unit.wkat2KAT(WKAT2);
      assert.equal(re, KAT2);
      assert.equal(typeof re, 'string');
    });
  });

  describe('kat2WKAT()', function () {
    it(`convert ${KAT1} KAT to WKAT`, function () {
      let re = kamUtil.unit.kat2WKAT(KAT1);
      assert.equal(re, WKAT1);
      assert.equal(typeof re, 'string');
    });

    it(`convert ${KAT2} KAT to WKAT`, function () {
      let re = kamUtil.unit.kat2WKAT(KAT2);
      assert.equal(re, WKAT2);
      assert.equal(typeof re, 'string');
    });
  });
});