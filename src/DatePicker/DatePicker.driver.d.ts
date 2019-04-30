import {BaseDriver} from "wix-ui-test-utils/driver-factory";
import {CalendarDriver} from "../Calendar/Calendar.driver";

export interface DatePickerDriver extends BaseDriver {
    driver: {
        exists: () => boolean,
        open: () => void;
    },
    inputDriver: any, // todo: add once input types are implemented
    calendarDriver: CalendarDriver
}