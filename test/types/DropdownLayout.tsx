import * as React from 'react';
import DropdownLayout from '../../src/DropdownLayout';
import {dropdownLayoutTestkitFactory} from '../../testkit';
import {dropdownLayoutTestkitFactory as dropdownLayoutEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = dropdownLayoutTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = dropdownLayoutEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function DropdownLayoutWithMandatoryProps() {
  return <DropdownLayout />;
}

function DropwnLayoutStandard() {
  const style = {
    display: 'inline-block',
    padding: '0 5px',
    width: '240px',
    lineHeight: '22px',
  };
  
  const options = [
    { id: 0, value: 'Option 1' },
    { id: 1, value: 'Option 2' },
    { id: 2, value: 'Option 3' },
    { id: 3, value: 'Option 4' },
    {
      id: 'footer',
      overrideStyle: true,
      value: (
        <div
          style={{
            height: '240px',
            padding: '20px',
            fontSize: '20',
            backgroundColor: '#F0F',
          }}
        >
          Click <a href="http://www.wix.com">here</a> to go to wix.
        </div>
      ),
    },
  ];
  
  const rtlOptions = [
    { id: 0, value: 'אופציה 1' },
    { id: 1, value: 'אופציה 2' },
    { id: 2, value: 'אופציה 3' },
    { id: 3, value: 'אופציה 4' },
  ];
  
  return (
    <div>
      <div style={style}>
        Left to right
        <br />
        <DropdownLayout visible options={options} />
      </div>
      <div className="rtl" style={style}>
        Right to left
        <br />
        <DropdownLayout visible options={rtlOptions} />
      </div>
    </div>
  );
}

function DropdownLayoutInfiniteScroll() {
  
  const generateOption = id => {
    return { id, value: 'options ' + id };
  };
  
  class ExampleInfiniteScroll extends React.Component<any,any> {
    itemsPerPage = 15;
    total = 300;
    constructor(props) {
      super(props);
      this.loadMore = this.loadMore.bind(this);
      this.state = { hasMore: true, data: [] };
    }
  
    style = {
      display: 'inline-block',
      padding: '0 5px',
      width: '240px',
      lineHeight: '22px',
    };
  
    generateData = () => {
      const newOptions = [];
      for (let i = 0; i < this.itemsPerPage; i++) {
        newOptions.push(generateOption(this.state.data.length + i));
      }
      this.setState({ data: this.state.data.concat(newOptions) });
    };
  
    loadMore() {
      const loadMoreData = () => {
        if (this.state.data.length >= this.total) {
          this.setState({ hasMore: false });
        } else {
          this.generateData();
        }
      };
      setTimeout(loadMoreData, 500);
    }
  
    render = () => {
      return (
        <div style={this.style}>
          <DropdownLayout
            infiniteScroll
            dataHook={'infinite-scroll-dropdownLayout'}
            visible
            onSelect={item => alert(item.value + ' was selected!')}
            hasMore={this.state.hasMore}
            loadMore={this.loadMore}
            options={this.state.data}
          />
        </div>
      );
    };
  }
}

function DropdownLayoutReactElements() {
  const options = [
    { id: 0, value: <span style={{ color: 'red' }}>Option 1</span> },
    { id: 1, value: <span style={{ color: 'green' }}>Option 2</span> },
    { id: 2, value: <span style={{ color: 'blue' }}>Option 3</span> },
    { id: 3, value: <span style={{ color: 'brown' }}>Option 4</span> },
  ];

  return <DropdownLayout visible selectedId={0} options={options} />;  
}

function DropdownLayoutControlled() {
  const style = {
    display: 'inline-block',
    padding: '0 5px',
    width: '160px',
    lineHeight: '22px',
  };
  
  const options = [
    { id: 'first title', value: 'title', title: true },
    { id: 1, value: 'Option 1' },
    { id: 'title', value: 'this is a title', title: true },
    { id: 2, value: 'Option 2' },
    { id: 0, value: '-' },
    { id: 'disabled', value: 'Disabled', disabled: true },
    { id: 4, value: 'Option 4' },
  ];
  
  class ControlledExample extends React.Component<any,any> {
    constructor() {
      super();
      this.state = { selectedId: 1, show: true };
    }
  
    render() {
      const onSelect = option => this.setState({ selectedId: option.id });
      const onClose = () => this.setState({ selectedId: -1 });
  
      const selectedOption = options.find(
        item => item.id === this.state.selectedId,
      );
  
      return (
        <div style={style}>
          {' '}
          Left to right
          <DropdownLayout
            visible
            options={options}
            onSelect={onSelect}
            selectedId={this.state.selectedId}
            onClose={onClose}
          />
          <div style={{ padding: '185px 0 16px' }}>
            {selectedOption ? selectedOption.value : 'Nothing'} is selected
          </div>
        </div>
      );
    }
  }
}

function DropdownLayoutCostumStyle() {
  const options = [
    { id: 1, value: 'Option 1' },
    { id: 2, value: 'Option 2' },
    { id: 3, value: 'Option 3' },
    { id: 4, value: 'Option 4' },
  ];
  
  const containerStyles: React.CSSProperties = {
    width: 300,
    display: 'inline-block',
    lineHeight: '22px',
    margin: 10,
    border: '1px solid rgba(0, 0, 0, 0.6)',
    borderRadius: 6,
    overflow: 'auto',
    boxShadow: '0 0 6px rgba(0, 0, 0, 0.6)',
    padding: '6px 0',
  };
  
  class ControlledExample extends React.Component {
    render() {
      return (
        <div style={containerStyles}>
          <DropdownLayout visible options={options} inContainer selectedId={2} />
        </div>
      );
    }
  }
}