import WixComponent, {WixComponentProps} from "../BaseComponents/WixComponent";
import {TooltipProps} from "../Tooltip";
import {Omit} from "..";

export interface ImageViewerProps extends WixComponentProps {
  imageUrl?: string;
  error?: boolean;
  errorMessage?: string;
  /** Error tooltp placement
   * @deprecated
   * @see tooltipProps
   */
  tooltipPlacement?: TooltipProps['placement'];
  tooltipProps?: Omit<TooltipProps, 'content'>;
  showUpdateButton?: boolean; 
  onAddImage?: React.MouseEventHandler<HTMLElement>;
  onUpdateImage?: React.MouseEventHandler<HTMLElement>;
  onRemoveImage?: React.MouseEventHandler<HTMLElement>;
  addImageInfo?: string;
  updateImageInfo?: string;
  removeImageInfo?: string;
  removeRoundedBorders?: boolean;
  width?: number | string;
  height?: number | string;
}

export default class ImageViewer extends WixComponent<ImageViewerProps> {}
