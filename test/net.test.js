var assert = require('assert');
var kamUtil = require('../dist');

const net1 = 1; // Result: ''
const net2 = 4; // Result: 'rinkeby'
const net3 = 'Ropsten'; // Result: 'ropsten'
const net4 = 'Dummy'; // Result: ''
const net5 = '42'; // Result: 'kovan'
const net6 = '426'; // Result: ''

const address = '0x627306090abaB3A6e1400e9345bC60c78a8BEf57';
const _address = address.toLowerCase();

describe('Net lib', function () {

  describe('getNetName()', function () {
    it('get name of the network', function () {
      let re1 = kamUtil.net.getNetName(net1);
      assert.equal(re1, 'mainnet');
      let re2 = kamUtil.net.getNetName(net2);
      assert.equal(re2, 'rinkeby');
      let re3 = kamUtil.net.getNetName(net3);
      assert.equal(re3, 'ropsten');
      let re4 = kamUtil.net.getNetName(net4);
      assert.equal(re4, null);
      let re5 = kamUtil.net.getNetName(net5);
      assert.equal(re5, 'kovan');
      let re6 = kamUtil.net.getNetName(net6);
      assert.equal(re6, null);
    });
  });

  describe('formalizeAddress()', function () {
    it('formalize address', function () {
      let re = kamUtil.net.formalizeAddress(address);
      assert.equal(re, _address);
    });
  });
});