import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { CSSProperties } from 'react';

export interface TabsDriver extends BaseDriver {
  getTitles(): string[];
  clickTabAt(index: number): void;
  getActiveTabIndex(): number;
  isDefaultType(): boolean;
  getItemsContainerClassList(): DOMTokenList;
  getDataHook(index: number): string;
  getItemsWidth: CSSProperties['width'][];
  hasDivider(): boolean;
  getSideContent(): HTMLElement;
  getItemsMaxWidths(): CSSProperties['maxWidth'][];
}
