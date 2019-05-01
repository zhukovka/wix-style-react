import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { testkit } from '../Input/Input.uni.driver';
import { tickerDriverFactory } from '../Input/Ticker/Ticker.uni.driver';
import styles from './TimeInput.scss';

export const timeInputUniDriverFactory = base => {
  const amPmIndicator = () => base.$('[data-hook="am-pm-indicator"]');
  const input = testkit(base);
  const inputTicker = tickerDriverFactory(base);

  return {
    ...baseUniDriverFactory(base),
    getValue: async () => input.getValue(),
    isDisabled: async () => input.isDisabled(),
    clickTickerUp: async () => inputTicker.clickUp(),
    clickTickerDown: async () => inputTicker.clickDown(),
    isAmPmIndicatorExist: async () => amPmIndicator().exists(),
    toggleAmPmIndicator: async () => amPmIndicator().click(),
    getAmPmIndicatorText: async () => amPmIndicator().text(),
    isRtl: async () => base.$(`.${styles.rtl}`).exists(),
    setValue: async value => input.enterText(value),
    blur: async () => input.blur(),
  };
};
