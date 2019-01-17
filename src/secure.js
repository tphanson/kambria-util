var crypto = require('crypto');
var ethUtil = require('ethereumjs-util');

var Secure = function Secure() { };

Secure.rand = function (bits) {
  bits = bits ? bits : 256;
  var randomByte = crypto.randomBytes(Math.floor(bits / 8));
  var randomBN = new ethUtil.BN(randomByte);
  var randomNum = randomBN.toString();
  return randomNum;
};

module.exports = Secure;