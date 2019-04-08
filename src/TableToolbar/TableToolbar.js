import React from 'react';
import { node, string } from 'prop-types';
import { Toolbar, ItemGroup, Item, Label, Divider } from './Toolbar';
import Heading from '../Heading';
import Text from '../Text';

export const Title = props => {
  const { dataHook } = props;
  return (
    <Heading dataHook={dataHook} appearance="H3">
      {props.children}
    </Heading>
  );
};
Title.displayName = 'TableToolbar.Title';
Title.propTypes = {
  children: node,
  dataHook: string,
};

export const SelectedCount = props => {
  const { dataHook } = props;
  return (
    <Text dataHook={dataHook} weight="normal" size="medium">
      {props.children}
    </Text>
  );
};
SelectedCount.displayName = 'TableToolbar.SelectedCount';
SelectedCount.propTypes = {
  children: node,
  dataHook: string,
};

export const TableToolbar = Toolbar;

// Aliases for convenience
TableToolbar.ItemGroup = ItemGroup;
TableToolbar.Item = Item;
TableToolbar.Label = Label;
TableToolbar.SelectedCount = SelectedCount;
TableToolbar.Title = Title;
TableToolbar.Divider = Divider;
