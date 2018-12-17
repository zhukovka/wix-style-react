import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip/Tooltip';
import Search from '../Search/Search';
import DropdownLayout from '../DropdownLayout/DropdownLayout';
import WixComponent from "../BaseComponents/WixComponent";
import { dataHooks } from "./ItemPickerSelectorDataHooks";
import debounce from 'lodash/debounce';
import * as styles from './ItemPickerSelector.scss';

export class ItemPickerSelector extends WixComponent {
  constructor(props) {
    super(props);
    this.state = { items: [], inputText: '', isFetching: false };
  }

  static propTypes = {
    button: PropTypes.any,
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

  searchComponent = () =>
    <div className={styles.searchWrapper}>
      <Search
        dataHook={dataHooks.search}
        className={styles.search}
        onChange={inputText => this.onChange(inputText)}
        placeholder={'Search...'}
        value={this.state.inputText}
      />
    </div>;
      
  render = () =>
    this.isEmpty() ?
      this.props.emptyStateComponent
      :
      <DropdownLayout
        dataHook={dataHooks.itemsDropdown}
        className={styles.pickerDropdown}
        options={this.state.items.map(this.props.itemBuilder)}
        fixedHeader={this.searchComponent()}
        fixedFooter={this.props.footer}
        onSelect={item => this.onSelectedItem({ id: item.id })}
        inContainer
        visible
      />;
}
