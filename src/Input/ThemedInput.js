import React from 'react';
import classNames from 'classnames';
import Input from './Input';
import Label from '../Label';

import styles from './Input.scss';

class ThemedInput extends Input {
  render() {
    const {
      id,
      size,
      dataHook,
      title,
      theme,
      rtl,
      disabled,
      error,
      forceHover,
      forceFocus,
      roundInput,
      noLeftBorderRadius,
      noRightBorderRadius,
      value
    } = this.props;

    const classes = {
      [styles.rtl]: !!rtl,
      [styles.disabled]: disabled,
      [styles.hasError]: !!error,
      [styles.hasHover]: forceHover,
      [styles.hasFocus]: forceFocus || this.state.focus,
      [styles.roundInput]: roundInput,
      [styles.hasValue]: (value && value.length) || (this.input && !!this.input.value),
      [noRightBorderRadius]: noRightBorderRadius,
      [noLeftBorderRadius]: noLeftBorderRadius,
    };

    return (
      <div
        className={classNames(classes, styles.root, styles[`theme-${theme}`], styles[`size-${size}`])}
        data-hook={dataHook}
        >
        {(theme === 'amaterial') && <Label for={id}>{title}</Label>}
        {super.render()}
        {(theme === 'material') && <div className={`${styles.bar} ${styles.barBlack}`}/>}
        {(theme === 'amaterial') && <div className={`${styles.bar} ${styles.barBlue}`}/>}
      </div>
    );
  }
}

export default ThemedInput;
