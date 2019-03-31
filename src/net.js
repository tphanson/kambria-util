var ethUtil = require('ethereumjs-util');
var hex = require('./hex');

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

Net.formalizeAddress = function (address) {
  if (typeof address !== 'string') throw new Error('Function only excepts string.');
  if (!ethUtil.isValidAddress(address)) return null;
  return hex.padHex(address.toLowerCase());
}

module.exports = Net;