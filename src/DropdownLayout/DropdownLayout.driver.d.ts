import {BaseDriver} from 'wix-ui-test-utils/driver-factory';
import {DropdownLayoutTheme} from '.';

export interface DropdownLayoutDriver extends BaseDriver {
  classes: () => Element['className'];
  clickAtOption: (position: number) => void;
  clickAtOptionWithValue: (value: string) => void;
  hasTheme: (theme: DropdownLayoutTheme) => boolean;
  hasTopArrow: () => boolean;
  isDown: () => boolean;
  isLinkOption: (position: number) => boolean;
  isOptionADivider: (position: number) => boolean;
  isOptionExists: (optionText: string) => boolean;
  /** returns if an option is hovered. notice that it checks by index and __not__ by id */
  isOptionHovered: (position: number) => boolean;
  isOptionSelected: (position: number) => boolean;
  isOptionHoveredWithGlobalClassName: (position: number) => boolean;
  isOptionSelectedWithGlobalClassName: (position: number) => boolean;
  isOptionHeightSmall: (position: number) => boolean;
  isOptionHeightBig: (position: number) => boolean;
  isShown: () => boolean;
  isUp: () => boolean;
  mouseClickOutside: () => void;
  mouseEnter: () => void;
  mouseEnterAtOption: (position: number) => void;
  mouseLeave: () => void;
  mouseLeaveAtOption: (position: number) => void;
  /** @deprecated Use optionDriver*/
  optionAt: (position: number) => any;
  /** @deprecated This should be a private method since the hook include internal parts ('dropdown-divider-{id}, dropdown-item-{id})') */
  optionByHook: (hook: string) => DropdownOptionDriver;
  optionById: (optionId: string | number) => DropdownOptionDriver;
  optionContentAt: (position: number) => string;
  optionDriver: (option: any) => DropdownOptionDriver;
  options: () => DropdownOptionDriver[];
  optionsContent: () => string;
  optionsLength: () => number;
  /** @deprecated should be private */
  optionsScrollTop: () => number;
  pressDownKey: () => void;
  pressUpKey: () => void;
  pressEnterKey: () => void;
  pressSpaceKey: () => void;
  pressTabKey: () => void;
  pressEscKey: () => void;
  tabIndex: () => number;
}

export interface DropdownOptionDriver {
  element: () => HTMLElement;
  mouseEnter: () => void;
  mouseLeave: () => void;
  isHovered: () => boolean;
  isSelected: () => boolean;
  isHoveredWithGlobalClassName: () => boolean;
  isSelectedWithGlobalClassName: () => boolean;
  content: () => string;
  click: () => void;
  isDivider: () => boolean;
  isDisabled: () => boolean;
}
