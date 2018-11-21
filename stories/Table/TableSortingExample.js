import React from 'react';
import sortBy from 'lodash/sortBy';
import {Table} from 'wix-style-react/Table';
import {
  TableToolbar,
  ItemGroup,
  Item,
  Title
} from 'wix-style-react/TableToolbar';

import Card from 'wix-style-react/Card';

export class TableSortingExample extends React.Component {
  state = {
    sortingColumnKey: '',
    sortingDirection: 'none',

    data: [
      {name: 'Cyan Towls', visible: false, onSale: false, price: 145.99},
      {name: 'Apple Towels', visible: true, onSale: false, price: 22.99},
      {name: 'Red Slippers', visible: false, onSale: false, price: 1265.69},
      {name: 'Marble Slippers', visible: false, onSale: false, price: 125.00}
    ]
  };

  getSortingProperties = key => {
    const {sortingColumnKey, sortingDirection} = this.state;

    const isCurentlySorted = sortingColumnKey === key;

    return {
      key, // This field is not used by `<Table/>`, but can be accessed on `handleSortClick`
      sortable: true,
      sortIconDirection: isCurentlySorted ? sortingDirection : 'none'
    };
  }

  handleSortChange = (column, colNum, nextSortingDirection) => {
    this.setState({
      sortingColumnKey: column.key,
      sortingDirection: nextSortingDirection
    });
  }

  getSortedData = () => {
    const {sortingColumnKey, sortingDirection, data} = this.state;

    if (sortingDirection === 'none') {
      return data;
    }

    const desc = sortingDirection === 'desc';
    const sortedData = sortBy(data, sortingColumnKey);

    return desc ? sortedData : sortedData.reverse();
  }

  render() {
    return (
      <Card>
        <Table
          dataHook="story-table-sorting-example"
          data={this.getSortedData()}
          itemsPerPage={20}
          onSortClick={this.handleSortChange}
          columns={[
            {
              title: 'Name',
              render: row => <span>{row.name}</span>,
              width: '30%',
              minWidth: '150px',
              ...this.getSortingProperties('name')
            },
            {
              title: 'Visibility',
              render: row => (
                <span>{row.visible ? 'Visible' : 'Hidden'}</span>
              ),
              width: '20%',
              minWidth: '100px'
            },
            {
              title: 'On Sale',
              render: row => (
                <span>{row.onSale ? 'On sale' : 'Not on sale'}</span>
              ),
              width: '20%',
              minWidth: '100px',
              infoTooltipProps: {
                content: 'I am a Tooltip!'
              }
            },
            {
              title: 'Price',
              render: row => <span>{`$${row.price}`}</span>,
              width: '20%',
              minWidth: '100px',
              ...this.getSortingProperties('price')
            }
          ]}
          >
          <MainToolbar/>
          <Table.Content/>
        </Table>
      </Card>
    );
  }
}

const MainToolbar = () => {
  return (
    <TableToolbar>
      <ItemGroup position="start">
        <Item>
          <Title>My Table</Title>
        </Item>
      </ItemGroup>
    </TableToolbar>
  );
};
