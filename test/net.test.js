var assert = require('assert');
var kamUtil = require('../dist');

const net1 = 1; // Result: ''
const net2 = 4; // Result: 'rinkeby'
const net3 = 'Ropsten'; // Result: 'ropsten'
const net4 = 'Dummy'; // Result: ''
const net5 = '42'; // Result: 'kovan'
const net6 = '426'; // Result: ''
const txTransfer = {
  data: '0xa9059cbb00000000000000000000000076d8b624efddd1e9fc4297f82a2689315ac62d820000000000000000000000000000000000000000000000000de0b6b3a7640000',
  from: '0x76d8b624efddd1e9fc4297f82a2689315ac62d82',
  to: '0x9dddff7752e1714c99edf940ae834f0d57d68546'
}
const parserTransfer = {
  from: '0x76d8b624efddd1e9fc4297f82a2689315ac62d82',
  to: '0x76d8b624efddd1e9fc4297f82a2689315ac62d82',
  name: 'transfer',
  amount: '1000000000000000000',
  contract: '0x9dddff7752e1714c99edf940ae834f0d57d68546'
}
const txTransferFrom = {
  data: '0x23b872dd00000000000000000000000076d8b624efddd1e9fc4297f82a2689315ac62d8200000000000000000000000076d8b624efddd1e9fc4297f82a2689315ac62d820000000000000000000000000000000000000000000000000de0b6b3a7640000',
  from: '0x76d8b624efddd1e9fc4297f82a2689315ac62d82',
  to: '0x9dddff7752e1714c99edf940ae834f0d57d68546',
}
const parserTransferFrom = {
  from: '0x76d8b624efddd1e9fc4297f82a2689315ac62d82',
  to: '0x76d8b624efddd1e9fc4297f82a2689315ac62d82',
  approver: '0x76d8b624efddd1e9fc4297f82a2689315ac62d82',
  name: 'transferFrom',
  amount: '1000000000000000000',
  contract: '0x9dddff7752e1714c99edf940ae834f0d57d68546'
}

const address = '0x627306090abaB3A6e1400e9345bC60c78a8BEf57';
const fake_address = '0x27306090abaB3A6e1400e9345bC60c78a8BEf57';
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

  describe('isAddress()', function () {
    it('true address', function () {
      let re = kamUtil.net.isAddress(address);
      assert.equal(re, true);
    });
  });

  describe('isAddress()', function () {
    it('false address', function () {
      let re = kamUtil.net.isAddress(fake_address);
      assert.equal(re, false);
    });
  });

  describe('formalizeAddress()', function () {
    it('formalize address', function () {
      let re = kamUtil.net.formalizeAddress(address);
      assert.equal(re, _address);
    });
  });

  describe('parseKambriaTransaction()', function () {
    it('transfer trasnsaction', function () {
      let re = kamUtil.net.parseKambriaTransaction(txTransfer);
      re.amount = re.amount.toString();
      assert.deepEqual(re, parserTransfer);
    });

    it('transferFrom trasnsaction', function () {
      let re = kamUtil.net.parseKambriaTransaction(txTransferFrom);
      re.amount = re.amount.toString();
      assert.deepEqual(re, parserTransferFrom);
    });
  });
});