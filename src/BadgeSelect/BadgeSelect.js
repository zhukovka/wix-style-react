import React from 'react';
import PropTypes from 'prop-types';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';
import style from './BadgeSelect.st.css';

import DropdownLayout from '../DropdownLayout';
import Popover from '../Popover';
import Badge, { SKIN, TYPE, SIZE } from '../Badge';
import { badgeSelectItemBuilder } from '../BadgeSelectItemBuilder';

export default class BadgeSelect extends React.Component {
  static propTypes = {
    /** An array of options. Each option must have a unique `id`, a `text` and a `skin` whose value should match one of `<Badge/>`'s skin values */
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        skin: PropTypes.oneOf(Object.keys(SKIN)).isRequired,
        text: PropTypes.string.isRequired,
      }),
    ),
    /** The id of the selected option in the list */
    selectedId: PropTypes.string,
    /** Callback function called whenever the user selects a different option in the list */
    onSelect: PropTypes.func,
    /** The size of the `<Badge/>` */
    size: PropTypes.oneOf(Object.keys(SIZE)),
    /** The type of the `<Badge/>` */
    type: PropTypes.oneOf(Object.keys(TYPE)),
    /** Whether the text of the `<Badge/>` should be uppercase */
    uppercase: PropTypes.bool,
    dataHook: PropTypes.string,
  };

  static displayName = 'BadgeSelect';

  _isControlled = () => {
    return typeof this.props.selectedId !== 'undefined';
  };

  /**
   * Determine if a certain key should open the DropdownLayout
   *
   * @param {KeyboardEvent.key} key - The key name
   * @return {boolean} - Whether the key should cause the DropdownLayout to open
   */
  _isOpenKey = key => {
    return ['Enter', 'Spacebar', ' ', 'ArrowDown'].includes(key);
  };

  _getBadgeOptionById = (options, wantedId) => {
    return options.find(({ id }) => id === wantedId);
  };

  _handleSelect = ({ id: selectedId }) => {
    const { onSelect, options } = this.props;
    const selectedBadge = this._getBadgeOptionById(options, selectedId);
    const newState = { visible: false };
    if (!this._isControlled()) {
      newState.selectedBadge = selectedBadge;
    }
    this.setState(newState);

    onSelect && onSelect(selectedBadge);
  };

  _onKeyDown = event => {
    // Delegate the event to the DropdownLayout. It'll handle the navigation,
    // option selection and closing of the dropdown.
    const isHandledByDropdownLayout = this.dropdownLayout
      ? this.dropdownLayout._onKeyDown(event)
      : false;

    // If the event wasn't handled by the DropdownLayout correctly, check if
    // the pressed key should open the dropdown and act accordingly.
    if (!isHandledByDropdownLayout) {
      if (this._isOpenKey(event.key)) {
        this.showDropdown();
        event.preventDefault();
      }
    }
  };

  getSelectedOption = props => {
    return (
      this._getBadgeOptionById(props.options, props.selectedId) ||
      props.options[0]
    );
  };

  hideDropdown = () => {
    this.setState({ visible: false });
  };

  showDropdown = () => {
    this.setState({ visible: true });
  };

  toggleDropdown = () => {
    this.setState({ visible: !this.state.visible });
  };

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      selectedBadge: this.getSelectedOption(props),
    };
  }

  get options() {
    const { options } = this.props;
    return Array.isArray(options) ? options.map(badgeSelectItemBuilder) : [];
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedId !== nextProps.selectedId) {
      this.setState({
        selectedBadge: this.getSelectedOption(nextProps),
      });
    }
  }

  render() {
    const { type, size, uppercase, dataHook } = this.props;
    const { visible, selectedBadge } = this.state;

    return (
      <Popover
        shown={visible}
        dataHook={dataHook}
        placement="bottom"
        onKeyDown={this._onKeyDown}
        onClickOutside={this.hideDropdown}
        {...style('root', {}, this.props)}
      >
        <Popover.Element>
          <Badge
            ref={badge => (this.badge = badge)}
            type={type}
            size={size}
            uppercase={uppercase}
            suffixIcon={<ChevronDown viewBox="6 6 12 12" />}
            skin={this.state.selectedBadge.skin}
            onClick={this.toggleDropdown}
          >
            {this.state.selectedBadge.text}
          </Badge>
        </Popover.Element>

        <Popover.Content>
          <DropdownLayout
            ref={r => (this.dropdownLayout = r)}
            dataHook="badgeSelect-dropdownLayout"
            visible
            selectedId={selectedBadge.id}
            options={this.options}
            onSelect={this._handleSelect}
            onClose={this.hideDropdown}
            inContainer
          />
        </Popover.Content>
      </Popover>
    );
  }
}
