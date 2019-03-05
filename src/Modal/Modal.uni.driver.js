import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import styles from './Modal.scss';
export const modalDriverFactory = (base, body) => {
  console.log({ body });
  const modalContainer = body.$(`.${styles.childrenContainer}`);
  console.log(modalContainer);
  return {
    ...baseUniDriverFactory(base),
    isModalDisplayed: () => modalContainer.isDisplayed()
  };
};
