import React from "react";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";
import * as styles from "./ItemPickerSelector.story.scss";
import Search from "wix-style-react/Search";
import DropdownLayout from "wix-style-react/DropdownLayout";

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
