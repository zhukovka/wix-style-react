import React from 'react';
import styles from './ButtonHeader.scss';
import classNames from 'classnames';
import Button from '../../../src/Button';
import WixComponent from '../../WixComponent';

class ButtonHeader extends WixComponent {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    buttonTitle: React.PropTypes.string.isRequired,
    buttonOnClick: React.PropTypes.func.isRequired,
    buttonPrefix: React.PropTypes.node,
    buttonSuffix: React.PropTypes.node,
    subtitle: React.PropTypes.string,
    tooltip: React.PropTypes.node,
    theme: React.PropTypes.oneOf([
      'standard',
      'fullblue',
    ]),
    withoutDivider: React.PropTypes.bool,
  };

  static defaultProps = {
    subtitle: null,
    withoutDivider: false,
    buttonPrefix: null,
    tooltip: null,
    theme: 'standard',
    buttonSuffix: null,
  };

  render() {
    const {title, subtitle, buttonOnClick, buttonTitle, buttonPrefix, buttonSuffix, withoutDivider, tooltip, theme} = this.props;

    const headerClasses = classNames({
      [styles.headerOnlyTitle]: !subtitle,
      [styles.headerTitleSubtitle]: subtitle,
      [styles.withDivider]: !withoutDivider,
    });

    const buttonClass = classNames({
      [styles.button]: theme === 'standard',
      [styles.buttonSmall]: theme === 'fullblue'
    });

    const height = theme === 'standard' ? 'medium' : 'small';
    const buttonTheme = theme === 'standard' ? 'whiteblueprimary' : 'fullblue';

    const buttonElement = (
      <div className={buttonClass}>
        <Button
          dataHook="button"
          height={height}
          suffixIcon={buttonSuffix}
          prefixIcon={buttonPrefix}
          onClick={buttonOnClick}
          theme={buttonTheme}
          >
          {buttonTitle}
        </Button>
      </div>
    );

    const tooltipElement = tooltip ? (
        React.cloneElement(tooltip, {}, buttonElement)
      ) : null;

    const actionElement = tooltipElement ? tooltipElement : buttonElement;

    const titleElement = (
      <div data-hook="title" className={styles.title}>
        {title}
      </div>
    );

    const subtitleElement = subtitle ? (
      <div data-hook="subtitle" className={styles.subtitle}>
        {this.props.subtitle}
      </div>
    ) : null;

    return (
      <div className={headerClasses}>
        <div>
          {titleElement}
          {subtitleElement}
        </div>
        {actionElement}
      </div>
    );
  }
}

export default ButtonHeader;
