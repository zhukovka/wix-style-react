import {BaseDriver} from 'wix-ui-test-utils/driver-factory';
import {SyntheticEventData} from 'react-dom/test-utils';

export interface CalendarDriver extends BaseDriver {
  close: () => void;
  isVisible: () => boolean;
  getCurrentMonthWithYear: () => string;
  getNthWeekDayName: (n?: number) => string;
  clickOnNthDay: (n?: number) => void;
  clickDay: (date: Date) => void;
  clickOnNthDayOfTheMonth: (n?: number) => void;
  clickOnSelectedDay: () => void;
  clickOnYearDropdown: () => void;
  clickOnMonthDropdown: () => void;
  clickOnNthYear: (n?: number) => void;
  clickOnPrevMonthButton: () => void;
  clickOnNextMonthButton: () => void;
  isHeaderVisible: () => boolean;
  isYearDropdownExists: () => boolean;
  isYearCaptionExists: () => boolean;
  isMonthDropdownExists: () => boolean;
  isMonthCaptionExists: () => boolean;
  getMonthCaption: () => string;
  getMonthDropdownLabel: () => string;
  getSelectedYear: () => string;
  getFocusedDay: () => string | null;
  getFocusedDayElement: () => HTMLElement | null;
  pressLeftArrow: () => void;
  pressRightArrow: () => void;
  getSelectedDay: () => string;
  getWidth: () => CSSStyleDeclaration['width'];
  triggerKeyDown: (params: SyntheticEventData) => void; 
  isFocusedDayVisuallyUnfocused: () => boolean;
  containsVisuallyUnfocusedDay: () => boolean;
  isTwoMonthsLayout: () => boolean;
  getMonthDropdownDriver: () => any; // TODO: after dropdrown layout is completed
  getYearDropdownDriver: () => any; // TODO: after dropdrown layout is completed
  getNumOfVisibleMonths: () => number;
  getNumOfSelectedDays: () => number;
  getSelectedDays: () => Date[];
  mouseClickOutside: () => void;
}
