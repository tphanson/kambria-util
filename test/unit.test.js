var assert = require('assert');
var kamUtil = require('../dist');

const KAT1 = '10';
const KAT2 = '1123456';
const KAT3 = '9890672584.61355';
const WKAT1 = '10000000000000000000';
const WKAT2 = '1123456000000000000000000';
const WKAT3 = 9.89067258461355e+27;

const BKAT1 = '10';
const BKAT2 = '1123456';
const BKAT3 = '9890672584.61355';
const WBKAT1 = '1000000000';
const WBKAT2 = '112345600000000';
const WBKAT3 = 989067258461355000;

const ETH1 = '10.11';
const ETH2 = '10.123456789';
const WEI1 = '10110000000000000000';
const WEI2 = '10123456789000000000';

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

    it(`convert ${WKAT3} WKAT to KAT`, function () {
      let re = kamUtil.unit.wkat2KAT(WKAT3);
      assert.equal(re, KAT3);
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

    it(`convert ${KAT3} KAT to WKAT`, function () {
      let re = kamUtil.unit.kat2WKAT(KAT3);
      assert.equal(re, WKAT3);
      assert.equal(typeof re, 'string');
    });
  });

  describe('wbkat2BKAT()', function () {
    it(`convert ${WBKAT1} WBKAT to BKAT`, function () {
      let re = kamUtil.unit.wbkat2BKAT(WBKAT1);
      assert.equal(re, BKAT1);
      assert.equal(typeof re, 'string');
    });

    it(`convert ${WBKAT2} WBKAT to BKAT`, function () {
      let re = kamUtil.unit.wbkat2BKAT(WBKAT2);
      assert.equal(re, BKAT2);
      assert.equal(typeof re, 'string');
    });

    it(`convert ${WBKAT3} WBKAT to BKAT`, function () {
      let re = kamUtil.unit.wbkat2BKAT(WBKAT3);
      assert.equal(re, BKAT3);
      assert.equal(typeof re, 'string');
    });
  });

  describe('bkat2WBKAT()', function () {
    it(`convert ${BKAT1} BKAT to WBKAT`, function () {
      let re = kamUtil.unit.bkat2WBKAT(BKAT1);
      assert.equal(re, WBKAT1);
      assert.equal(typeof re, 'string');
    });

    it(`convert ${BKAT2} BKAT to WBKAT`, function () {
      let re = kamUtil.unit.bkat2WBKAT(BKAT2);
      assert.equal(re, WBKAT2);
      assert.equal(typeof re, 'string');
    });

    it(`convert ${BKAT3} BKAT to WBKAT`, function () {
      let re = kamUtil.unit.bkat2WBKAT(BKAT3);
      assert.equal(re, WBKAT3);
      assert.equal(typeof re, 'string');
    });
  });

  describe('eth2WEI()', function () {
    it(`convert ${ETH1} ETH to WEI`, function () {
      let re = kamUtil.unit.eth2WEI(ETH1);
      assert.equal(re, WEI1);
      assert.equal(typeof re, 'string');
    });
  });

  describe('wei2ETH()', function () {
    it(`convert ${WEI2} WEI to ETH`, function () {
      let re = kamUtil.unit.wei2ETH(WEI2);
      assert.equal(re, ETH2);
      assert.equal(typeof re, 'string');
    });
  });
});