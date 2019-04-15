import { Simulate } from 'react-dom/test-utils';
import { baseUniDriverFactory, ReactBase } from '../../test/utils/unidriver';
import { labelUniDriverFactory } from 'wix-ui-backoffice/dist/src/components/Label/Label.uni.driver';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { teskitTooltip as tooltipUniDriverFactory } from '../Tooltip/Tooltip.uni.driver';

const labelUniTestkitFactory = uniTestkitFactoryCreator(labelUniDriverFactory);
const toolTipUniTestkitFactory = uniTestkitFactoryCreator(
  tooltipUniDriverFactory,
);

export const checkboxUniDriverFactory = base => {
  const reactBase = ReactBase(base);
  const input = () => base.$('input');
  const isChecked = () => base.hasClass('checked');
  const labelDriver = async () =>
    labelUniTestkitFactory({
      wrapper: await base.getNative(), // eslint-disable-line no-restricted-properties
      dataHook: 'checkbox-label',
    });
  const tooltipDriver = async () =>
    toolTipUniTestkitFactory({
      wrapper: await base.getNative(), // eslint-disable-line no-restricted-properties
      dataHook: 'checkbox-box',
    });

  return {
    ...baseUniDriverFactory(base),
    click: async () => {
      if (base.type === 'react') {
        // eslint-disable-next-line no-restricted-properties
        Simulate.change(await input().getNative(), {
          target: { checked: !(await isChecked()) },
        });
      } else {
        return base.click();
      }
    },
    /** trigger focus on the element */
    focus: reactBase.focus,
    /** trigger blur on the element */
    blur: reactBase.blur,
    /**
     * Focus related testing is done in e2e tests only.
     * @deprecated
     */
    hasFocusState: () => base.attr('data-focus'),
    isChecked,
    isDisabled: () => base.hasClass('disabled'),
    isIndeterminate: () => base.hasClass('indeterminate'),
    hasError: () => base.hasClass('hasError'),
    getLabel: async () => (await labelDriver()).getLabelText(),
    getLabelDriver: () => labelDriver(),
    getErrorMessage: async () => {
      try {
        return (await tooltipDriver()).hoverAndGetContent();
      } catch (e) {
        throw new Error('Failed getting checkbox error message');
      }
    },
  };
};
