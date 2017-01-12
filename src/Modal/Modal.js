import WixComponent from '../WixComponent';
import React from 'react';
import ReactModal from 'react-modal';
import styles from './Modal.scss';
import {colors, positions} from './ModalConstants';

class Modal extends WixComponent {
  render() {
    //TODO When deprecation ends, _theme won't be needed.
    const _theme = this.props.theme || this.props.style;

    if (this.props.style) {
      console.warn('[wix-style-react>Modal] Warning. Property \'style\' has been deprecated, and will be removed Jan 1st 2017. Please use \'theme\' instead.');
    }

    const justifyContent = positions[this.props.horizontalPosition];
    const alignItems = positions[this.props.verticalPosition];

    const modalStyles = {
      overlay: {
        // Overriding defaults
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 11 + (this.props.zIndex || 0),
        backgroundColor: 'rgba(30, 30, 30, 0.55)',
        // Overriding defaults - END
        display: 'flex',
        justifyContent,
        alignItems,
        overflowY: 'auto'
      },
      content: {
        // Overriding defaults
        position: 'fixed',
        top: '50%',
        left: '50%',
        right: 'initial',
        bottom: 'initial',
        transform: 'translateX(-50%) translateY(-50%)',
        border: 'none',
        overflow: 'initial',
        WebkitOverflowScrolling: 'touch',
        outline: 'none',
        borderRadius: '0px',
        padding: '0px',
        boxShadow: '0 0 14px 0 rgba(22, 45, 60, 0.3)',
        // Overriding defaults - END
        backgroundColor: 'transparent',
        marginBottom: '0px'
      }
    };

    const modalClasses = `${styles.modal} ${styles[_theme]}`;

    return (
      <ReactModal
        isOpen={this.props.isOpen}
        shouldCloseOnOverlayClick={this.props.shouldCloseOnOverlayClick}
        onRequestClose={this.props.onRequestClose}
        onAfterOpen={this.props.onAfterOpen}
        style={modalStyles}
        className={modalClasses}
        contentLabel={this.props.contentLabel}
        >
        {this.props.children}
      </ReactModal>
    );
  }
}

Modal.propTypes = {
  isOpen: React.PropTypes.bool.isRequired,
  contentLabel: React.PropTypes.string.isRequired,
  onCancel: React.PropTypes.func,
  style: React.PropTypes.oneOf(Object.keys(colors)),
  theme: React.PropTypes.oneOf(Object.keys(colors)),
  children: React.PropTypes.any,
  zIndex: React.PropTypes.number,
  shouldCloseOnOverlayClick: React.PropTypes.bool,
  onRequestClose: React.PropTypes.func,
  onAfterOpen: React.PropTypes.func,
  horizontalPosition: React.PropTypes.oneOf(Object.keys(positions)),
  verticalPosition: React.PropTypes.oneOf(Object.keys(positions))
};

Modal.defaultProps = {
  onOk: () => { },
  theme: colors.blue,
  shouldCloseOnOverlayClick: false,
  horizontalPosition: 'center',
  verticalPosition: 'start',
};

export default Modal;
