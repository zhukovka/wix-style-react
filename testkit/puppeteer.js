import 'regenerator-runtime/runtime';
import {puppeteerTestkitFactoryCreator} from '../src/test-common';

import inputDriverFactory from '../src/Input/Input.puppeteer.driver';
export const inputTestkitFactory = puppeteerTestkitFactoryCreator(inputDriverFactory);
