import React, {Component} from 'react';
import classNames from 'classnames';

import InputPrefix from './InputPrefix';
import InputSuffix from './InputSuffix';

import styles from './Input.scss';

class Input extends Component {

  constructor(params) {
    super(params);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
    this.select = this.select.bind(this);
  }

  state = {
    focus: false
  }

  render() {
    const {
      id,
      style,
      value,
      forceHover,
      forceFocus,
      placeholder,
      error,
      unit,
      magnifyingGlass,
      menuArrow,
      defaultValue,
      tabIndex,
      onChange,
      onClear,
      rtl,
      autoFocus,
      onKeyUp,
      readOnly,
      size,
      dataHook,
      iconLeft
    } = this.props;

    let {theme} = this.props; // When deprecation ends. theme should move to const.

    if (style) {
      console.warn('[wix-style-react>Input] Warning. Property \'style\' has been deprecated, and will be removed Jan 1st 2017. Please use \'theme\' instead.');
      theme = style;
    }

    const classes = classNames({
      [styles.root]: true,
      [styles[`theme-${theme}`]]: true,
      [styles[`size-${size}`]]: true,
      [styles.rtl]: !!rtl,
      [styles.hasError]: !!error,
      [styles.hasHover]: forceHover,
      [styles.hasFocus]: forceFocus || this.state.focus
    });

    const myAttr = {'data-hook': dataHook};

    return (
      <div className={classes} {...myAttr}>
        <InputPrefix>{iconLeft}</InputPrefix>
        <input
          ref={input => this.input = input}
          className={styles.input}
          id={id}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          onFocus={this._onFocus}
          onBlur={this._onBlur}
          onKeyDown={this._onKeyDown}
          onDoubleClick={this._onDoubleClick}
          placeholder={placeholder}
          tabIndex={tabIndex}
          autoFocus={autoFocus}
          onKeyUp={onKeyUp}
          readOnly={readOnly}
          />
        <InputSuffix
          value={value}
          error={error}
          unit={unit}
          magnifyingGlass={magnifyingGlass}
          menuArrow={menuArrow}
          rtl={rtl}
          onClear={onClear}
          onFocus={this.focus}
          />
        {theme === 'material' && <div className={styles.bar}/>}
      </div>
    );
  }

  focus() {
    this.input && this.input.focus();
  }

  blur() {
    this.input && this.input.blur();
  }

  select() {
    this.input && this.input.select();
  }

  _onFocus() {
    this.setState({focus: true});
    this.props.onFocus && this.props.onFocus();

    if (this.props.autoSelect) {
      // Set timeout is needed here since onFocus is called before react
      // gets the reference for the input (specifically when autoFocus
      // is on. So setTimeout ensures we have the ref.input needed in select)
      setTimeout(() => this.select(), 0);
    }
  }

  _onBlur(e) {
    this.setState({focus: false});
    this.props.onBlur && this.props.onBlur(e);
  }

  _onKeyDown(e) {
    this.props.onKeyDown && this.props.onKeyDown(e);

    if (e.keyCode === 13 /* enter */) {
      this.props.onEnterPressed && this.props.onEnterPressed();
    } else if (e.keyCode === 27 /* esc */) {
      this.props.onEscapePressed && this.props.onEscapePressed();
    }
  }
}

Input.displayName = 'Input';

Input.defaultProps = {
  theme: 'normal',
  size: 'normal'
};

Input.propTypes = {
  id: React.PropTypes.string,
  value: React.PropTypes.string,
  style: React.PropTypes.oneOf(['normal', 'paneltitle', 'material']),
  theme: React.PropTypes.oneOf(['normal', 'paneltitle', 'material']),
  forceHover: React.PropTypes.bool,
  forceFocus: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
  error: React.PropTypes.bool,
  unit: React.PropTypes.string,
  defaultValue: React.PropTypes.string,
  tabIndex: React.PropTypes.number,
  magnifyingGlass: React.PropTypes.bool,
  menuArrow: React.PropTypes.bool,
  rtl: React.PropTypes.bool,
  autoFocus: React.PropTypes.bool,
  autoSelect: React.PropTypes.bool,
  onChange: React.PropTypes.func,
  onClear: React.PropTypes.func,
  onBlur: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  onEscapePressed: React.PropTypes.func,
  onEnterPressed: React.PropTypes.func,
  onKeyDown: React.PropTypes.func,
  onKeyUp: React.PropTypes.func,
  iconLeft: React.PropTypes.object,
  readOnly: React.PropTypes.bool,
  dataHook: React.PropTypes.string,
  size: React.PropTypes.oneOf(['small', 'normal', 'large'])
};

export default Input;
