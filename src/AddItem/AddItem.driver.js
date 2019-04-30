import textDriverFactory from '../Text/Text.driver';
import { tooltipTestkitFactory } from 'wix-ui-core/dist/src/testkit';

const addItemDriverFactory = ({ element, eventTrigger, dataHook }) => {
  const byHook = hook => element.querySelector(`[data-hook*="${hook}"]`);
  const tooltipTestkit = tooltipTestkitFactory({
    wrapper: element,
    dataHook: `additem-tooltip-${dataHook}`,
  });
  const textDriver = () =>
    textDriverFactory({ element: byHook('additem-text') });

  const deprecationMessage =
    'WARNING[AddItem]: Testkit method getTooltipDriver() is deprecated. Make sure to review AddItem Testkit for other available methods.';

  return {
    /** returns true if element in the DOM */
    exists: () => !!element,

    /** returns the driver element */
    element: () => element,

    /** returns value of action text */
    getText: () => textDriver().getText(),

    /** true if passed children in string exists */
    textExists: () => textDriver().exists(),

    /** returns driver of tooltip */
    getTooltipDriver: () => console.warn(deprecationMessage), //eslint-disable-line

    /** returns value of tooltip content */
    getTooltipContent: () => {
      tooltipTestkit.mouseEnter();
      const text = tooltipTestkit.getContentElement().textContent;
      tooltipTestkit.mouseLeave();
      return text;
    },
    /** clicks on element */
    click: () => eventTrigger.click(element),
  };
};

export default addItemDriverFactory;
