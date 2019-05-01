import { baseUniDriverFactory, ReactBase } from '../../test/utils/unidriver';

export const pageUniDriverFactory = base => {
  const reactBase = ReactBase(base);

  return {
    ...baseUniDriverFactory(base),
    hasClass: base.hasClass,

    /** true if header background image exist */
    backgroundImageExists: () =>
      base.$('[data-hook="page-background-image"]').exists(),

    /** true if gradient class name exist */
    gradientClassNameExists: () =>
      base.$('[data-hook="page-gradient-class-name"]').exists(),

    /** true if title exist in DOM */
    tailExists: () => base.$('[data-hook="page-tail"]').exists(),

    /** return container height */
    gradientContainerHeight: async () => {
      const style = await ReactBase(
        base.$('[data-hook="page-gradient-class-name"]'),
      ).getStyle();
      return style.height;
    },

    /** returns html in a string form */
    getPageHtml: () => reactBase.innerHtml(),
  };
};
