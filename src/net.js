var Web3 = require('web3');
var ethUtil = require('ethereumjs-util');
var abi = require('ethereumjs-abi');
var hex = require('./hex');

var web3 = new Web3();
const CODE = '55b8fc1234d845ffbea5da26f9ae70f5';
const RPC = {
  MAINNET: {
    id: 1,
    name: 'mainnet',
    rpc: 'https://mainnet.infura.io/v3/' + CODE
  },
  ROPSTEN: {
    id: 3,
    name: 'ropsten',
    rpc: 'https://ropsten.infura.io/v3/' + CODE
  },
  RINKEBY: {
    id: 4,
    name: 'rinkeby',
    rpc: 'https://rinkeby.infura.io/v3/' + CODE
  },
  GOERLI: {
    id: 5,
    name: 'goerli',
    rpc: 'https://goerli.infura.io/v3/' + CODE
  },
  KOVAN: {
    id: 42,
    name: 'kovan',
    rpc: 'https://kovan.infura.io/v3/' + CODE
  },
  DEFAULT: {
    id: '*',
    name: 'privatenet',
    rpc: 'http://localhost:9545'
  }
}

var Net = function () { };

Net.createClient = function (network) {
  let rpc = Net.getRPC(network);
  return new Web3(new Web3.providers.HttpProvider(rpc));
}

Net.getRPC = function (network) {
  if (!network) network = '*';
  else network = network.toString();
  switch (network.toLowerCase()) {
    case '1':
      return RPC.MAINNET.rpc;
    case '3':
      return RPC.ROPSTEN.rpc;
    case '4':
      return RPC.RINKEBY.rpc;
    case '5':
      return RPC.GOERLI.rpc;
    case '42':
      return RPC.KOVAN.rpc;
    case 'mainnet':
      return RPC.MAINNET.rpc;
    case 'ropsten':
      return RPC.ROPSTEN.rpc;
    case 'rinkeby':
      return RPC.RINKEBY.rpc;
    case 'goerli':
      return RPC.GOERLI.rpc;
    case 'kovan':
      return RPC.KOVAN.rpc;
    default:
      return RPC.DEFAULT.rpc;
  }
}

Net.getNetName = function (network) {
  if (!network) network = '*';
  else network = network.toString();
  switch (network.toLowerCase()) {
    case '1':
      return RPC.MAINNET.name;
    case '3':
      return RPC.ROPSTEN.name;
    case '4':
      return RPC.RINKEBY.name;
    case '5':
      return RPC.GOERLI.name;
    case '42':
      return RPC.KOVAN.name;
    case 'mainnet':
      return RPC.MAINNET.name;
    case 'ropsten':
      return RPC.ROPSTEN.name;
    case 'rinkeby':
      return RPC.RINKEBY.name;
    case 'goerli':
      return RPC.GOERLI.name;
    case 'kovan':
      return RPC.KOVAN.name;
    default:
      return RPC.DEFAULT.name;
  }
}

Net.isAddress = function (address) {
  return web3.utils.isAddress(address);
}

Net.formalizeAddress = function (address) {
  if (typeof address !== 'string') throw new Error('Function only excepts string.');
  if (!ethUtil.isValidAddress(address)) return null;
  return hex.padHex(address.toLowerCase());
}

Net.parseKambriaTransaction = function (tx) {
  var { data, from } = tx;
  var contract = tx.to;

  var sig = data.slice(0, 10);
  var encode = data.slice(10);
  if (sig == '0xa9059cbb') {
    var name = 'transfer';
    var decode = abi.rawDecode(['address', 'uint256'], Buffer.from(encode, 'hex'));
    var to = hex.padHex(decode[0]);
    var amount = decode[1];
    return { from, to, amount, name, contract }
  }
  else if (sig == '0x23b872dd') {
    var name = 'transferFrom';
    var decode = abi.rawDecode(['address', 'address', 'uint256'], Buffer.from(encode, 'hex'));
    var approver = hex.padHex(decode[0]);
    var to = hex.padHex(decode[1]);
    var amount = decode[2];
    return { from, approver, to, amount, name, contract }
  }
  else return null;
}

module.exports = Net;