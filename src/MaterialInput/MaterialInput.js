import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MaterialInputSuffix, {
  getVisibleSuffixCount,
} from './MaterialInputSuffix';
import deprecationLog from '../utils/deprecationLog';

import styles from './MaterialInput.scss';

import { InputContext } from '../Input/InputContext';

class MaterialInput extends Component {
  static StatusError = 'error';
  static StatusLoading = 'loading';

  state = {
    focus: false,
  };

  constructor(props) {
    super(props);
    this.logDeprecations(props);
  }

  componentDidMount() {
    const { autoFocus, value } = this.props;

    if (autoFocus) {
      this._onFocus();
      // Multiply by 2 to ensure the cursor always ends up at the end;
      // Opera sometimes sees a carriage return as 2 characters.
      value && this.input.setSelectionRange(value.length * 2, value.length * 2);
    }
  }

  onCompositionChange = isComposing => {
    if (this.props.onCompositionChange) {
      this.props.onCompositionChange(isComposing);
    }

    this.isComposing = isComposing;
  };

  logDeprecations(props) {
    if (props.help) {
      deprecationLog(
        `Input's help prop is deprecated and will be removed in the next major release, please '<FormField infoContent="content"><Input /></FormField>'  instead`,
      );
    }
  }

  render(props = {}) {
    const {
      id,
      name,
      value,
      help,
      placeholder,
      helpMessage,
      defaultValue,
      tabIndex,
      autoFocus,
      onKeyUp,
      onPaste,
      readOnly,
      prefix,
      suffix,
      type,
      maxLength,
      textOverflow,
      theme,
      disabled,
      status,
      statusMessage,
      autocomplete,
      required,
      error,
      errorMessage,
    } = this.props;

    let suffixStatus = status;
    let suffixStatusMessage =
      statusMessage && statusMessage !== '' ? statusMessage : '';

    // Check for deprecated fields and use them if provided
    if (error) {
      suffixStatus = MaterialInput.StatusError;
      suffixStatusMessage = errorMessage;
    }

    const hasErrors = suffixStatus === MaterialInput.StatusError;

    const visibleSuffixCount = getVisibleSuffixCount({
      status: suffixStatus,
      statusMessage: suffixStatusMessage,
      disabled,
      help,
      suffix,
    });

    const inputClassNames = classNames(styles.input, {
      [styles.withPrefix]: !!prefix,
      [styles.withSuffix]: visibleSuffixCount,
      [styles.withSuffixes]: visibleSuffixCount > 1,
    });

    const ariaAttribute = {};
    Object.keys(this.props)
      .filter(key => key.startsWith('aria'))
      .map(
        key =>
          (ariaAttribute['aria-' + key.substr(4).toLowerCase()] = this.props[
            key
          ]),
      );

    /* eslint-disable no-unused-vars */
    const { className, ...inputElementProps } = props;

    const inputElement = (
      <input
        data-hook="wsr-input"
        style={{ textOverflow }}
        ref={input => (this.input = input)}
        className={inputClassNames}
        id={id}
        name={name}
        disabled={disabled}
        defaultValue={defaultValue}
        value={value}
        onChange={this._onChange}
        onKeyPress={this._onKeyPress}
        maxLength={maxLength}
        onFocus={this._onFocus}
        onBlur={this._onBlur}
        onKeyDown={this._onKeyDown}
        onDoubleClick={this._onDoubleClick}
        onPaste={onPaste}
        placeholder={placeholder}
        tabIndex={tabIndex}
        autoFocus={autoFocus}
        onClick={this._onClick}
        onKeyUp={onKeyUp}
        readOnly={readOnly}
        type={type}
        required={required}
        autoComplete={autocomplete}
        onCompositionStart={() => this.onCompositionChange(true)}
        onCompositionEnd={() => this.onCompositionChange(false)}
        {...ariaAttribute}
        {...inputElementProps}
      />
    );

    return (
      <div className={styles.inputWrapper}>
        {inputElement}
        <InputContext.Provider value={{ ...this.props, inSuffix: true }}>
          {visibleSuffixCount > 0 && (
            <MaterialInputSuffix
              status={suffixStatus}
              statusMessage={suffixStatusMessage}
              theme={theme}
              disabled={disabled}
              help={help}
              helpMessage={helpMessage}
              errorMessage={errorMessage}
              focused={this.state.focus}
              suffix={suffix}
            />
          )}
        </InputContext.Provider>
      </div>
    );
  }

  focus = (options = {}) => {
    this._onFocus();
    this.input && this.input.focus(options);
  };

  blur = () => {
    this.input && this.input.blur();
  };

  select = () => {
    this.input && this.input.select();
  };

  _onFocus = e => {
    this.setState({ focus: true });
    this.props.onFocus && this.props.onFocus(e);

    if (this.props.autoSelect) {
      // Set timeout is needed here since onFocus is called before react
      // gets the reference for the input (specifically when autoFocus
      // is on. So setTimeout ensures we have the ref.input needed in select)
      setTimeout(() => {
        /**
         here we trying to cover edge case with chrome forms autofill,
         after user will trigger chrome form autofill, onFocus will be called for each input,
         each input will cause this.select, select may(mostly all time) cause new onFocus,
         which will cause new this.select, ..., we have recursion which will all time randomly cause
         inputs to become focused.
         To prevent this, we check, that current input node is equal to focused node.
         */
        if (document && document.activeElement === this.input) {
          this.select();
        }
      }, 0);
    }
  };

