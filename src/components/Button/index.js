import React from 'react';
import {func, node, string, bool} from 'prop-types';
import WixComponent from '../../BaseComponents/WixComponent';
import {withStyles} from './withStyles';

class Button extends WixComponent {
  static propTypes = {
    children: node,
    prefixIcon: node,
    suffixIcon: node,
    type: string,
    onClick: func,
    onMouseEnter: func,
    onMouseLeave: func,
    disabled: bool
  }

  constructor(props) {
    super(props);
    this.addPrefix = this.addPrefix.bind(this);
    this.addSuffix = this.addSuffix.bind(this);
    this.addIcon = this.addIcon.bind(this);
  }

  addIcon(className, icon, height) {
    const iconSize = height === 'small' ? '8px' : height === 'medium' ? '12px' : '16px';
    const dataHook = className === this.props.wixStyles.prefix ? 'btn-prefix' : 'btn-suffix';

    return (
      icon ?
        <div className={className} data-hook={dataHook}>
          {React.cloneElement(icon, {size: iconSize})}
        </div> :
        null
    );
  }

  addPrefix() {
    const {wixStyles, prefixIcon, height} = this.props;
    return this.addIcon(wixStyles.prefix, prefixIcon, height);
  }

  addSuffix() {
    const {wixStyles, suffixIcon, height} = this.props;
    return this.addIcon(wixStyles.suffix, suffixIcon, height);
  }

  render() {
    const {disabled, onClick, children, type, onMouseEnter, onMouseLeave, wixStyles} = this.props;

    return (
      <button
        className={wixStyles.button}
        onClick={onClick}
        disabled={disabled}
        type={type}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
        {this.addPrefix()}
        {children}
        {this.addSuffix()}
      </button>
    );
  }
}

Button.displayName = 'Button';

export default withStyles(Button);
