import * as React from 'react';
import WixComponent, {WixComponentProps} from '../BaseComponents/WixComponent';

export interface CardProps {
  stretchVertically?: boolean;
  hideOverflow?: boolean;
  dataHook?: string;
  children?: React.ReactNode
}

declare const Card: React.SFC<CardProps> & {
  Content: typeof Content;
  Header: typeof Header;
  Divider: typeof Divider;
};

export default Card;

declare class Content extends React.Component {}

declare class Header extends WixComponent<HeaderProps> {}

declare const Divider: React.SFC;

interface HeaderProps extends WixComponentProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  suffix?: React.ReactNode;
  withoutDivider?: boolean;
}
