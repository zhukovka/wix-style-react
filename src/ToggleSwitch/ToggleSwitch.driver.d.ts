import { toggleSwitchDriverFactory } from 'wix-ui-backoffice/dist/src/components/ToggleSwitch/ToggleSwitch.driver';
import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface ToggleSwitchDriver extends BaseDriver, ReturnType<typeof toggleSwitchDriverFactory> {}

export default toggleSwitchDriverFactory;
