import { baseUniDriverFactory, ReactBase } from '../../test/utils/unidriver';
import TabTypes from './core/constants/tab-types';
import styles from './Tabs.scss';

export const tabsUniDriverFactory = base => {
  const reactBase = ReactBase(base);
  const findFirst = async query => {
    const item = base.$$(query).get(0);
    return (await item.exists()) ? item : null;
  };
  const getItemsContainer = async () => findFirst('ul');
  const getItems = async () => ReactBase(await getItemsContainer()).children();

  return {
    ...baseUniDriverFactory(base),
    getTitles: async () =>
      Promise.all((await getItems()).map(item => item.text())),
    clickTabAt: async index => (await getItems())[index].click(),
    getActiveTabIndex: async () => {
      const itemsClassesPromises = (await getItems()).map(item =>
        ReactBase(item).getClassList(),
      );
      const itemsClasses = await Promise.all(itemsClassesPromises);
      return itemsClasses.findIndex(classList =>
        classList.contains(styles.active),
      );
    },
    isDefaultType: async () => {
      const classList = await reactBase.getClassList();
      return TabTypes.every(tabType => !classList.contains(styles[tabType]));
    },
    getItemsContainerClassList: async () =>
      ReactBase(await getItemsContainer()).getClassList(),
    getDataHook: async index => (await getItems())[index].attr('data-hook'),
    getItemsWidth: async () => {
      const items = await getItems();
      const itemsWidthArrayPromise = items.map(item =>
        ReactBase(item)
          .getStyle()
          .then(style => style.width),
      );
      const itemsWidthArray = await Promise.all(itemsWidthArrayPromise);
      return new Set(itemsWidthArray);
    },
    hasDivider: async () => {
      const classList = await reactBase.getClassList();
      return classList.contains(styles.hasDivider);
    },
    getSideContent: async () => findFirst(`.${styles.sideContent}`),
    getItemsMaxWidths: async () =>
      (await getItems()).map(item =>
        ReactBase(item)
          .getStyle()
          .then(style => style.maxWidth),
      ),
  };
};
