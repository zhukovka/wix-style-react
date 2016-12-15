/* eslint-disable react/style-prop-object */

import React from 'react';
import Button from '../Button';
import * as styles from './MessageBox.scss';
import SvgX from '../svg/X.js';

const MessageBoxLayout1 = ({title, content, primaryButtonLabel, secondaryButtonLabel, onPrimaryButtonClick, onSecondaryButtonClick, imageUrl, onClose}) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <button className={styles.close} onClick={onClose}>
          <SvgX width={9} height={9} thickness={1} color={'white'}/>
        </button>
        <div className={styles.headerImage}>
          <img src={imageUrl}/>
        </div>
      </div>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.content}>
        {content}
      </div>
      <div className={styles.buttonsContainer}>
        { primaryButtonLabel ?
          <div className={styles.primaryButtonContainer}>
            <Button theme="fullblue" onClick={onPrimaryButtonClick}> {primaryButtonLabel} </Button>
          </div> : null
        }
        { secondaryButtonLabel ?
          <div className={styles.secondaryButtonContainer}>
            <span onClick={onSecondaryButtonClick}>
              {secondaryButtonLabel}
            </span>
          </div> : null
        }
      </div>
    </div>
  );
};

MessageBoxLayout1.propTypes = {
  title: React.PropTypes.node.isRequired,
  content: React.PropTypes.node.isRequired,
  primaryButtonLabel: React.PropTypes.string.isRequired,
  secondaryButtonLabel: React.PropTypes.string,
  onPrimaryButtonClick: React.PropTypes.func,
  onSecondaryButtonClick: React.PropTypes.func,
  imageUrl: React.PropTypes.string,
  onClose: React.PropTypes.func.isRequired
};

export default MessageBoxLayout1;
