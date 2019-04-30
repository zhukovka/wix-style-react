import * as React from 'react';
import WixComponent, { WixComponentProps } from '../BaseComponents/WixComponent';
import { CSSProperties } from 'react';

interface Tab {
  id: string | number,
  title: React.ReactNode;
  dataHook?: string;
}

export interface TabsProps extends WixComponentProps {
  activeId?: string | number;
  hasDivider?: boolean;
  items: Tab[];
  minWidth?: CSSProperties['minWidth'];
  type?: TabsType;
  sideContent?: React.ReactNode;
  width?: string | number;
  onClick?(tab: Tab): TabPropTypes.onClick,
}

export type TabsType = '' | 'compact' | 'compactSide' | 'uniformSide' | 'uniformFull';

export default class Tabs extends WixComponent<TabsProps> {}
