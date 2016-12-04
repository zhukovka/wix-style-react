import React from 'react';
import styles from './Input.scss';
import classNames from 'classnames';
import SvgExclamation from '../svg/Exclamation.js';
import MagnifyingGlass from '../svg/MagnifyingGlass.js';

class Input extends React.Component {

  render() {
    const {
      id,
      value,
      forceHover,
      forceFocus,
      placeholder,
      error,
      unit,
      magnifyingGlass,
      defaultValue,
      tabIndex,
      onChange,
      rtl,
      onFocus,
      onBlur,
      onKeyDown
    } = this.props;

    const inputClasses = forceFocus ? styles.focus : (forceHover ? styles.hover : '');

    const exclamation = error ? <SvgExclamation width={2} height={11}/> : null;

    const unitDom = unit ? <div className={styles.unit} onClick={this._focus}>{unit}</div> : null;

    const magnifyingGlassDom = magnifyingGlass && !error ?
      <div className={styles.magnifying_glass} onClick={this._focus}><MagnifyingGlass alignLeft={!rtl}/></div> : null;

    const classes = classNames({
      [styles.input]: true,
      [styles.rtl]: !!rtl,
      [styles.error]: !!error,
      [styles.endpadding]: !!magnifyingGlass || !!error,
      [styles.inputWithUnit]: !!unit
    });

    return (
      <div className={classes} onDoubleClick={this._onDoubleClickMargin} id={id} >
        {unitDom}
        <input
          ref="input"
          className={inputClasses}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          onDoubleClick={this._onDoubleClick}
          placeholder={placeholder}
          tabIndex={tabIndex}
          />

        {exclamation}

        {magnifyingGlassDom}

      </div>
    );
  }
}

Input.displayName = 'Input';

Input.propTypes = {
  id: React.PropTypes.string,
  value: React.PropTypes.string,
  forceHover: React.PropTypes.bool,
  forceFocus: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
  error: React.PropTypes.bool,
  unit: React.PropTypes.string,
  defaultValue: React.PropTypes.string,
  tabIndex: React.PropTypes.number,
  magnifyingGlass: React.PropTypes.bool,
  rtl: React.PropTypes.bool,
  onChange: React.PropTypes.func,
  onBlur: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  onKeyDown: React.PropTypes.func
};

export default Input;
