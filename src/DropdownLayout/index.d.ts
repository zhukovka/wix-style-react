import WixComponent, {WixComponentProps} from '../BaseComponents/WixComponent';

export interface DropdownLayoutProps extends WixComponentProps {
  dropDirectionUp?: boolean;
  focusOnSelectedOption?: boolean;
  onClose?: () => void;
  onSelect?: (
    option: DropdownLayoutValueOption,
    sameOptionWasPicked: boolean
  ) => void;
  onOptionMarked?: (option: DropdownLayoutValueOption | null) => void;
  visible?: boolean;
  options?: DropdownLayoutOption[];
  selectedId?: string | number;
  tabIndex?: number;
  theme?: DropdownLayoutTheme;
  onClickOutside?: (e: TouchEvent | MouseEvent) => void;
  fixedHeader?: React.ReactNode;
  fixedFooter?: React.ReactNode;
  maxHeightPixels?: number;
  minWidthPixels?: number;
  withArrow?: boolean;
  closeOnSelect?: boolean;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  itemHeight?: DropdownLayoutItemHeight;
  selectedHighlight?: boolean;
  inContainer?: boolean;
  infiniteScroll?: boolean;
  loadMore?: (page: number) => void;
  hasMore?: boolean;
}

export default class DropdownLayout extends WixComponent<DropdownLayoutProps> {
  static NONE_SELECTED_ID: NoneSelectedId;
}

type NoneSelectedId = -1;

export type DropdownLayoutOption = DropdownLayoutValueOption | DropdownLayoutDividerOption;

export type DropdownLayoutValueOption = {
  id: string | number;
  value: React.ReactNode | string | RenderOptionFn;
  disabled?: boolean;
  title?: boolean;
  linkTo?: string;
  overrideStyle?: boolean;
};

export type RenderOptionFn = (options: {selected: boolean}) => JSX.Element; 

export type DropdownLayoutDividerOption = {value: '-'};

export type DropdownLayoutItemHeight = 'small' | 'big';

export type DropdownLayoutTheme = 'b2b' | 'material';
