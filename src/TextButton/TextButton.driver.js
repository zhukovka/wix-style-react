import {buttonNextDriverFactory} from 'wix-ui-core/dist/src/components/button-next/button-next.driver';

export const textButtonDriverFactory = base => {
  base = base.$('[data-hook="textButton-core"]');
  return buttonNextDriverFactory(base);
};
