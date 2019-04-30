import * as React from 'react';
import { TableToolbar } from '../../src/TableToolbar';

function TableToolbarWithMandatoryProps() {
  return <TableToolbar />;
}

function TableToolbarWithAllProps() {
  return <TableToolbar>
    <TableToolbar.Title dataHook="hook">TITLE</TableToolbar.Title>
    <TableToolbar.SelectedCount dataHook="selected"/>
    <TableToolbar.Divider/>
    <TableToolbar.Item layout="button">Hi</TableToolbar.Item>
    <TableToolbar.ItemGroup position="start" />
    <TableToolbar.Label>hey ho</TableToolbar.Label>
  </TableToolbar>;
}
