import getSymbolFromCurrency from 'currency-symbol-map';

const Units = {
  COUNT: 'COUNT',
  PERCENT: 'PERCENT',
  MONEY: 'MONEY',
};

const SI_SYMBOL = ['', 'K', 'M', 'B'];

const numberFormater = new Intl.NumberFormat();

const formatNumberToPrecision = (
  value = 0,
  precision = 0,
) =>
  numberFormater.format(
    parseFloat(typeof value === 'number' ? value.toFixed(precision) : value),
  );

const formatToCompactNumber = (
  value = 0,
  precision = 0,
) => {
  const isNegative = value < 0;
  const tier = Math.min(
    (Math.log10(isNegative ? -1 * value : value) / 3) | 0,
    SI_SYMBOL.length - 1,
  );
  if (tier === 0) {
    return value.toFixed(precision).toString();
  }
  const suffix = SI_SYMBOL[tier];
  const scale = Math.pow(10, tier * 3);
  const scaled = value / scale;
  return scaled.toFixed(precision) + suffix;
};

const formatToPercent = (value = 0) => {
  const formatedValue =
    typeof value === 'number' ? formatNumberToPrecision(value, 0) : value;

  return `${formatedValue}%`;
};

const formatToMoney = (value = 0, currency) => {
  const formatedValue =
    typeof value === 'number' ? formatNumberToPrecision(value, 0) : value;
  const currencySymbol = getSymbolFromCurrency(currency);

  return currencySymbol
    ? `${currencySymbol}${formatedValue}`
    : `${currency} ${formatedValue}`;
};

const formatValueToUnitString = (
  value,
  unit,
  currency,
  precision,
) => {
  const formatedValue = formatNumberToPrecision(value, precision);

  if (unit === Units.PERCENT) {
    return formatToPercent(formatedValue);
  }

  if (unit === Units.MONEY) {
    return formatToMoney(formatedValue, currency);
  }

  return formatedValue;
};

const countPercentageFromBase = (
  base,
  chunk,
  precision,
) => {
  if (chunk === 0 || base === 0) {
    return 0;
  }
  if (precision === undefined) {
    return (chunk * 100) / base;
  }
  if (precision < 0 || precision % precision) {
    throw new Error('Precision should be integer');
  }
  return Number(((chunk * 100) / base).toFixed(precision));
};

export {
  formatNumberToPrecision,
  formatToCompactNumber,
  formatToMoney,
  formatToPercent,
  formatValueToUnitString,
  countPercentageFromBase,
  Units,
};
