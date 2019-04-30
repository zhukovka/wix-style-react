import {BaseUniDriver} from 'wix-ui-test-utils/base-driver';
import {BaseDriver} from 'wix-ui-test-utils/driver-factory';
import {ReactWrapper} from 'enzyme';
import {AvatarDriver} from '../src/Avatar/Avatar.driver';
import {BadgeDriver} from '../src/Badge/Badge.driver';
import {BadgeSelectDriver} from '../src/BadgeSelect/BadgeSelect.driver';
import {BoxDriver} from '../src/Box/Box.uni.driver';
import {ToggleSwitchDriver} from '../src/ToggleSwitch/ToggleSwitch.driver';
import {TimeInputDriver} from '../src/TimeInput/TimeInput.driver';
import {TooltipDriver} from '../src/Tooltip/Tooltip.uni.driver';

declare namespace EnzymeTestkit {
  type EnzymeTestkitFactory<T extends BaseDriver> = (
    params: EnzymeTestkitParams
  ) => T;

  type EnzymeUniTestkitFactory<T extends BaseUniDriver> = (
    params: EnzymeTestkitParams
  ) => T;

  interface EnzymeTestkitParams {
    wrapper: ReactWrapper;
    dataHook: string;
  }

  export const avatarTestkitFactory: EnzymeUniTestkitFactory<AvatarDriver>;
  export const badgeTestkitFactory: EnzymeTestkitFactory<BadgeDriver>;
  export const badgeSelectTestkitFactory: EnzymeTestkitFactory<BadgeSelectDriver>;
  export const boxTestkitFactory: EnzymeUniTestkitFactory<BoxDriver>;
  export const timeInputTestkitFactory: EnzymeTestkitFactory<TimeInputDriver>;
  export const toggleSwitchTestkitFactory: EnzymeTestkitFactory<ToggleSwitchDriver>;
  export const tooltipTestkitFactory: EnzymeUniTestkitFactory<TooltipDriver>;
}

export = EnzymeTestkit;
