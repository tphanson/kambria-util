var BigNumber = require('bignumber.js');

const ETH_DECIMALS = 18;
const KAT_DECIMALS = 18;
const BNB_DECIMALS = 8;
const BKAT_DECIMALS = 8;

var Unit = function () { };

Unit.wei2ETH = function (wkat) {
  if (!wkat) return 0;
  var a = new BigNumber(wkat);
  var b = new BigNumber(10);
  var c = new BigNumber(ETH_DECIMALS);
  var re = a.dividedBy(b.pow(c));
  return re.toFixed();
}

Unit.eth2WEI = function (kat) {
  if (!kat) return 0;
  var a = new BigNumber(kat);
  var b = new BigNumber(10);
  var c = new BigNumber(ETH_DECIMALS);
  var re = a.times(b.pow(c));
  return re.toFixed();
}

Unit.jager2BNB = function (jager) {
  if (!jager) return 0;
  var a = new BigNumber(jager);
  var b = new BigNumber(10);
  var c = new BigNumber(BNB_DECIMALS);
  var re = a.dividedBy(b.pow(c));
  return re.toFixed();
}

Unit.bnb2JAGER = function (bnb) {
  if (!bnb) return 0;
  var a = new BigNumber(bnb);
  var b = new BigNumber(10);
  var c = new BigNumber(BNB_DECIMALS);
  var re = a.times(b.pow(c));
  return re.toFixed();
}

Unit.wkat2KAT = function (wkat) {
  if (!wkat) return 0;
  var a = new BigNumber(wkat);
  var b = new BigNumber(10);
  var c = new BigNumber(KAT_DECIMALS);
  var re = a.dividedBy(b.pow(c));
  return re.toFixed();
}

Unit.kat2WKAT = function (kat) {
  if (!kat) return 0;
  var a = new BigNumber(kat);
  var b = new BigNumber(10);
  var c = new BigNumber(KAT_DECIMALS);
  var re = a.times(b.pow(c));
  return re.toFixed();
}

Unit.jbkat2BKAT = function (jbkat) {
  if (!jbkat) return 0;
  var a = new BigNumber(jbkat);
  var b = new BigNumber(10);
  var c = new BigNumber(BKAT_DECIMALS);
  var re = a.dividedBy(b.pow(c));
  return re.toFixed();
}

Unit.bkat2JBKAT = function (bkat) {
  if (!bkat) return 0;
  var a = new BigNumber(bkat);
  var b = new BigNumber(10);
  var c = new BigNumber(BKAT_DECIMALS);
  var re = a.times(b.pow(c));
  return re.toFixed();
}

module.exports = Unit;