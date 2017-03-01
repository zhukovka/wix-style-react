import React from 'react';
import styles from './Button.scss';
import WixComponent from '../WixComponent';
import ButtonLayout from '../ButtonLayout/ButtonLayout';
import omit from 'lodash.omit';

class Button extends WixComponent {

  constructor(props) {
    super(props);
    this.addPrefix = this.addPrefix.bind(this);
    this.addSuffix = this.addSuffix.bind(this);
    this.addIcon = this.addIcon.bind(this);
  }

  addIcon(className, icon, height) {
    const iconSize = height === 'small' ? '8px' : height === 'medium' ? '12px' : '16px';
    return (
      icon ?
        <div className={className}>
          {React.cloneElement(icon, {size: iconSize})}
        </div> :
        null
    );
  }

  addPrefix() {
    return this.addIcon(styles.prefix, this.props.prefixIcon, this.props.height);
  }

  addSuffix() {
    return this.addIcon(styles.suffix, this.props.suffixIcon, this.props.height);
  }

  render() {
    const {disabled, onClick, children, type} = this.props;
    const buttonLayoutProps = omit(this.props, ['id', 'onClick', 'prefixIcon', 'suffixIcon', 'type']);

    return (
      <ButtonLayout {...buttonLayoutProps}>
        <button onClick={onClick} disabled={disabled} type={type}>
          {this.addPrefix()}
          {children}
          {this.addSuffix()}
        </button>
      </ButtonLayout>
    );
  }
}

Button.defaultProps = ButtonLayout.defaultProps;

Button.propTypes = Object.assign({},
  ButtonLayout.propTypes,
  {
    id: React.PropTypes.string,
    onClick: React.PropTypes.func,
    children: React.PropTypes.any,
    prefixIcon: React.PropTypes.node,
    suffixIcon: React.PropTypes.node,
    type: React.PropTypes.string
  }
);

Button.displayName = 'Button';

export default Button;
