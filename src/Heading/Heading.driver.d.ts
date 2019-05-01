import {BaseDriver} from 'wix-ui-test-utils/driver-factory';

export interface HeadingDriver extends BaseDriver {
  getText: () => string;
  getAppearance: () => string | null;
  isLight: () => boolean;
}
