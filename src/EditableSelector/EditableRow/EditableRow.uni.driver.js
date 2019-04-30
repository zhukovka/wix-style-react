import { baseUniDriverFactory, ReactBase } from '../../../test/utils/unidriver';

export const editableRowUniDriverFactory = base => {
  const reactBase = ReactBase(base);

  return {
    ...baseUniDriverFactory(base),
  };
};
