import {testkitFactoryCreator} from '../src/test-common';

import inputDriver from '../src/Input/Input.driver';
export const inputTestkitFactory = testkitFactoryCreator(inputDriver);

export {buttonTestkitFactory} from '../src/Button/testkit/Button';
export {checkboxDriverFactory} from '../src/Checkbox/Checkbox.driver';
export {radioGroupDriverFactory} from '../src/RadioGroup/RadioGroup.driver';
export {toastTestkitFactory} from '../src/Toast/testkit/Toast';
