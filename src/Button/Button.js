import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames';

export default function Button(props) {

  const {id, style, hover, active, disabled, height, onClick} = props;
  let {theme} = props; // When deprecation ends. theme should move to const.

  if (style) {
    console.warn('[wix-style-react>Button] Warning. Property \'style\' has been deprecated, and will be removed Jan 1st 2017. Please use \'theme\' instead.');
    theme = style;
  }

  const className = classNames({
    [styles.button]: true,
    [styles[theme]]: true,
    [styles.hover]: hover,
    [styles.active]: active,
    [styles.disabled]: disabled,
    [styles[`height${height}`]]: height !== 'medium'
  });

  const _style = {
    height
  };

  return (
    <button className={className} onClick={onClick} style={_style} id={id} >
      <div className={styles.inner}>
        {props.children}
      </div>
    </button>
  );
}

Button.displayName = 'Button';
Button.defaultProps = {
  theme: 'fullblue',
  height: 'medium'
};

Button.propTypes = {
  id: React.PropTypes.string,
  theme: React.PropTypes.oneOf(['fullblue', 'emptyblue', 'fullpurple', 'emptypurple', 'fullgreen', 'emptygreen', 'fullred', 'emptyred']),
  style: React.PropTypes.oneOf(['fullblue', 'emptyblue', 'fullpurple', 'emptypurple', 'fullgreen', 'emptygreen', 'fullred', 'emptyred']),
  height: React.PropTypes.oneOf(['small', 'medium', 'large']),
  hover: React.PropTypes.bool,
  active: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  children: React.PropTypes.any
};
