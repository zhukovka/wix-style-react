import { baseUniDriverFactory, ReactBase } from '../../../test/utils/unidriver';

export const RadioButtonUniDriverFactory = base => {
  const reactBase = ReactBase(base);

  return {
    ...baseUniDriverFactory(base),
  };
};
