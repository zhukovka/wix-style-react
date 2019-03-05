import { modalDriverFactory as publicDriverFactory } from './Modal.uni.driver';

export const modalPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),
    // Add here driver methods that considered "private"

  };
};
