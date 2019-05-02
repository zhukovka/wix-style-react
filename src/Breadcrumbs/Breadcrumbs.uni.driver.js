import { baseUniDriverFactory, ReactBase } from '../../test/utils/unidriver';

export const breadcrumbsUniDriverFactory = base => {
  const reactBase = ReactBase(base);

  const optionAt = async position =>
    reactBase.children().then(children => children[position]);

  return {
    ...baseUniDriverFactory(base),
    /** return the number of the items in the breadcrumbs */
    breadcrumbsLength: async () =>
      reactBase.children().then(children => children.length),

    /** return the breadcrumb item content at position  */
    breadcrumbContentAt: async position =>
      await (await optionAt(position)).text(),

    /** click on breadcrumb item at position */
    clickBreadcrumbAt: async position =>
      (await optionAt(position))
        .$('[data-hook="breadcrumb-clickable"]')
        .click(),

    /** return the active breadcrumb item position or return null if no active item exists */
    getActiveItemId: async () => {
      const itemsArray = await base
        .$$('.itemContainer')
        .map(item => (item.exists() ? item.getNative() : null)); // eslint-disable-line no-restricted-properties
      const index = itemsArray.findIndex(item =>
        item.classList.contains('active'),
      );
      return index === -1 ? null : index;
    },

    /** fulfilled if breadcrumbs component is large */
    isLarge: async () => base.hasClass('large'),

    /** fulfilled if breadcrumbs component is medium */
    isMedium: async () => base.hasClass('medium'),

    /** fulfilled if breadcrumbs component is on white background */
    isOnWhiteBackground: async () => base.hasClass('onWhiteBackground'),

    /** fulfilled if breadcrumbs component is on gray background */
    isOnGrayBackground: async () => base.hasClass('onGrayBackground'),

    /** fulfilled if breadcrumbs component is on dark background */
    isOnDarkBackground: async () => base.hasClass('onDarkBackground'),

    /** returns breadcrumbs component classes */
    getLabelClassList: async position => {
      const breadcrumbAt = await optionAt(position);
      const breadcrumbItem = breadcrumbAt.$('[data-hook="breadcrumbs-item"]');
      const classList = await ReactBase(breadcrumbItem).getClassList();
      return Array.from(classList).join(' ');
    },

    /** returns true if the item is a link */
    isActiveLinkAt: async index =>
      await (await optionAt(index)).$('a').exists(),
  };
};
