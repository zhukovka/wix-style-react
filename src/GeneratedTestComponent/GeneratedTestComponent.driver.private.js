import { generatedTestComponentDriverFactory as publicDriverFactory } from './GeneratedTestComponent.driver';

export const generatedTestComponentPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
