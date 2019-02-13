import React from 'react';
import classNames from 'classnames';
import MaterialInput from './MaterialInput';

import styles from './MaterialInput.scss';

class ThemedInput extends MaterialInput {
  render() {
    const {
      id,
      size,
      dataHook,
      title,
      rtl,
      disabled,
      status,
      error,
      placeholder,
      forceHover,
      forceFocus,
      className,
      value,
      withSelection,
    } = this.props;

    let hasError = status === MaterialInput.StatusError;

    // Check for deprecated fields and use them if provided
    if (error) {
      hasError = true;
    }

    const classes = {
      [styles.rtl]: !!rtl,
      [styles.disabled]: disabled,
      [styles.hasError]: hasError,
      [styles.hasHover]: forceHover,
      [styles.hasFocus]: forceFocus || this.state.focus,
      [styles.hasValue]:
        (value && value.length) || (this.input && !!this.input.value),
    };

    return (
      <div
        className={classNames(
          classes,
          styles.root,
          styles[`theme-amaterial`],
          styles[`size-${size}${withSelection ? '-with-selection' : ''}`],
          className,
        )}
        data-hook={dataHook}
      >
        <label className={styles.materialTitle} htmlFor={id}>
          {title}
        </label>
        {super.render({ placeholder })}
        <div className={`${styles.bar} ${styles.barBlue}`} />
      </div>
    );
  }
}

export default ThemedInput;
