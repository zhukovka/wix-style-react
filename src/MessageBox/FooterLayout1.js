import React from 'react';
import Button from '../Button';
import * as styles from './FooterLayout.scss';

const FooterLayout1 = ({children, style, cancelText, onCancel, onOk, confirmText}) => {
  return (
    <div className={styles.footer} >
      {children}
      <div className={styles.footerbuttons}>
        {cancelText ?
          <Button theme={'empty' + style} onClick={onCancel} >
            {cancelText}
          </Button> : null
        }
        <Button theme={'full' + style} onClick={onOk} >
          {confirmText}
        </Button>
      </div>
    </div>
  );
};

FooterLayout1.propTypes = {
  confirmText: React.PropTypes.string,
  cancelText: React.PropTypes.string,
  onCancel: React.PropTypes.func,
  onOk: React.PropTypes.func,
  style: React.PropTypes.string,
  children: React.PropTypes.any
};

FooterLayout1.defaultProps = {
  style: 'blue'
};

export default FooterLayout1;
