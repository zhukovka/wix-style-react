import React from 'react';
import * as styles from './MessageBoxLayout2.scss';
import {HeaderLayout1, FooterLayout1} from './';

const MessageBoxLayout2 = ({title, onCancel, onOk, confirmText, children, hideFooter, cancelText, style, theme}) => {
  //TODO When deprecation ends, _theme won't be needed.
  const _theme = theme || style;

  if (style) {
    console.warn('[wix-style-react>MessageBoxLayout2] Warning. Property \'style\' has been deprecated, and will be removed Jan 1st 2017. Please use \'theme\' instead.');
  }

  return (
    <div className={styles.content}>
      <HeaderLayout1 title={title} onCancel={onCancel} theme={_theme}/>
      <div className={styles.body} >
        {children}
      </div>
      {
        !hideFooter ?
          <FooterLayout1 confirmText={confirmText} cancelText={cancelText} onCancel={onCancel} onOk={onOk} theme={_theme}/> : null
      }
    </div>
  );
};

MessageBoxLayout2.propTypes = {
  hideFooter: React.PropTypes.bool,
  confirmText: React.PropTypes.string,
  cancelText: React.PropTypes.string,
  style: React.PropTypes.string,
  theme: React.PropTypes.string,
  onOk: React.PropTypes.func,
  onCancel: React.PropTypes.func,
  title: React.PropTypes.node,
  children: React.PropTypes.any
};

export default MessageBoxLayout2;
