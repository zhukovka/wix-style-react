import {BaseUniDriver} from 'wix-ui-test-utils/base-driver';
import {BaseDriver} from 'wix-ui-test-utils/driver-factory';
import {ReactWrapper} from 'enzyme';
import {AvatarDriver} from '../src/Avatar/Avatar.driver';
import {BadgeDriver} from '../src/Badge/Badge.driver';
import {BadgeSelectDriver} from '../src/BadgeSelect/BadgeSelect.driver';
import {BoxDriver} from '../src/Box/Box.uni.driver';

declare namespace EnzymeTestkit {
  type EnzymeTestkitFactory<T extends BaseDriver> = (
    params: EnzymeTeskitParams
  ) => T;

  type EnzymeUniTestkitFactory<T extends BaseUniDriver> = (
    params: EnzymeTeskitParams
  ) => T;

  interface EnzymeTeskitParams {
    wrapper: ReactWrapper;
    dataHook: string;
  }

  export const avatarTestkitFactory: EnzymeUniTestkitFactory<AvatarDriver>;
  export const badgeTestkitFactory: EnzymeTestkitFactory<BadgeDriver>;
  export const badgeSelectTestkitFactory: EnzymeTestkitFactory<BadgeSelectDriver>;
  export const boxTestkitFactory: EnzymeUniTestkitFactory<BoxDriver>;
}

export = EnzymeTestkit;
