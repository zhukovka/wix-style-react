import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface TextDriver extends BaseDriver {
  getTagName(): string;
  getText(): string;
  getSize(): string;
  getSkin(): string;
  getWeight(): string;
  isLight(): boolean;
  isSecondary(): boolean;
}
