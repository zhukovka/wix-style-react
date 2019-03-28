import React from 'react';
import { Table, ToolbarContextPropTypes } from 'wix-style-react/Table';
import {
  TableToolbar,
  ItemGroup,
  Item,
  Title,
  SelectedCount,
} from 'wix-style-react/TableToolbar';

import TableActionCell from 'wix-style-react/TableActionCell';
import Card from 'wix-style-react/Card';

const baseData = [
  {
    name: 'Apple Towels',
    SKU: '111222',
    price: '$2.00',
    inventory: 'In stock',
    extraData: 'Towels with some apples on them',
  },
  {
    name: 'Marble Slippers',
    SKU: '333444',
    price: '$14.00',
    inventory: 'In stock',
    extraData: 'Marble colored fancy slippers',
  },
  {
    name: 'Red Slippers',
    SKU: '444555',
    price: '$14.00',
    inventory: 'Out of stock',
    extraData: 'Rose red colored slippers',
  },
];

const primaryAction = rowData => window.alert(`Editing ${rowData.name}`);

export class CollapsableTableExample extends React.Component {
  render() {
    return (
      <Card>
        <Table
          dataHook="story-action-cell-primary-example"
          data={baseData}
          itemsPerPage={20}
          rowDetails={(row, rowNum) => (
            <Card>
              <Card.Content>
                <div>{row.extraData}</div>
              </Card.Content>
            </Card>
          )}
          columns={[
            {
              title: 'Name',
              render: row => <span>{row.name}</span>,
              width: '30%',
              minWidth: '150px',
            },
            {
              title: 'SKU',
              render: row => <span>{row.SKU}</span>,
              width: '20%',
              minWidth: '100px',
            },
            {
              title: 'Price',
              render: row => <span>{row.price}</span>,
              width: '20%',
              minWidth: '100px',
            },
            {
              title: 'Inventory',
              render: row => <span>{row.inventory}</span>,
              width: '20%',
              minWidth: '100px',
            },
          ]}
        >
          {selectionContext =>
            selectionContext.selectedCount === 0 ? (
              <MainToolbar />
            ) : (
              <BulkActionsToolbar {...selectionContext} />
            )
          }
          <Table.Content />
        </Table>
      </Card>
    );
  }
}

const MainToolbar = () => (
  <TableToolbar>
    <ItemGroup position="start">
      <Item>
        <Title>My Table</Title>
      </Item>
    </ItemGroup>
  </TableToolbar>
);

const BulkActionsToolbar = props => (
  <TableToolbar>
    <ItemGroup position="start">
      <Item>
        <SelectedCount>{`${props.selectedCount} Selected`}</SelectedCount>
      </Item>
    </ItemGroup>
  </TableToolbar>
);

BulkActionsToolbar.propTypes = ToolbarContextPropTypes;
