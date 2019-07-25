var Web3 = require('web3');
var web3 = new Web3();

const ETH_DECIMALS = 18;
const KAT_DECIMALS = 18;
const BKAT_DECIMALS = 8;

var Unit = function Unit() { };

Unit.wei2ETH = function (wkat) {
  if (!wkat) return 0;
  var a = web3.toBigNumber(wkat);
  var b = web3.toBigNumber(10);
  var c = web3.toBigNumber(ETH_DECIMALS);
  var re = a.dividedBy(b.pow(c));
  return re.toFixed();
}

Unit.eth2WEI = function (kat) {
  if (!kat) return 0;
  var a = web3.toBigNumber(kat);
  var b = web3.toBigNumber(10);
  var c = web3.toBigNumber(ETH_DECIMALS);
  var re = a.times(b.pow(c));
  return re.toFixed();
}

Unit.wkat2KAT = function (wkat) {
  if (!wkat) return 0;
  var a = web3.toBigNumber(wkat);
  var b = web3.toBigNumber(10);
  var c = web3.toBigNumber(KAT_DECIMALS);
  var re = a.dividedBy(b.pow(c));
  return re.toFixed();
}

Unit.kat2WKAT = function (kat) {
  if (!kat) return 0;
  var a = web3.toBigNumber(kat);
  var b = web3.toBigNumber(10);
  var c = web3.toBigNumber(KAT_DECIMALS);
  var re = a.times(b.pow(c));
  return re.toFixed();
}

Unit.wbkat2BKAT = function (wkat) {
  if (!wkat) return 0;
  var a = web3.toBigNumber(wkat);
  var b = web3.toBigNumber(10);
  var c = web3.toBigNumber(BKAT_DECIMALS);
  var re = a.dividedBy(b.pow(c));
  return re.toFixed();
}

Unit.bkat2WBKAT = function (kat) {
  if (!kat) return 0;
  var a = web3.toBigNumber(kat);
  var b = web3.toBigNumber(10);
  var c = web3.toBigNumber(BKAT_DECIMALS);
  var re = a.times(b.pow(c));
  return re.toFixed();
}

module.exports = Unit;