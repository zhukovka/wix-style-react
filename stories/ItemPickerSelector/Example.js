import React from 'react';
import PropTypes from 'prop-types';

import debounce from 'lodash/debounce';

import * as styles from './ItemPickerSelector.story.scss';

import { contactItemBuilder } from "wix-style-react/ContactItemBuilder";
import Search from 'wix-style-react/Search';
import DropdownLayout from 'wix-style-react/DropdownLayout';
import WixComponent from "wix-style-react/WixComponent";
import EmptyState from "wix-style-react/EmptyState";
import Text from "wix-style-react/Text";
import Add from "wix-style-react/Add";
import TextLink from "wix-style-react/TextLink";

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

  componentWillMount() {
    this.queryItems();
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

  onChange = inputText => {
    inputText = inputText.target.value;
    this.setState({
      inputText,
    });

    this.debouncedQueryItems(inputText);
  };

  isEmpty = () => !this.state.items.length;

  render = () =>
    this.isEmpty() ?
      this.props.emptyStateComponent
      :
      <div>
        <div className={styles.searchWrapper}>
          <Search
            className={styles.search}
            onChange={inputText => this.onChange(inputText)}
            placeholder={'Search...'}
            value={this.state.inputText}
          />
        </div>
        <DropdownLayout
          className={styles.pickerDropdown}
          options={this.state.items.map(this.props.itemBuilder)}
          fixedFooter={this.props.footer}
          onSelect={item => this.onSelectedItem({ id: item.id })}
          inContainer
          visible
        />
      </div>;
}


export class Example extends React.Component {
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

    const emptyStateComponent =
      <div>
        <EmptyState
          dataHook={'empty-message'}
          title="No contacts found."
          subtitle={
            <Text>
              Add or import contacts <a href="http://wwww.wix.com"> Learn more </a>
            </Text>
          }
        >
          <TextLink prefixIcon={<Add/>}>Add Contact</TextLink>
        </EmptyState>
      </div>;


    const footer =
      <div>
        <TextLink prefixIcon={<Add/>}>
          Add Contact
        </TextLink>
      </div>;

    const onSelect = item => item + ' selected!';

    return <ItemPickerSelector
      fetchItems={fetchItems}
      footer={footer}
      emptyStateComponent={emptyStateComponent}
      itemBuilder={contactItemBuilder}
      onSelect={onSelect}
    />
  }
}
