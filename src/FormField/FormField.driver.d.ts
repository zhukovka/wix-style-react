import {BaseDriver} from 'wix-ui-test-utils/driver-factory';
import {TooltipDriver} from '../Tooltip/Tooltip.uni.driver';

export interface FormFieldDriver extends BaseDriver {
  element: () => HTMLElement;
  getChildren: () => HTMLElement;
  getLabel: () => HTMLElement;
  isRequired: () => boolean;
  getLengthLeft: () => number | null;
  isLengthExceeded: () => boolean;
  getInfoContent: () => TooltipDriver['hoverAndGetContent'];
}
