var BigNumber = require('bignumber.js');

var Hex = function () { };

Hex.toBigNumber = function (hex) {
  return new BigNumber(hex);
}

Hex.padHex = function (hex) {
  if (!hex) return null;
  if (Buffer.isBuffer(hex)) hex = hex.toString('hex');
  if (typeof hex !== 'string') return null;

  var pattern = /(^0x)/gi;
  if (pattern.test(hex)) {
    return hex;
  } else {
    return '0x' + hex;
  }
}

Hex.unpadHex = function (hex) {
  if (!hex) return null;
  if (Buffer.isBuffer(hex)) hex = hex.toString('hex');
  if (typeof hex !== 'string') return null;

  var pattern = /(^0x)/gi;
  if (pattern.test(hex)) {
    return hex.replace('0x', '');
  } else {
    return hex;
  }
}

Hex.mergeHex = function (...args) {
  var re = '';
  for (var i = 0; i < args.length; i++) {
    if (typeof args[i] !== 'string') throw new Error('Function only excepts hex string.');
    re += Hex.unpadHex(args[i]);
  }
  return Hex.padHex(re);
}

module.exports = Hex;