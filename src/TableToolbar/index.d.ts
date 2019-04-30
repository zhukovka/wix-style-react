import * as React from 'react';
import { LabelProps } from '../Label';

// Toolbar
declare const Toolbar: React.SFC & {
  ItemGroup: typeof ItemGroup;
  Item: typeof Item;
  Label: typeof Label;
  Divider: typeof Divider;
};

declare interface ItemGroupProps {
  position?: ItemGroupPosition;
}

declare type ItemGroupPosition = 'start' | 'end';

declare const ItemGroup: React.SFC<ItemGroupProps>;

declare interface ItemProps {
  layout?: ItemLayout;
}

declare type ItemLayout = 'button';

declare const Item: React.SFC<ItemProps>;

declare const Label: React.SFC<LabelProps>;

declare const Divider: React.SFC;

// TableToolbar
declare interface TitleProps {
  dataHook?: string;
}

declare const Title: React.SFC<TitleProps>;

declare interface SelectedCountProps {
  dataHook?: string;
}

declare const SelectedCount: React.SFC<SelectedCountProps>;

export declare const TableToolbar: typeof Toolbar & {
  SelectedCount: typeof SelectedCount;
  Title: typeof Title;
};

