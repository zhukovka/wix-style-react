import React, {PropTypes} from 'react';
import classNames from 'classnames';
import styles from './HeaderLayout.scss';
import SvgX from '../svg/X.js';

const HeaderLayout = ({title, onCancel, theme, closeButton}) => {

  return (
    <div className={classNames(styles.header, styles[theme])} data-hook="header-layout">
      <span className={styles.titleLabel} data-hook="header-layout-title">
        {title}
      </span>
      {closeButton &&
        <button className={styles.close} data-hook="header-close-button" onClick={onCancel}>
          <SvgX width={9} height={9} thickness={1} color={'white'}/>
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
