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
    fetchItems: PropTypes.func,
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
      this.setState({ items: items });
    });
  };


  onChange = inputText => {
    inputText = inputText.target.value;
    this.setState({
      inputText: inputText,
    });

    debounce(this.queryItems, 300);
  };

  displayItem = item => {
    return this.props.itemBuilder(item);
  };

  isEmpty = () => !this.state.items.length;

  pickerDropdown = () => (
    <DropdownLayout
      dataHook={dataHooks.itemsDropdown}
      className={styles.pickerDropdown}
      options={this.state.items.map(this.displayItem)}
      fixedFooter={this.props.footer}
      onSelect={item => this.onSelectedItem({ id: item.id })}
      inContainer
      visible
    />
  );

  renderContent = () =>
    <span data-hook={dataHooks.itemPickerContent} className={styles.picker}>
      <div className={styles.searchWrapper}>
        <Search
          dataHook={dataHooks.search}
          className={styles.search}
          onChange={inputText => this.onChange(inputText)}
          placeholder={'Search...'}
          value={this.state.inputText}
        />
      </div>
      {this.isEmpty() ? this.props.emptyStateComponent : this.pickerDropdown()}
    </span>;

  render = () =>
    <Tooltip
      dataHook={dataHooks.itemPicker}
      placement={'bottom'}
      alignment="left"
      minWidth="331px"
      popover
      content={this.renderContent()}
    >
      {this.props.button}
    </Tooltip>;
}
