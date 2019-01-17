import BigNumber from 'bignumber.js';

const DECIMALS = 18;

var Unit = function Unit() { };

Unit.wkat2KAT = function (wkat) {
  if (!wkat) return 0;
  var re = (new BigNumber(wkat)).dividedBy((new BigNumber(10)).pow(DECIMALS));
  return re.toPrecision();
}

Unit.kat2WKAT = function (kat) {
  if (!kat) return 0;
  var re = (new BigNumber(kat)).multipliedBy((new BigNumber(10)).pow(DECIMALS));
  return re.toPrecision();
}

module.exports = Unit;