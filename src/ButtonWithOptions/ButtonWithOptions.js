import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

import WixComponent from '../BaseComponents/WixComponent';
import DropdownLayout from '../DropdownLayout/DropdownLayout';
import Button from '../Button';
import {ArrowDownThin} from '../Icons';

/**
 * A simple dropdown with button trigger
 *
 * Composed of special `children`:
 * * `<ButtonWithOptions.Button>` - the Button component to be used
 * * `<ButtonWithOptions.Option>` - an option to be used for the dropdown - must contain an id
 */
class ButtonWithOptions extends WixComponent {
  constructor(props) {
    super(props);

    this.state = {showOptions: false, selectedId: props.selectedId};

    if (props.children) {
      this.sortChildren(props);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.sortChildren(nextProps);
  }

  sortChildren(props) {
    [this.buttonElement, ...this.optionsElement] = React.Children.toArray(props.children);
  }

  cleanOptionToSimpleTextForm(children) {
    const supportedElements = ['string', 'span'];
    if (typeof children === 'string') {
      return children;
    }

    children = Array.isArray(children) ? children : [children];

    const filteredChildren = children.filter(child => supportedElements.includes(child.type || typeof child));

    return filteredChildren;
  }

  getSelectedOptionValue() {
    const {children} = this.buttonElement.props;
    const {selectedId} = this.state;
    const {theme} = this.props;

    if (theme.indexOf('no-border') === -1 || selectedId < 0) {
      return children;
    }

    const childrenArr = React.Children.toArray(this.props.children);
    const selectedOption = childrenArr.find(({props: {id}}) => id === selectedId);

    return [
      this.cleanOptionToSimpleTextForm(selectedOption.props.children),
      <span key={1} style={{marginLeft: '10px'}}>
        <ArrowDownThin size="10px"/>
      </span>
    ];
  }

  renderButton() {
    return React.cloneElement(this.buttonElement, {
      onClick: this.showOptions,
      children: this.getSelectedOptionValue(),
      theme: this.props.theme
    });
  }

  renderDropdownLayout() {
    const dropdownProps = omit(this.props, ['dataHook', 'restrainDropdownSize']);

    const dropdownLayoutOptions = React.Children.map(this.optionsElement, option => {
      const {children: value, ...rest} = option.props;
      return {value, ...rest};
    });

    return (
      <DropdownLayout
        {...dropdownProps}
        dataHook="buttonWithOptions-dropdownLayout"
        options={dropdownLayoutOptions}
        theme={this.props.theme}
        visible={this.state.showOptions}
        onSelect={(option, isSelectedOption) => {
          this.setState({selectedId: option.id});
          this.onSelect(option, isSelectedOption);
        }}
        onClickOutside={this.hideOptions}
        />
    );
  }

  render() {
    const {dropDirectionUp} = this.props;
    const sizeRestrictionStyles = this.props.restrainDropdownSize ? {display: 'inline-block'} : {};

    return (
      <div style={sizeRestrictionStyles}>
        {dropDirectionUp ? this.renderDropdownLayout() : null}
        {this.renderButton()}
        {!dropDirectionUp ? this.renderDropdownLayout() : null}
      </div>
    );
  }

  hideOptions = () => this.setState({showOptions: false});

  showOptions = () => this.setState({showOptions: true});

  onSelect = (option, isSelectedOption) => {
    this.hideOptions();

    if (!isSelectedOption) {
      this.props.onSelect(option);
    }
  }
}

ButtonWithOptions.defaultProps = {
  ...DropdownLayout.defaultProps,
  onSelect: () => {},
  restrainDropdownSize: true,
  theme: Button.defaultProps.theme
};

ButtonWithOptions.propTypes = {
  ...DropdownLayout.propTypes,
  restrainDropdownSize: PropTypes.bool,

  /**
   * First children must be `<ButtonWithOptions.Button>` - its children are used as trigger component for dropdown
   *
   * all following children must be `<ButtonWithOptions.Option>` with required `id` prop. These will be displayed in
   * dropdown
   */
  children: PropTypes.arrayOf((propValue, key) => {
    if (key === 0 && propValue[key].type !== ButtonWithOptions.Button) {
      return new Error('ButtonWithOptions: Invalid Prop children, first child must be ButtonWithOptions.Button');
    }

    if (key !== 0) {
      React.Children.forEach(propValue[key], item => {
        if (item.type !== ButtonWithOptions.Option) {
          return new Error(`ButtonWithOptions: Invalid Prop children was given. Validation failed on child number ${key}`);
        }
      });
    }
  })
};

ButtonWithOptions.Option = () => null;
ButtonWithOptions.Option.displayName = 'ButtonWithOptions.Option';

ButtonWithOptions.Button = props =>
  <div data-hook="buttonWithOptions-button-wrapper">
    <Button {...props}/>
  </div>;

ButtonWithOptions.Button.displayName = 'ButtonWithOptions.Button';

export default ButtonWithOptions;

