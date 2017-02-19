import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames';
import WixComponent from '../WixComponent';

class Button extends WixComponent {

  constructor(props) {
    super(props);
    this.addPrefix = this.addPrefix.bind(this);
    this.addSuffix = this.addSuffix.bind(this);
    this.addIcon = this.addIcon.bind(this);
  }

  addIcon(className, icon) {
    if (icon) {
      return (
        <div className={className}>
          {React.cloneElement(icon, {
            size: this.props.height === 'small' ? '8px' : this.props.height === 'medium' ? '12px' : '16px'
          })}
        </div>
      );
    }
    return '';
  }

  addPrefix() {
    return this.addIcon(styles.prefix, this.props.prefixIcon);
  }

  addSuffix() {
    return this.addIcon(styles.suffix, this.props.suffixIcon);
  }

  render() {
    const {theme, hover, active, disabled, height, onClick, children} = this.props;

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
      <button className={className} onClick={onClick} style={_style} disabled={disabled}>
        <div className={styles.inner}>
          {this.addPrefix()}
          {children}
          {this.addSuffix()}
        </div>
      </button>
    );
  }
}

Button.defaultProps = {
  theme: 'fullblue',
  height: 'medium'
};

Button.propTypes = {
  id: React.PropTypes.string,
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
  onClick: React.PropTypes.func,
  children: React.PropTypes.any,
  prefixIcon: React.PropTypes.node,
  suffixIcon: React.PropTypes.node
};

Button.displayName = 'Button';

export default Button;
