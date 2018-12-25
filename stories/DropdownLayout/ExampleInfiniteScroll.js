import React from 'react';
import DropdownLayout from 'wix-style-react/DropdownLayout';

const generateOption = (id) => {
  return { id, value: 'options ' + id }
};

export default class ExampleInfiniteScroll extends React.Component {
  constructor(props) {
    super(props);
    this.loadMore = this.loadMore.bind(this);
    this.itemsPerPage = 5;
    this.total = 50;
    this.count = 0;
    this.state = { hasMore: true };
  }

  style = {
    display: 'inline-block',
    padding: '0 5px',
    width: '240px',
    lineHeight: '22px',
  };

  generateData = () => {
    const generatedOptions = [];
    for (let i = 0; i < this.itemsPerPage; i++) {
      generatedOptions.push(generateOption(this.count + i));
    }
    this.count += this.itemsPerPage;
    return generatedOptions;
  };

  loadMore() {
    if (this.state.count >= this.total) {
      this.setState({ hasMore: false });
    }
    else {
      return this.generateData();
    }
  };

  render = () => {
    return <div style={this.style}>
      <DropdownLayout infiniteScroll
                      visible
                      options={this.generateData()}
                      hasMore={this.state.hasMore}
                      loadMore={this.loadMore}
      />
    </div>;
  }
}