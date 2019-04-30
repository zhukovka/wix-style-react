import { baseUniDriverFactory, ReactBase } from '../../../test/utils/unidriver';

export const radioButtonUniDriverFactory = base => {
  const reactBase = ReactBase(base);

  const getRadioButton = async () => (await reactBase.children())[0];
  const getLabel = async () => (await reactBase.children())[1];
  const getContent = () => base.$('[data-hook="radio-button-content"]');

  return {
    ...baseUniDriverFactory(base),
    check: async () => ReactBase(await getRadioButton()).change(),
    isChecked: async () => ReactBase(await getRadioButton()).prop('checked'),
    isDisabled: async () => ReactBase(await getRadioButton()).prop('disabled'),
    getLabel: async () => (await getLabel()).text(),
    getContent: async () =>
      (await getContent().exists()) ? getContent().getNative() : null, // eslint-disable-line no-restricted-properties
  };
};
