import React from 'react';
import {render} from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import Tabs, {tabTypes} from './Tabs';
import styles from './Tabs.scss';

const tabsDriverFactory = ({component, wrapper}) => {
  return {
    exists: () => !!component,
    getTitles: () => [...component.childNodes].map(childNode => childNode.textContent),
    clickTabAt: index => ReactTestUtils.Simulate.click(component.childNodes[index]),
    getActiveTabIndex: () => [...component.childNodes].findIndex(childNode => childNode.classList.contains(styles.active)),
    setProps: props => render(<div ref={r => component = r.childNodes[0]}><Tabs {...props}/></div>, wrapper),
    isDefaultType: () => tabTypes.every(tabType => !component.classList.contains(styles[tabType])),
    isOfType: type => component.classList.contains(styles[type]),
  };
};

export default tabsDriverFactory;
