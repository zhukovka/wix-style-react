import {BaseUniDriver} from 'wix-ui-test-utils/unidriver';

export interface DropdownBaseDriver extends BaseUniDriver {
  clickTargetElement: () => Promise<void>;
  isDropdownShown: () => Promise<boolean>;
  selectOption: (index: number) => Promise<void>;
  clickOutside: () => Promise<void>;
  mouseEnter: () => Promise<void>;
  mouseLeave: () => Promise<void>;
}
