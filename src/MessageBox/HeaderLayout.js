import React from 'react';
import classNames from 'classnames';
import styles from './HeaderLayout.scss';
import SvgX from '../svg/X.js';

const HeaderLayout = ({title, onCancel, theme}) => {

  return (
    <div className={classNames(styles.header, styles[theme])} data-hook="header-layout">
      <span className={styles.titleLabel} data-hook="header-layout-title">
        {title}
      </span>
      <button className={styles.close} onClick={onCancel}>
        <SvgX width={9} height={9} thickness={1} color={'white'}/>
      </button>
    </div>
  );
};

HeaderLayout.defaultProps = {
  theme: 'blue'
};

HeaderLayout.propTypes = {
  title: React.PropTypes.node,
  onCancel: React.PropTypes.func,
  theme: React.PropTypes.oneOf(['red', 'green', 'blue', 'lightGreen'])
};

export default HeaderLayout;
