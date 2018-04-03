import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CloseLarge from 'wix-ui-icons-common/system/CloseLarge';
import styles from './HeaderLayout.scss';

const HeaderLayout = ({title, onCancel, theme, closeButton}) => {

  return (
    <div className={classNames(styles.header, styles[theme])} data-hook="header-layout">
      <span className={styles.titleLabel} data-hook="header-layout-title">
        {title}
      </span>
      {closeButton &&
        <button type="button" className={styles.close} data-hook="header-close-button" onClick={onCancel}>
          <CloseLarge/>
        </button>
      }
    </div>
  );
};

HeaderLayout.defaultProps = {
  theme: 'blue',
  closeButton: true
};

HeaderLayout.propTypes = {
  title: PropTypes.node,
  onCancel: PropTypes.func,
  closeButton: PropTypes.bool,
  theme: PropTypes.oneOf(['red', 'green', 'blue', 'lightGreen'])
};

export default HeaderLayout;
