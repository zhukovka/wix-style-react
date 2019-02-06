import {isClassExists, findByHook} from '../../test/utils';


export default ({element}) => {
  const fixedContent = () => findByHook(element, 'page-fixed-content');
  const content = () => findByHook(element, 'page-scrollable-content');
  const tail = () => findByHook(element,'page-tail');

  /** fulfilled if element in the DOM */
  return {
    exists: () => !!element,
    hasClass: className => isClassExists(element, className),

    /** true if header background image exist */
    backgroundImageExists: () =>
      !!element.querySelector('[data-hook="page-background-image"]'),

    /** true if gradient class name exist */
    gradientClassNameExists: () =>
      !!element.querySelector('[data-hook="page-gradient-class-name"]'),

    /** true if title exist in DOM */
    tailExists: () => !!tail(),
    tailHasClass: (className) => isClassExists(tail(), className),

    contentHasClass: (className) => isClassExists(content(), className),

    fixedContentHasClass: (className) => isClassExists(fixedContent(), className),

    /** return container height */
    gradientContainerHeight: () =>
      element.querySelector('[data-hook="page-gradient-class-name"]').style
        .height,

    /** returns html in a string form */
    getPageHtml: () => element.innerHTML,
  }
};
