import React, {PropTypes} from 'react';
import * as styles from './MessageBoxFunctionalLayout.scss';
import {HeaderLayout, FooterLayout} from './';
import WixComponent from '../WixComponent';

class MessageBoxFunctionalLayout extends WixComponent {

  render() {
    const {title, onCancel, onOk, confirmText, children, buttonsHeight, hideFooter, cancelText, theme, closeButton} = this.props;

    return (
      <div className={styles.content}>
        <HeaderLayout title={title} onCancel={onCancel} theme={theme} closeButton={closeButton}/>
        <div className={styles.body} >
          {children}
        </div>
        {
          !hideFooter ?
            <FooterLayout buttonsHeight={buttonsHeight} confirmText={confirmText} cancelText={cancelText} onCancel={onCancel} onOk={onOk} theme={theme}/> : null
        }
      </div>
    );
  }
}

MessageBoxFunctionalLayout.propTypes = {
  hideFooter: PropTypes.bool,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  theme: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  title: PropTypes.node,
  children: PropTypes.any,
  buttonsHeight: PropTypes.string,
  closeButton: PropTypes.bool

};

MessageBoxFunctionalLayout.defaultProps = {
  buttonsHeight: 'small'
};

export default MessageBoxFunctionalLayout;
