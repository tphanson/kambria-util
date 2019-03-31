var BN = require('bignumber.js');

const DECIMALS = 18;

var Unit = function Unit() { };

Unit.wei2ETH = function (wkat) {
  if (!wkat) return 0;
  var a = new BN(wkat);
  var b = new BN(10);
  var c = new BN(DECIMALS);
  var re = a.dividedBy(b.pow(c));
  return re.toFixed();
}

Unit.eth2WEI = function (kat) {
  if (!kat) return 0;
  var a = new BN(kat);
  var b = new BN(10);
  var c = new BN(DECIMALS);
  var re = a.multipliedBy(b.pow(c));
  return re.toFixed();
}

Unit.wkat2KAT = function (wkat) {
  if (!wkat) return 0;
  var a = new BN(wkat);
  var b = new BN(10);
  var c = new BN(DECIMALS);
  var re = a.dividedBy(b.pow(c));
  return re.toFixed();
}

Unit.kat2WKAT = function (kat) {
  if (!kat) return 0;
  var a = new BN(kat);
  var b = new BN(10);
  var c = new BN(DECIMALS);
  var re = a.multipliedBy(b.pow(c));
  return re.toFixed();
}

module.exports = Unit;