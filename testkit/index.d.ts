import {BaseUniDriver} from 'wix-ui-test-utils/base-driver';
import {BaseDriver} from 'wix-ui-test-utils/driver-factory';
import {AvatarDriver} from '../src/Avatar/Avatar.driver';
import {BadgeDriver} from '../src/Badge/Badge.driver';
import {BadgeSelectDriver} from '../src/BadgeSelect/BadgeSelect.driver';
import {BoxDriver} from '../src/Box/Box.uni.driver';

declare namespace VanillaTestkit {
  type VanillaTestkitFactory<T extends BaseDriver> = (
    params: VanillaTeskitParams
  ) => T;

  type VanillaUniTestkitFactory<T extends BaseUniDriver> = (
    params: VanillaTeskitParams
  ) => T;

  interface VanillaTeskitParams {
    wrapper: HTMLElement;
    dataHook: string;
  }

  export const avatarTestkitFactory: VanillaUniTestkitFactory<AvatarDriver>;
  export const badgeTestkitFactory: VanillaTestkitFactory<BadgeDriver>;
  export const badgeSelectTestkitFactory: VanillaTestkitFactory<BadgeSelectDriver>;
  export const boxTestkitFactory: VanillaUniTestkitFactory<BoxDriver>;
}

export = VanillaTestkit;
