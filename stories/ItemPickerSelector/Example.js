import React from 'react';
import PropTypes from "prop-types";
import debounce from "lodash/debounce";

import { contactItemBuilder } from "wix-style-react/ContactItemBuilder";
import EmptyState from "wix-style-react/EmptyState";
import Popover from "wix-style-react/Popover";
import Text from "wix-style-react/Text";
import TextButton from "wix-style-react/TextButton";
import Button from "wix-style-react/Button";
import Search from "wix-style-react/Search";
import DropdownLayout from "wix-style-react/DropdownLayout";
import Add from "wix-ui-icons-common/dist/src/general/dist/components/Add";

export class ItemPickerSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], inputText: '', isFetching: false };
  }

  static propTypes = {
    fetchItems: PropTypes.any,
    emptyStateComponent: PropTypes.any,
    itemBuilder: PropTypes.func,
    footer: PropTypes.any,
    onSelect: PropTypes.func,
  };

  componentDidMount() {
    this.debouncedQueryItems();
  }

  onSelectedItem = ({ id }) => {
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      inputText: selectedItem.title,
    });
    this.props.onSelect(selectedItem);
  };

  queryItems = (query = '') => {
    this.props.fetchItems({ query }).then(items => {
      this.setState({ items });
    });
  };

  debouncedQueryItems = debounce(this.queryItems, 300);

  onChange = event => {
    event = event.target.value;
    this.setState({
      inputText: event,
    });

    this.debouncedQueryItems(event);
  };

  isEmpty = () => !this.state.items.length;

  render = () => {
    const styles = {
      searchWrapper: {
        'padding': '18px 20px 14px 18px'
      },
      search: {
        'margin': 'auto 0',
      },
    };

    return (
      <div>
        <div style={styles.searchWrapper}>
          <Search
            style={styles.search}
            onChange={this.onChange}
            placeholder={'Search...'}
            value={this.state.inputText}
          />
        </div>
        {this.isEmpty() ?
          this.props.emptyStateComponent
          :
          <DropdownLayout
            options={this.state.items.map(this.props.itemBuilder)}
            fixedFooter={this.props.footer}
            onSelect={item => this.onSelectedItem({ id: item.id })}
            inContainer
            visible
          />}
      </div>
    );
  }
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shown: false }
  }

  toggle() {
    this.setState(({ shown }) => ({ shown: !shown }));
  }

  render = () => {

    const fetchItems = ({ query }) => {
      const items = [
        {
          id: 0,
          title: 'Title with image',
          subtitle: 'subtitle with image',
          imageUrl: 'https://randomuser.me/api/portraits/women/39.jpg'
        },
        { id: 1, title: 'No image title', subtitle: 'No image subtitle' },
        { id: 2, title: 'No subtitle item' },
      ];
      if (query === '') {
        return Promise.resolve(items);
      } else {
        return Promise.resolve(items.filter(x => x.title.toLowerCase().includes(query.toLowerCase())));
      }
    };

    const emptyStateStyle = {'margin' : 'auto 0'};

    const emptyStateComponent =
      <div style={emptyStateStyle}>
        <EmptyState
          dataHook={'empty-message'}
          title="No contacts found."
          subtitle={
            <Text>
              Add or import contacts <a href="http://wwww.wix.com"> Learn more </a>
            </Text>
          }
        >
          <TextButton prefixIcon={<Add/>}>Add Contact</TextButton>
        </EmptyState>
      </div>;

    const footer =
      <div>
        <TextButton prefixIcon={<Add/>}>
          Add Contact
        </TextButton>
      </div>;

    const onSelect = item => item + ' selected!';

    const wrapperStyle = {
      'width': '331px',
      'height': '311px',
      'border': '1px #C1E4FE solid',
    };


    return <Popover
      onClick={() => this.toggle()}
      shown={this.state.shown}
      appendTo="window"
      placement="top"
      showArrow
      timeout={150}
    >
      <Popover.Element>
        <Button>toggle contact picker</Button>
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
  }
}
