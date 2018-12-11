import ReactTestUtils from 'react-dom/test-utils';
import eventually from 'wix-eventually';
import last from 'lodash/last';

const arrowDirectionToPlacement = {
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left',
};

const tooltipDriverFactory = ({ element, wrapper }) => {
  const bodyOrWrapper = {
    querySelector: query =>
      document.body.querySelector(query) ||
      (wrapper.querySelector && wrapper.querySelector(query)),
    querySelectorAll: query => {
      const documentResult = document.body.querySelectorAll(query);
      return documentResult.length > 0
        ? documentResult
        : wrapper.querySelectorAll && wrapper.querySelectorAll(query);
    },
  };

  const getContentRoot = () => {
    const contentRootHook = element.getAttribute('data-content-hook');
    if (!contentRootHook) {
      throw new Error(
        `Tooltip.driver: contentRootHook attribute must exist on the Toolrip's root element`,
      );
    }
    return bodyOrWrapper.querySelector(`[data-hook="${contentRootHook}"]`);
  };

  const getTooltipContent = () => getContentRoot().querySelector('.tooltip');
  const mouseEnter = () => ReactTestUtils.Simulate.mouseEnter(element);
  const mouseLeave = () => ReactTestUtils.Simulate.mouseLeave(element);
  const isShown = () => !!getContentRoot();
  const getContent = () => {
    let content = getTooltipContent();
    while (content.children.length > 0) {
      content = content.children[0];
    }
    return content.innerHTML;
  };
  const contentHasElement = selector => {
    const content = getContentRoot();
    return content && !!content.querySelector(selector);
  };

  return {
    exists: () => !!element,
    isShown,
    focus: () => ReactTestUtils.Simulate.focus(element),
    blur: () => ReactTestUtils.Simulate.blur(element),
    click: () => ReactTestUtils.Simulate.click(element),
    mouseEnter,
    mouseLeave,
    hasErrorTheme: () => contentHasElement('.error'),
    hasDarkTheme: () => contentHasElement('.dark'),
    hasLightTheme: () => contentHasElement('.light'),
    hasAnimationClass: () => contentHasElement('.fadeIn'),
    hasArrow: () => contentHasElement('[data-hook="tooltip-arrow"]'),
    getTooltipWrapper: getTooltipContent,
    getChildren: () => element.innerHTML,
    getPlacement: () => {
      const content = getContentRoot();
      const arrowDirection = last(
        content.querySelectorAll('[data-hook="tooltip-arrow"]'),
      ).className.split(' ')[2];
      return arrowDirectionToPlacement[arrowDirection];
    },
    getContent,
    hoverAndGetContent: ({ timeout = 1000, interval = 50 } = {}) => {
      mouseEnter();
      return eventually(
        () => {
          if (!isShown()) {
            throw new Error('Tooltip not visible');
          }
          const content = getContent();
          mouseLeave();
          return content;
        },
        {
          timeout,
          interval,
        },
      );
    },
    getMaxWidth: () => {
      const content = getTooltipContent();
      const values = content.style._values;
      return values['max-width'];
    },
    getMinWidth: () => {
      const content = getTooltipContent();
      const values = content.style._values;
      return values['min-width'];
    },
    getAlignment: () => {
      const content = getTooltipContent();
      const values = content.style._values;
      return values['text-align'];
    },
    getPadding: () => {
      const content = getTooltipContent();
      const values = content.style._values;
      return values.padding;
    },
  };
};

export default tooltipDriverFactory;
