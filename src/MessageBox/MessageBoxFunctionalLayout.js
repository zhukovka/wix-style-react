import React from 'react';
import * as styles from './MessageBoxFunctionalLayout.scss';
import {HeaderLayout, FooterLayout} from './';
import WixComponent from '../WixComponent';

class MessageBoxFunctionalLayout extends WixComponent {

  render() {
    const {title, onCancel, onOk, confirmText, children, hideFooter, cancelText, theme} = this.props;

    return (
      <div className={styles.content}>
        <HeaderLayout title={title} onCancel={onCancel} theme={theme}/>
        <div className={styles.body} >
          {children}
        </div>
        {
          !hideFooter ?
            <FooterLayout confirmText={confirmText} cancelText={cancelText} onCancel={onCancel} onOk={onOk} theme={theme}/> : null
        }
      </div>
    );
  }
}

MessageBoxFunctionalLayout.propTypes = {
  hideFooter: React.PropTypes.bool,
  confirmText: React.PropTypes.string,
  cancelText: React.PropTypes.string,
  theme: React.PropTypes.string,
  onOk: React.PropTypes.func,
  onCancel: React.PropTypes.func,
  title: React.PropTypes.node,
  children: React.PropTypes.any
};

export default MessageBoxFunctionalLayout;
