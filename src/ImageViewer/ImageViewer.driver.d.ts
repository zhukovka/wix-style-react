import {BaseDriver} from 'wix-ui-test-utils/driver-factory';
import {TooltipDriver} from '../Tooltip/Tooltip.uni.driver';

export interface ImageViewerDriver extends BaseDriver {
  getAddItemDataHook: () => string;
  getElement: () => HTMLElement;
  getContainerStyles: () => string;
  getImageUrl: () => string;
  getErrorTooltipContent: TooltipDriver['hoverAndGetContent'];
  getAddTooltipContent: TooltipDriver['hoverAndGetContent'];
  getRemoveTooltipContent: () => TooltipDriver['hoverAndGetContent'];
  isAddItemVisible: () => boolean;
  isImageVisible: () => boolean;
  isErrorVisible: () => boolean;
  clickAdd: () => void;
  clickUpdate: () => void;
  clickRemove: () => void;
  updateExists: () => boolean;
}
