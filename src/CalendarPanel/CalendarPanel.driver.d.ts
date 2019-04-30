import {BaseDriver} from 'wix-ui-test-utils/driver-factory';
import {CalendarDriver} from '../Calendar/Calendar.driver';
import {DropdownLayoutDriver} from '../DropdownLayout/DropdownLayout.driver';

export interface CalendarPanelDriver extends BaseDriver {
    calendarDriver: () => CalendarDriver,
    presetsDropdownLayoutDriver: () => DropdownLayoutDriver,
    isDropdownExists: () => boolean,
    findByDataHook: (dataHook: string) => HTMLElement | null
}