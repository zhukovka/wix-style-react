import { baseUniDriverFactory, ReactBase } from '../../../test/utils/unidriver';

export const radioButtonUniDriverFactory = base => {
  const getRadioButton = () => base.$('input[type="radio"]');
  const getLabel = () => base.$('[data-hook="radio-label"]');
  const getContent = () => base.$('[data-hook="radio-button-content"]');

  return {
    ...baseUniDriverFactory(base),
    check: async () => getRadioButton().click(),
    isChecked: async () => ReactBase(getRadioButton()).prop('checked'),
    isDisabled: async () => ReactBase(getRadioButton()).prop('disabled'),
    getLabel: async () => getLabel().text(),
    getContent: async () =>
      (await getContent().exists()) ? getContent().getNative() : null, // eslint-disable-line no-restricted-properties
  };
};
