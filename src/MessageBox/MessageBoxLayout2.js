import React from 'react';
import * as styles from './MessageBoxLayout2.scss';
import {HeaderLayout1, FooterLayout1} from './';

const MessageBoxLayout2 = ({title, onCancel, onOk, confirmText, children, hideFooter, cancelText, style}) => {
  return (
    <div className={styles.content}>
      <HeaderLayout1 title={title} onCancel={onCancel} style={style}/>
      <div className={styles.body} >
        {children}
      </div>
      {
        !hideFooter ?
          <FooterLayout1 confirmText={confirmText} cancelText={cancelText} onCancel={onCancel} onOk={onOk} style={style} /> : null
      }
    </div>
  );
};

MessageBoxLayout2.propTypes = {
  hideFooter: React.PropTypes.bool,
  confirmText: React.PropTypes.string,
  cancelText: React.PropTypes.string,
  style: React.PropTypes.string,
  onOk: React.PropTypes.func,
  onCancel: React.PropTypes.func,
  title: React.PropTypes.node,
  children: React.PropTypes.any
};
export default MessageBoxLayout2;
