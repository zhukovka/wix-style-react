import React, {PropTypes} from 'react';
import classnames from 'classnames';

import styles from './Ticker.scss';

const ArrowUp = () =>
  <svg width="10" height="4" viewBox="0 0 10 4" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 4L5 0 1 4" stroke="#3899EC" fill="none" fillRule="evenodd"/>
  </svg>;

const Ticker = ({onUp, onDown, upDisabled, downDisabled}) => {
  const upProps = buildProps(styles.up, onUp, upDisabled);
  const downProps = buildProps(styles.down, onDown, downDisabled);
  return (
    <div className={styles.root} data-hook="ticker">
      <div {...upProps}><ArrowUp/></div>
      <div {...downProps}><ArrowUp/></div>
    </div>
  );
};

Ticker.propTypes = {
  onUp: PropTypes.func,
  onDown: PropTypes.func,
  upDisabled: PropTypes.bool,
  downDisabled: PropTypes.bool
};

function buildProps(clazz, onClick, disabled) {
  return {
    className: classnames(clazz, {
      [styles.disabled]: disabled
    }),
    onClick: disabled ? null : onClick
  };
}

export default Ticker;
