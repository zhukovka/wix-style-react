import {BaseDriver} from 'wix-ui-test-utils/driver-factory';
import {EmptyStateTheme} from '.';

export interface EmptyStateDriver extends BaseDriver {
  element: () => HTMLElement;
  getTitleText: () => string;
  getSubtitleText: () => string;
  hasTheme: (themeName: EmptyStateTheme) => boolean;
  getImageUrl: () => string;
  imageNodeExists: () => boolean;
  childrenContentExists: () => boolean;
}
