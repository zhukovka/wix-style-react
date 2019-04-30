import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface ThumbnailDriver extends BaseUniDriver {
  getTitle(): Promise<string>;
  getDescription(): Promise<string>;
  getSelectedIcon(): Promise<any>;
  getBackgroundImage(): Promise<any>;
  isSelected(): Promise<boolean>;
  isDisabled(): Promise<boolean>;
  getImage(): Promise<any>;
  getWidth(): Promise<string>;
  getHeight(): Promise<string>;
}
