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

  constructor(props) {
    super(props);

    this.state = {
      sortingField: '',
      sortingDirection: 'none',

      data: [
        {name: 'Cyan Towls', visible: false, onSale: false, price: 145.99},
        {name: 'Apple Towels', visible: true, onSale: false, price: 22.99},
        {name: 'Red Slippers', visible: false, onSale: false, price: 1265.69},
        {name: 'Marble Slippers', visible: false, onSale: false, price: 125.00}
      ]
    };
  }

  getNextSortingDirection(dir = 'none') {
    const dirs = ['none', 'asc', 'desc'];
    return dirs.find((d, i) => i === (dirs.indexOf(dir) + 1) % dirs.length);
  }

  getSortingProperties(field) {
    const {sortingField, sortingDirection} = this.state;

    const isCurentlySorted = sortingField === field;

    return {
      sortable: true,
      sortingField: field, // This field is not used by `<Table/>`, but can be accessed on `handleSortClick`
      sortIconDirection: isCurentlySorted ? sortingDirection : 'none',
      sortIconDirectionOnHover: isCurentlySorted ? this.getNextSortingDirection(sortingDirection) : this.getNextSortingDirection()
    };
  }

  handleSortClick(field) {
    const {sortingField, sortingDirection} = this.state;

    const isCurentlySorted = sortingField === field;

    this.setState({
      sortingField: field,
      sortingDirection: isCurentlySorted ? this.getNextSortingDirection(sortingDirection) : this.getNextSortingDirection()
    });
  }

  getSortedData() {
    const {sortingField, sortingDirection, data} = this.state;

    if (sortingDirection === 'none') {
      return data;
    }

    const desc = sortingDirection === 'desc';
    const sortedData = sortBy(data, sortingField);

    return desc ? sortedData : sortedData.reverse();
  }

  render() {
    return (
      <Card>
        <Table
          dataHook="story-table-column-alignment-example"
          data={this.getSortedData()}
          itemsPerPage={20}
          onSortClick={column => this.handleSortClick(column.sortingField)}
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
