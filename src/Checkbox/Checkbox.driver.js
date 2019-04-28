import { isClassExists } from '../../test/utils';
import { labelDriverFactory } from 'wix-ui-backoffice/dist/src/components/Label/Label.driver';
import { testkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import tooltipDriverFactory from '../Tooltip/Tooltip.driver';
import styles from './Checkbox.scss';

const labelTestkitFactory = testkitFactoryCreator(labelDriverFactory);
const toolTipTestkitFactory = testkitFactoryCreator(tooltipDriverFactory);

const checkboxDriverFactory = ({ element, eventTrigger }) => {
  const input = () => element.querySelector('input');
  const checkbox = () => element.querySelector(styles.checkbox);
  const labelDriver = () =>
    labelTestkitFactory({ wrapper: element, dataHook: 'checkbox-label' });
  const tooltipDriver = () =>
    toolTipTestkitFactory({ wrapper: element, dataHook: 'checkbox-box' });
  const isChecked = () => input().checked;

  const getErrorMessage = async () => {
    try {
      return await tooltipDriver().hoverAndGetContent();
    } catch (e) {
      throw new Error('Failed getting checkbox error message');
    }
  };

  return {
    exists: () => !!element,
    click: () =>
      eventTrigger.change(input(), {
        target: { checked: !isChecked() },
      }),
    /** trigger focus on the element */
    focus: () => eventTrigger.focus(checkbox()),
    /** trigger blur on the element */
    blur: () => eventTrigger.blur(checkbox()),
    /**
     * Focus related testing is done in e2e tests only.
     * @deprecated
     */
    hasFocusState: () => element.getAttribute('data-focus'),
    isChecked: () => isChecked(),
    isDisabled: () => isClassExists(element, styles.disabled),
    isIndeterminate: () => isClassExists(element, styles.indeterminate),
    hasError: () => isClassExists(element, styles.hasError),
    getLabel: () => labelDriver().getLabelText(),
    getLabelDriver: () => labelDriver(),
    getErrorMessage,
  };
};

export default checkboxDriverFactory;
