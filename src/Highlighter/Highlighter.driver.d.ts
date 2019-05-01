import {BaseDriver} from 'wix-ui-test-utils/driver-factory';

export interface HighlighterDriver extends BaseDriver {
  html: () => string;
  getElement: () => HTMLElement;
}
