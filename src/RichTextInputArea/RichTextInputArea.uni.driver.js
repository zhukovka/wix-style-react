import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import ReactTestUtils from 'react-dom/test-utils';

import { errorIndicatorDriverFactory } from '../ErrorIndicator/ErrorIndicator.uni.driver';

export const getContent = base => base.$('.public-DraftEditor-content');
export const getPlaceholder = base =>
  base.$('.public-DraftEditorPlaceholder-root');

const getErrorIndicator = base =>
  base.$('[data-hook=richtextarea-error-indicator]');
const errorIndicatorDriver = (base, body) =>
  errorIndicatorDriverFactory(getErrorIndicator(base), body);

export default (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),
    isDisabled: async () =>
      Boolean(await getContent(base).attr('contenteditable')),
    hasError: async () => await getErrorIndicator(base).exists(),
    getContent: () => getContent(base).text(),
    getPlaceholder: () => getPlaceholder(base).text(),
    getErrorMessage: () => errorIndicatorDriver(base, body).getErrorMessage(),
    enterText: async text => {
      const contentElement = await getContent(base).getNative(); // eslint-disable-line no-restricted-properties

      // TODO: implement for puppeteer. Throw error if type is not handled
      if (base.type === 'react') {
        ReactTestUtils.Simulate.beforeInput(contentElement, { data: text });
      } else if (base.type === 'protractor') {
        contentElement.sendKeys(text);
      }
    },
  };
};
