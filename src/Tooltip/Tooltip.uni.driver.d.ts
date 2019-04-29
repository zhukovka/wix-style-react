import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';
import { TooltipOldPlacement } from './index';

export interface TooltipDriver extends BaseUniDriver {
  focus(): Promise<void>;
  blur(): Promise<void>;
  isShown(): Promise<boolean>;
  /** @Deprecated WSR drivers should not expose internal elements */
  getTooltipWrapper(): Promise<any>;
  mouseEnter(): Promise<void>;
  mouseLeave(): Promise<void>;
  hasErrorTheme(): Promise<boolean>;
  hasDarkTheme(): Promise<boolean>;
  hasLightTheme(): Promise<boolean>;
  hasAnimationClass(): Promise<boolean>;
  getChildren(): Promise<string>;
  getContent(): Promise<string>;
  getPlacement(): Promise<TooltipOldPlacement>;
  getMaxWidth(): Promise<string | undefined>;
  getMinWidth(): Promise<string | undefined>;
  getAlignment(): Promise<string | undefined>;
  getPadding(): Promise<string | undefined>;
  hasArrow(): Promise<boolean>;
  hoverAndGetContent(): Promise<string | undefined>;
}
