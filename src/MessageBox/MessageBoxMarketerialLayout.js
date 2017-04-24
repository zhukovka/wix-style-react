import React from 'react';
import WixComponent from '../WixComponent';
import classNames from 'classnames';

import Button from '../Button';
import SvgX from '../svg/X.js';

import * as styles from './MessageBoxMarketerialLayout.scss';

class MessageBoxMarketerialLayout extends WixComponent {

  render() {
    const {title, content, primaryButtonLabel, secondaryButtonLabel, onPrimaryButtonClick, onSecondaryButtonClick, imageUrl, onClose, theme, imageComponent} = this.props;

    const headerClasses = classNames({
      [styles.header]: true,
      [styles[`header-${theme}`]]: true,
    });

    return (
      <div className={styles.root}>
        <div className={headerClasses}>
          <button className={styles.close} onClick={onClose} data-hook="close-button">
            <SvgX width={9} height={9} thickness={1} color={'white'}/>
          </button>
          { imageComponent ?
            <div className={styles.headerImageComponent}>{imageComponent}</div> :
            <div className={styles.headerImage}>
              <img src={imageUrl} data-hook="header-image"/>
            </div>
          }
        </div>
        <div className={styles.title} data-hook="message-box-title">
          {title}
        </div>
        <div className={styles.content}>
          {content}
        </div>
        <div className={styles.buttonsContainer}>
          { primaryButtonLabel ?
            <div className={styles.primaryButtonContainer}>
              <Button theme={`full${theme}`} onClick={onPrimaryButtonClick} dataHook="primary-button">{primaryButtonLabel}</Button>
            </div> : null
          }
          { secondaryButtonLabel ?
            <div className={styles.secondaryButtonContainer}>
              <span onClick={onSecondaryButtonClick} data-hook="secondary-button">
                {secondaryButtonLabel}
              </span>
            </div> : null
          }
        </div>
      </div>
    );
  }
}

MessageBoxMarketerialLayout.propTypes = {
  title: React.PropTypes.node.isRequired,
  content: React.PropTypes.node.isRequired,
  primaryButtonLabel: React.PropTypes.string.isRequired,
  secondaryButtonLabel: React.PropTypes.string,
  onPrimaryButtonClick: React.PropTypes.func,
  onSecondaryButtonClick: React.PropTypes.func,
  imageUrl: React.PropTypes.string,
  onClose: React.PropTypes.func.isRequired,
  imageComponent: React.PropTypes.node,
  theme: React.PropTypes.oneOf([
    'blue',
    'purple'
  ])
};

MessageBoxMarketerialLayout.defaultProps = {
  theme: 'blue'
};

export default MessageBoxMarketerialLayout;
