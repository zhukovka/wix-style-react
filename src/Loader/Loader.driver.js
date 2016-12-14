import React from 'react';
import {shallow, mount} from 'enzyme';

import Loader from './Loader';
import styles from './Loader.scss';

const loaderDriverFactory = component => ({
  isSmall: () => component.hasClass(styles.small),
  isMedium: () => component.hasClass(styles.medium),
  isLarge: () => component.hasClass(styles.large),
  hasText: () => component.find(`.${styles.text}`).length === 1,
  getText: () => component.find(`.${styles.text}`).text()
});

const componentFactory = () => {
  const createShallow = (props = {}) => shallow(<Loader {...props}/>);
  const createMount = (props = {}) => mount(<Loader {...props}/>);
  return {createShallow, createMount};
};

export {componentFactory, loaderDriverFactory};
