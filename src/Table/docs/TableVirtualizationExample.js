import { Table } from 'wix-style-react/Table';
import React from 'react';
import Card from 'wix-style-react/Card';
import Page from 'wix-style-react/Page';

const baseDataSet = [
  {
    id: `1`,
    name: `Apple Towels`,
    SKU: '111222',
    price: '$2.00',
    inventory: 'In stock',
    collectionId: 1,
  },
  {
    id: `2`,
    name: `Cyan Towels`,
    SKU: '222333',
    price: '$2.00',
    inventory: 'In stock',
    collectionId: 1,
    filterId: 2,
  },
  {
    id: `3`,
    name: `Marble Slippers`,
    SKU: '333444',
    price: '$14.00',
    inventory: 'In stock',
    collectionId: 2,
  },
  {
    id: `4`,
    name: `Red Slippers`,
    SKU: '444555',
    price: '$14.00',
    inventory: 'Out of stock',
    collectionId: 2,
    filterId: 1,
  },
];

const generateData = count =>
  [...Array(count).fill(0)].map((_n, i) => ({
    ...baseDataSet[Math.floor(Math.random() * 4)],
    id: i,
    SKU: i,
  }));

export class TableVirtualizationExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollableContentRef: null,
      hasMore: true,
      count: 1000,
    };
  }

  render() {
    return (
      <div
        style={{
          height: '500px',
          paddingBottom: '16px',
          marginBottom: '20px',
          display: 'flex',
          flexFlow: 'column',
          minWidth: '966px',
        }}
      >
        <Table
          withWrapper={false}
          dataHook="story-table-infinite-example"
          data={generateData(this.state.count)}
          hasMore={this.state.hasMore}
          scrollElement={this.state.scrollableContentRef}
          virtualized
          virtualizedLineHeight={60}
          virtualizedTableHeight={350}
          columns={[
            {
              title: 'Name',
              render: row => row.name,
              width: '40%',
              minWidth: '150px',
            },
            {
              title: 'SKU',
              render: row => row.SKU,
              width: '20%',
              minWidth: '100px',
            },
            {
              title: 'Price',
              render: row => row.price,
              width: '20%',
              minWidth: '100px',
            },
            {
              title: 'Inventory',
              render: row => row.inventory,
              width: '20%',
              minWidth: '100px',
            },
          ]}
          showLastRowDivider
        >
          <Page
            scrollableContentRef={scrollableContentRef =>
              !this.state.scrollableContentRef &&
              this.setState({ scrollableContentRef })
            }
          >
            <Page.Header title="My Table Title" />
            <Page.Content>
              <Card>
                <Table.Content titleBarVisible={false} />
              </Card>
            </Page.Content>
          </Page>
        </Table>
      </div>
    );
  }
}
