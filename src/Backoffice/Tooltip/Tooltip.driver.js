import ReactTestUtils from 'react-dom/test-utils';
import { isClassExists } from '../../../test/utils';

const tooltipDriverFactory = ({ element, wrapper }) => {
  const target = element.querySelector("[data-hook='target']").children[0];
  const tooltipInner = element.querySelector("[data-hook='tooltip-inner']");
  const tooltipContent = tooltipInner.querySelector(
    "[data-hook='tooltip-content']",
  );

  return {
    isShown: () => isClassExists(tooltipInner, 'active'),
    focus: () => ReactTestUtils.Simulate.focus(target),
    blur: () => ReactTestUtils.Simulate.blur(target),
    click: () => ReactTestUtils.Simulate.click(target),
    mouseEnter: () => ReactTestUtils.Simulate.mouseEnter(target),
    mouseLeave: () => ReactTestUtils.Simulate.mouseLeave(target),
    hasErrorTheme: () => !!wrapper.querySelector('.error'),
    hasDarkTheme: () => !!wrapper.querySelector('.dark'),
    hasLightTheme: () => !!wrapper.querySelector('.light'),
    getTooltipWrapper: () => wrapper.querySelector("[data-hook='tooltip']"),
    getChildren: () => element.innerHTML,
    getPlacement: () => tooltipInner.getAttribute('class').split(' ')[2],
    getContent: () => tooltipContent.innerHTML,
    getWrapper: () => wrapper,
  };
};

export default tooltipDriverFactory;
