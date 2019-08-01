var Web3 = require('web3');
var ethUtil = require('ethereumjs-util');
var abi = require('ethereumjs-abi');
var hex = require('./hex');

var web3 = new Web3();

var Net = function Net() { };

Net.getNetName = function (chainId) {
  if (!chainId) return null;
  chainId = chainId.toString();
  var network = null;
  switch (chainId.toLowerCase()) {
    case '1':
      network = 'mainnet';
      break;
    case 'mainnet':
      network = 'mainnet';
      break;
    case '3':
      network = 'ropsten';
      break;
    case 'ropsten':
      network = 'ropsten';
      break;
    case '4':
      network = 'rinkeby';
      break;
    case 'rinkeby':
      network = 'rinkeby';
      break;
    case '5':
      network = 'goerli';
      break;
    case 'goerli':
      network = 'goerli';
      break;
    case '42':
      network = 'kovan';
      break;
    case 'kovan':
      network = 'kovan';
      break;
    default:
      network = null;
  }
  return network;
}

Net.isAddress = function (address) {
  return web3.isAddress(address);
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