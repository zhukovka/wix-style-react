import {
  formatToCompactNumber,
  formatToMoney,
  formatToPercent,
  formatValueToUnitString,
  Units,
} from './numberFormatters';

describe('formatToPercent', () => {
  it('returns string in proper format', () => {
    const number1 = 10;
    const number2 = 1000;
    expect(formatToPercent(number1)).toBe('10%');
    expect(formatToPercent(number2)).toBe('1,000%');
  });

  it('returns string in proper format for empty value', () => {
    const number = undefined;
    expect(formatToPercent(number)).toBe('0%');
  });
});

describe('formatToCompactNumber', () => {
  it('return string in proper format for hundreds', () => {
    const number = 100;
    expect(formatToCompactNumber(number)).toBe('100');
  });

  it('return string in proper format for thousands', () => {
    const number1 = 1400;
    const number2 = 1600;
    expect(formatToCompactNumber(number1)).toBe('1K');
    expect(formatToCompactNumber(number2)).toBe('2K');
  });

  it('return string in proper format for millions', () => {
    const number1 = 1400000;
    const number2 = 1600000;
    expect(formatToCompactNumber(number1)).toBe('1M');
    expect(formatToCompactNumber(number2)).toBe('2M');
  });

  it('return string in proper format for billions', () => {
    const number1 = 14e8;
    const number2 = 16e8;
    expect(formatToCompactNumber(number1)).toBe('1B');
    expect(formatToCompactNumber(number2)).toBe('2B');
  });

  it('return string in proper format for more then billions', () => {
    const number1 = 14e11;
    expect(formatToCompactNumber(number1)).toBe('1400B');
  });

  it('return string in proper format for negative value', () => {
    const number = -10000;
    expect(formatToCompactNumber(number)).toBe('-10K');
  });
});

describe('formatToMoney', () => {
  it('returns string in proper format', () => {
    const currency = 'USD';
    const number1 = 10;
    const number2 = 1000;
    expect(formatToMoney(number1, currency)).toBe('$10');
    expect(formatToMoney(number2, currency)).toBe('$1,000');
  });

  it('returns string in proper format for unknown currency', () => {
    const currency = 'KEK';
    const number1 = 10;
    const number2 = 1000;
    expect(formatToMoney(number1, currency)).toBe('KEK 10');
    expect(formatToMoney(number2, currency)).toBe('KEK 1,000');
  });

  it('returns string in proper format for empty value', () => {
    const number = undefined;
    const currency = 'USD';
    expect(formatToMoney(number, currency)).toBe('$0');
  });
});

describe('formatValueToUnitString', () => {
  it('returns string in proper format for Units.COUNT', () => {
    const number1 = 100;
    const number2 = 10000;
    expect(formatValueToUnitString(number1, Units.COUNT)).toBe('100');
    expect(formatValueToUnitString(number2, Units.COUNT)).toBe('10,000');
  });

  it('returns string in proper format for Units.MONEY', () => {
    const number1 = 100;
    const number2 = 10000;
    const currency = 'USD';
    expect(formatValueToUnitString(number1, Units.MONEY, currency)).toBe(
      '$100',
    );
    expect(formatValueToUnitString(number2, Units.MONEY, currency)).toBe(
      '$10,000',
    );
  });

  it('returns string in proper format for Units.PERCENT', () => {
    const number1 = 100;
    const number2 = 10000;
    expect(formatValueToUnitString(number1, Units.PERCENT)).toBe('100%');
    expect(formatValueToUnitString(number2, Units.PERCENT)).toBe('10,000%');
  });
});
