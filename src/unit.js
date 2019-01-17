var BN = require('ethereumjs-util').BN;

const DECIMALS = 18;

var Unit = function Unit() { };

Unit.wkat2KAT = function (wkat) {
  if (!wkat) return 0;
  var a = new BN(wkat, 10);
  var b = new BN(10, 10);
  var c = new BN(DECIMALS, 10);
  var re = a.div(b.pow(c));
  return re.toString(10);
}

Unit.kat2WKAT = function (kat) {
  if (!kat) return 0;
  var a = new BN(kat, 10)
  var b = new BN(10, 10);
  var c = new BN(DECIMALS, 10);
  var re = a.mul(b.pow(c));
  return re.toString(10);
}

module.exports = Unit;