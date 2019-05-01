import { baseUniDriverFactory, ReactBase } from '../../test/utils/unidriver';

export const tableUniDriverFactory = base => {
  const reactBase = ReactBase(base);

  return {
    ...baseUniDriverFactory(base),
  };
};
