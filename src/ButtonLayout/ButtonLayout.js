import React from 'react';
import styles from './ButtonLayout.scss';
import classNames from 'classnames';

const ButtonLayout = props => {
  const {theme, hover, active, disabled, height, children} = props;

  const className = classNames({
    [styles.button]: true,
    [styles[theme]]: true,
    [styles.hover]: hover,
    [styles.active]: active,
    [styles.disabled]: disabled,
    [styles[`height${height}`]]: height !== 'medium'
  }, children.props.className);

  const _style = Object.assign({},
    children.props.style,
    {
      height,
      display: 'inline-block'
    }
  );

  if (React.Children.count(children) === 1) {
    return React.cloneElement(
      children,
      {className, style: _style},
      <div className={styles.inner}>
        {children.props.children}
      </div>
    );
  }
};

ButtonLayout.defaultProps = {
  theme: 'fullblue',
  height: 'medium'
};

ButtonLayout.propTypes = {
  theme: React.PropTypes.oneOf([
    'transparent',
    'fullred',
    'fullgreen',
    'fullpurple',
    'emptyred',
    'emptygreen',
    'emptybluesecondary',
    'emptyblue',
    'emptypurple',
    'fullblue',
    'transparentblue',
    'whiteblue',
    'whiteblueprimary',
    'whitebluesecondary',
    'close-standard',
    'close-dark',
    'close-transparent',
    'icon-greybackground',
    'icon-standard',
    'icon-standardsecondary',
    'icon-white',
    'icon-whitesecondary'
  ]),
  height: React.PropTypes.oneOf(['small', 'medium', 'large']),
  hover: React.PropTypes.bool,
  active: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  children: React.PropTypes.any,
};

ButtonLayout.displayName = 'ButtonLayout';

export default ButtonLayout;