  _onBlur = e => {
    this.setState({ focus: false });
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  };

  _onClick = e => {
    this.props.onInputClicked && this.props.onInputClicked(e);
  };

  _onKeyDown = e => {
    if (this.isComposing) {
      return;
    }

    this.props.onKeyDown && this.props.onKeyDown(e);

    if (e.keyCode === 13 /* enter */) {
      this.props.onEnterPressed && this.props.onEnterPressed(e);
    } else if (e.keyCode === 27 /* esc */) {
      this.props.onEscapePressed && this.props.onEscapePressed(e);
    }
  };

  _isInvalidNumber = value =>
    this.props.type === 'number' && !/^[\d.,\-+]*$/.test(value);

  _onChange = e => {
    if (this._isInvalidNumber(e.target.value)) {
      return;
    }

    this.props.onChange && this.props.onChange(e);
  };

  _onKeyPress = e => {
    if (this._isInvalidNumber(e.key)) {
      e.preventDefault();
    }
  };
}

MaterialInput.displayName = 'MaterialInput';

MaterialInput.defaultProps = {
  autoSelect: true,
  size: 'normal',
  theme: 'normal',
  statusMessage: '',
  errorMessage: '',
  helpMessage: '',
  roundInput: false,
  textOverflow: 'clip',
  maxLength: 524288,
  withSelection: false,
  clearButton: false,
  title: 'Label Text',
};

MaterialInput.propTypes = {
  ariaControls: PropTypes.string,
  ariaDescribedby: PropTypes.string,
  ariaLabel: PropTypes.string,

  /** Standard React Input autoFocus (focus the element on mount) */
  autoFocus: PropTypes.bool,

  /** Standard React Input autoSelect (select the entire text of the element on focus) */
  autoSelect: PropTypes.bool,

  /** Sets value of autocomplete attribute (consult the [HTML spec](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-autocomplete) for possible values  */
  autocomplete: PropTypes.string,

  /** Specifies a data-hook for tests */
  dataHook: PropTypes.string,

  /** Default value for those who wants to use this component un-controlled */
  defaultValue: PropTypes.string,

  /** when set to true this component is disabled */
  disabled: PropTypes.bool,
  //
  /** Input status - use to display an status indication for the user. for example: 'error' or 'loading' */
  status: PropTypes.oneOf([
    MaterialInput.StatusError,
    MaterialInput.StatusLoading,
  ]),

  /** The status (error/loading) message to display when hovering the status icon, if not given or empty there will be no tooltip */
  statusMessage: PropTypes.node,

  /** Is input has errors
   * @deprecated
   * @see status
   */
  error: PropTypes.bool,

  /** Error message to display
   * @deprecated
   * @see statusMessage
   */
  errorMessage: PropTypes.node,

  forceFocus: PropTypes.bool,
  forceHover: PropTypes.bool,

  /** Adding a suffix help icon */
  help: PropTypes.bool,

  /** The help message to display when hovering the help icon, if not given or empty there will be no tooltip */
  helpMessage: PropTypes.node,
  id: PropTypes.string,

  /** Input max length */
  maxLength: PropTypes.number,

  /** Should the component include a menu arrow */
  menuArrow: PropTypes.bool,

  /** Displays clear button (X) on a non-empty input */
  clearButton: PropTypes.bool,

  /** A single CSS class name to be appended to ther Input's wrapper element. */
  className: PropTypes.string,

  name: PropTypes.string,

  /** Standard input onBlur callback */
  onBlur: PropTypes.func,

  /** Standard input onChange callback */
  onChange: PropTypes.func,

  /** Displays clear button (X) on a non-empty input and calls callback with no arguments */
  onClear: PropTypes.func,
  onCompositionChange: PropTypes.func,

  /** Called when user presses -enter- */
  onEnterPressed: PropTypes.func,

  /** Called when user presses -escape- */
  onEscapePressed: PropTypes.func,

  /** Standard input onFocus callback */
  onFocus: PropTypes.func,

  /** Standard input onClick callback */
  onInputClicked: PropTypes.func,

  /** Standard input onKeyDown callback */
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,

  /** called when user pastes text from clipboard (using mouse or keyboard shortcut) */
  onPaste: PropTypes.func,

  /** onShow prop for the error and help tooltips (supported only for amaterial theme for now) */
  onTooltipShow: PropTypes.func,

  /** Placeholder to display */
  placeholder: PropTypes.string,

  /** Component you want to show as the prefix of the input */
  prefix: PropTypes.node,

  /** Sets the input to readOnly */
  readOnly: PropTypes.bool,

  /** Flip the magnify glass image so it be more suitable to rtl */
  rtl: PropTypes.bool,

  /** Specifies the size of the input */
  size: PropTypes.oneOf(['small', 'normal', 'large']),

  /** Component you want to show as the suffix of the input */
  suffix: PropTypes.node,

  /** Standard component tabIndex */
  tabIndex: PropTypes.number,

  /** Text overflow behaviour */
  textOverflow: PropTypes.string,

  /** The material design style floating label for input (supported only for amaterial theme for now) */
  title: PropTypes.string,

  /** Placement of the error and help tooltips (supported only for amaterial theme for now) */
  tooltipPlacement: PropTypes.string,
  type: PropTypes.string,

  /** Inputs value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  withSelection: PropTypes.bool,
  required: PropTypes.bool,
};

export default MaterialInput;
