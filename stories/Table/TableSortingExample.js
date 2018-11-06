import React from 'react';
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
      sortedColumn: -1,
      sortingDirection: 'none',

      data: [
        {name: 'Cyan Towls', visible: false, onSale: false, price: '$145.99'},
        {name: 'Apple Towels', visible: true, onSale: false, price: '$22.99'},
        {name: 'Red Slippers', visible: false, onSale: false, price: '$1,265.69'},
        {name: 'Marble Slippers', visible: false, onSale: false, price: '$125,265.00'}
      ]
    };
  }

  getNextSortingDirection(dir = 'none') {
    const nextDirs = {
      none: 'asc',
      asc: 'desc',
      desc: 'none'
    };

    return nextDirs[dir];
  }

  getSortingProperties(colNum) {
    const {sortedColumn, sortingDirection} = this.state;

    const isCurentlySorted = sortedColumn === colNum;

    return {
      sortable: true,
      sortIconDirection: isCurentlySorted ? sortingDirection : 'none',
      sortIconDirectionOnHover: isCurentlySorted ? this.getNextSortingDirection(sortingDirection) : this.getNextSortingDirection()
    };
  }

  handleSortClick(colNum) {
    const {sortedColumn, sortingDirection} = this.state;

    const isCurentlySorted = sortedColumn === colNum;

    this.setState({
      sortedColumn: colNum,
      sortingDirection: isCurentlySorted ? this.getNextSortingDirection(sortingDirection) : this.getNextSortingDirection()
    });
  }

  getSortedData() {
    const {sortedColumn, sortingDirection, data} = this.state;

    if (sortingDirection === 'none') {
      return data;
    }

    const fields = {
      0: 'name',
      3: 'price'
    };

    const fieldToSortBy = fields[sortedColumn];
    const desc = sortingDirection === 'desc';

    const newData = [...data];

    // Currently comparing strings
    newData.sort((a, b) => {
      let res = 0;

      if (a[fieldToSortBy] < b[fieldToSortBy]) {
        res = -1;
      } else if (a[fieldToSortBy] > b[fieldToSortBy]) {
        res = 1;
      }

      return desc ? res : res * -1;
    });

    return newData;
  }

  render() {
    return (
      <Card>
        <Table
          dataHook="story-table-column-alignment-example"
          data={this.getSortedData()}
          itemsPerPage={20}
          onSortClick={(column, colNum) => this.handleSortClick(colNum)}
          columns={[
            {
              title: 'Name',
              render: row => <span>{row.name}</span>,
              width: '30%',
              minWidth: '150px',
              ...this.getSortingProperties(0)
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
              render: row => <span>{row.price}</span>,
              width: '20%',
              minWidth: '100px',
              ...this.getSortingProperties(3)
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
