import * as React from 'react';
import WixComponent, {WixComponentProps} from '../BaseComponents/WixComponent';

export interface BreadcrumbsProps extends WixComponentProps {
  items: BreadcrumbsItem[];
  onClick?: (item: BreadcrumbsItem) => void;
  activeId?: string | number;
  size?: BreadcrumbsSize;
  theme?: BreadcrumbsTheme;
}

export default class Breadcrumbs extends WixComponent<BreadcrumbsProps> {}

export interface BreadcrumbsItem {
  id: string | number;
  value: React.ReactNode;
  link?: string;
  customElement?: JSX.Element;
  disabled?: boolean;
}

export type BreadcrumbsSize = 'medium' | 'large';

export type BreadcrumbsTheme =
  | 'onWhiteBackground'
  | 'onGrayBackground'
  | 'onDarkBackground';
