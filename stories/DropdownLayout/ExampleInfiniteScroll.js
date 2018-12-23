import React from 'react';
import DropdownLayout from 'wix-style-react/DropdownLayout';
import Chance from 'chance';

const chance = new Chance();

const generateOption = () => {
  return { id: chance.guid(), value: chance.name() }
};

const generateData = (itemsToAdd, currentOptions) => {
  for (let i = 0; i < itemsToAdd; i++) {
    currentOptions.push(generateOption());
  }
  return currentOptions;
};


export default class ExampleInfiniteScroll extends React.Component {
  constructor(props) {
    super(props);
    this.loadMore = this.loadMore.bind(this);
    this.itemsPerPage = 5;
    this.total = 40;
    this.state = { hasMore: true, count: this.itemsPerPage, options: generateData(this.itemsPerPage, []) };
  }

  style = {
    display: 'inline-block',
    padding: '0 5px',
    width: '240px',
    lineHeight: '22px',
  };

  loadMore() {
    const loadMoreData = () => {
      this.setState({ count: this.state.count + this.itemsPerPage });
      if (this.state.count >= this.total) {
        this.setState({ hasMore: false });
      }
    };
    setTimeout(loadMoreData, 300);
  }

  render = () => (
    <div>
      <div style={this.style}>
        Left to right
        <br/>
        <DropdownLayout infiniteScroll
                        visible
                        options={generateData(this.itemsPerPage, this.state.options)}
                        itemsPerPage={this.itemsPerPage}
                        hasMore={this.state.hasMore}
                        loadMore={this.loadMore}
        />
      </div>
    </div>
  );

}