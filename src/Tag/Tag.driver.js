import ReactTestUtils from 'react-dom/test-utils';
import {isClassExists} from '../../test/utils';

import {testkitFactoryCreator} from 'wix-ui-test-utils/vanilla';
import buttonDriverFactory from '../Backoffice/Button/Button.driver';

const buttonTestkitFactory = testkitFactoryCreator(buttonDriverFactory);

const getThumb = element => element.querySelector('span');
const getContentWithoutThumb = element => element.querySelector('span');

const getRemoveButtonDriver = element => {
  return buttonTestkitFactory({
    wrapper: element,
    dataHook: 'remove-button'
  });
};

const tagDriverFactory = ({element}) => {

  return {
    exists: () => !!element,
    isLarge: () => isClassExists(element, 'largeSize'),
    isStandardTheme: () => isClassExists(element, 'standardTheme'),
    isWarningTheme: () => isClassExists(element, 'warningTheme'),
    isErrorTheme: () => isClassExists(element, 'errorTheme'),
    isRemovable: () => getRemoveButtonDriver(element).exists(),
    removeTag: () => getRemoveButtonDriver(element).click(),
    click: () => ReactTestUtils.Simulate.click(element),
    isThumbExists: () => isClassExists(getThumb(element), 'thumb'),
    isWrapped: () => isClassExists(element, 'tagEllipsis') && isClassExists(getContentWithoutThumb(element), 'tagTextEllipsis'),
    isDisabled: () => isClassExists(element, 'disabled'),
    getLabel: () => element.textContent,
    getTitle: () => element.title
  };
};

export default tagDriverFactory;
