import {BaseUniDriver} from 'wix-ui-test-utils/base-driver';
import {BaseDriver} from 'wix-ui-test-utils/driver-factory';
import {ReactWrapper} from 'enzyme';
import {AvatarDriver} from '../src/Avatar/Avatar.driver';

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
}

export = EnzymeTestkit;
