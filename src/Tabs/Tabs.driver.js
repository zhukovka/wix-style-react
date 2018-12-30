import ReactTestUtils from 'react-dom/test-utils';

import TabTypes from './core/constants/tab-types';
import styles from './Tabs.scss';

const tabsDriverFactory = ({ element }) => {
  const findFirst = query => element.querySelector(query);
  const getItemsContainer = () => findFirst('ul');
  const getItems = () => [...getItemsContainer().childNodes];

  return {
    exists: () => !!element,
    getTitles: () => getItems().map(item => item.textContent),
    clickTabAt: index => ReactTestUtils.Simulate.click(getItems()[index]),
    getActiveTabIndex: () =>
      getItems().findIndex(item => item.classList.contains(styles.active)),
    isDefaultType: () =>
      TabTypes.every(tabType => !element.classList.contains(styles[tabType])),
    getItemsContainerClassList: () => getItemsContainer().classList,
    getDataHook: index => getItems()[index].getAttribute('data-hook'),
    getItemsWidth: () => new Set(getItems().map(item => item.style.width)),
    hasDivider: () => element.classList.contains(styles.hasDivider),
    getSideContent: () => findFirst(`.${styles.sideContent}`),
    getItemsMaxWidths: () => getItems().map(item => item.style.maxWidth),
  };
};

export default tabsDriverFactory;
