import React from 'react';
import {render} from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import Tabs from './Tabs';
import styles from './Tabs.scss';

const tabsDriverFactory = ({component, wrapper}) => {
  const getTabs = () => [...component.childNodes];
  return {
    exists: () => !!component,
    getTitles: () => getTabs().map(childNode => childNode.textContent),
    clickTabAt: index => ReactTestUtils.Simulate.click(getTabs()[index]),
    getActiveTabIndex: () => getTabs().findIndex(childNode => childNode.classList.contains(styles.active)),
    isDefaultType: () => Tabs.tabTypes.every(tabType => !component.classList.contains(styles[tabType])),
    isOfType: type => component.classList.contains(styles[type]),
    hasDivider: () => component.classList.contains(styles.hasDivider),
    setProps: props => render(<div ref={r => component = r.childNodes[0]}><Tabs {...props}/></div>, wrapper),
  };
};

export default tabsDriverFactory;
