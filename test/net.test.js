var assert = require('assert');
var kamUtil = require('../dist');

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
  describe('createClient()', function () {
    it('create web3 instance', function () {
      let web3 = kamUtil.net.createClient(4);
      assert.notEqual(web3, null);
    });
  });

  describe('getRPC()', function () {
    it('get rpc of the network', function () {
      let a = kamUtil.net.getRPC(1);
      assert.equal(a, 'https://mainnet.infura.io/v3/55b8fc1234d845ffbea5da26f9ae70f5');
      let b = kamUtil.net.getRPC(4);
      assert.equal(b, 'https://rinkeby.infura.io/v3/55b8fc1234d845ffbea5da26f9ae70f5');
      let c = kamUtil.net.getRPC('Ropsten');
      assert.equal(c, 'https://ropsten.infura.io/v3/55b8fc1234d845ffbea5da26f9ae70f5');
      let d = kamUtil.net.getRPC('Dummy');
      assert.equal(d, 'http://localhost:9545');
      let e = kamUtil.net.getRPC('42');
      assert.equal(e, 'https://kovan.infura.io/v3/55b8fc1234d845ffbea5da26f9ae70f5');
      let f = kamUtil.net.getRPC('426');
      assert.equal(f, 'http://localhost:9545');
    });
  });

  describe('getNetName()', function () {
    it('get name of the network', function () {
      let a = kamUtil.net.getNetName(1);
      assert.equal(a, 'mainnet');
      let b = kamUtil.net.getNetName(4);
      assert.equal(b, 'rinkeby');
      let c = kamUtil.net.getNetName('Ropsten');
      assert.equal(c, 'ropsten');
      let d = kamUtil.net.getNetName('Dummy');
      assert.equal(d, 'privatenet');
      let e = kamUtil.net.getNetName('42');
      assert.equal(e, 'kovan');
      let f = kamUtil.net.getNetName('426');
      assert.equal(f, 'privatenet');
    });
  });

  describe('isAddress()', function () {
    it('true address', function () {
      let re = kamUtil.net.isAddress(address);
      assert.equal(re, true);
    });

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