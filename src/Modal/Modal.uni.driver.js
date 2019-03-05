import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import styles from './Modal.scss';

export const modalDriverFactory = (base, body) => {
  const modalContainer = body.$(`.${styles.childrenContainer}`);

  return {
    ...baseUniDriverFactory(base),
    isModalDisplayed: () => modalContainer.isDisplayed(),
  };
};
