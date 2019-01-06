import React from 'react';
import PropTypes from 'prop-types';

import { contactItemBuilder } from 'wix-style-react/ContactItemBuilder';
import EmptyState from 'wix-style-react/EmptyState';
import Popover from 'wix-style-react/Popover';
import Text from 'wix-style-react/Text';
import TextButton from 'wix-style-react/TextButton';
import Button from 'wix-style-react/Button';
import Search from 'wix-style-react/Search';
import Loader from 'wix-style-react/Loader';
import DropdownLayout from 'wix-style-react/DropdownLayout';
import Add from 'wix-style-react/new-icons/Add';

export class ItemPickerSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], inputText: '', isLoading: true };
  }

  static propTypes = {
    fetchItems: PropTypes.any,
    emptyStateComponent: PropTypes.any,
    itemBuilder: PropTypes.func,
    footer: PropTypes.any,
    onSelect: PropTypes.func,
  };

  componentDidMount() {
    this.queryItems();
  }

  onSelectedItem = ({ id }) => {
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      inputText: selectedItem.title,
    });
    alert(selectedItem.title + ' selected');
    this.props.onSelect(selectedItem);
  };

  queryItems = (query = '') => {
    this.setState({ isLoading: true });
    this.props.fetchItems({ query }).then(items => {
      this.setState({
        items,
        isLoading: false,
      });
    });
  };

  onChange = event => {
    event = event.target.value;
    this.setState({
      inputText: event,
    });

    this.queryItems(event);
  };

  isEmpty = () => !this.state.items.length;

  render = () => (
    <div>
      <div style={{ padding: '18px 20px 14px 18px' }}>
        <Search
          onChange={this.onChange}
          placeholder={'Search...'}
          value={this.state.inputText}
        />
      </div>
      {this.state.isLoading ? (
        <div
          style={{
            margin: '120px 0 0 136px',
          }}
        >
          <Loader />
        </div>
      ) : this.isEmpty() ? (
        this.props.emptyStateComponent
      ) : (
        <DropdownLayout
          options={this.state.items.map(this.props.itemBuilder)}
          fixedFooter={this.props.footer}
          onSelect={item => this.onSelectedItem({ id: item.id })}
          maxHeightPixels={340}
          inContainer
          visible
        />
      )}
    </div>
  );
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shown: false };
  }

  toggle() {
    this.setState(({ shown }) => ({ shown: !shown }));
  }

  items = [
    {
      id: 0,
      title: 'Title with image',
      subtitle: 'subtitle with image',
      imageUrl: 'https://randomuser.me/api/portraits/women/39.jpg',
    },
    { id: 1, title: 'No image title', subtitle: 'No image subtitle' },
    { id: 2, title: 'No subtitle item' },
    { id: 3, title: 'No subtitle item' },
    { id: 4, title: 'No subtitle item' },
    { id: 5, title: 'No subtitle item' },
    { id: 6, title: 'No subtitle item' },
  ];
  render = () => {
    const fetchItems = ({ query }) => {
      return new Promise((resolve, reject) =>
        setTimeout(
          () =>
            query
              ? resolve(
                  this.items.filter(x =>
                    x.title.toLowerCase().includes(query.toLowerCase()),
                  ),
                )
              : resolve(this.items),
          500,
        ),
      );
    };

    const emptyStateComponent = (
      <EmptyState
        dataHook={'empty-message'}
        title="No contacts found."
        subtitle={
          <Text>
            Add or import contacts{' '}
            <a href="http://wwww.wix.com"> Learn more </a>
          </Text>
        }
      >
        <TextButton prefixIcon={<Add />}>Add Contact</TextButton>
      </EmptyState>
    );

    const footer = (
      <div>
        <TextButton prefixIcon={<Add />}>Add Contact</TextButton>
      </div>
    );

    const onSelect = item => item + ' selected!';

    const wrapperStyle = {
      width: '331px',
      height: '394px',
    };

    return (
      <Popover
        onClick={() => this.toggle()}
        shown={this.state.shown}
        appendTo="window"
        placement="bottom"
        showArrow
        timeout={150}
      >
        <Popover.Element>
          <Button>toggle item picker selector</Button>
        </Popover.Element>
        <Popover.Content>
          <div style={wrapperStyle}>
            <ItemPickerSelector
              fetchItems={fetchItems}
              footer={footer}
              emptyStateComponent={emptyStateComponent}
              itemBuilder={contactItemBuilder}
              onSelect={onSelect}
            />
          </div>
        </Popover.Content>
      </Popover>
    );
  };
}
