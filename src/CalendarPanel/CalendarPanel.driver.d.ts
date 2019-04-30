import {BaseDriver} from 'wix-ui-test-utils/driver-factory';
import {CalendarDriver} from '../Calendar/Calendar.driver';

export interface CalendarPanelDriver extends BaseDriver {
    calendarDriver: () => CalendarDriver,
    presetsDropdownLayoutDriver: () => any, // todo: dropdown layout driver
    isDropdownExists: () => boolean,
    findByDataHook: (dataHook: string) => HTMLElement | null
}