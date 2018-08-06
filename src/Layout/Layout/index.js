import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Layout = ({children, gap}) =>
  <div
    style={{
      gridGap: gap
    }}
    className={styles.root}
    children={children}
    />;

Layout.displayName = 'Layout';

Layout.propTypes = {
  /** one or more Cell components. Other nodes are accepted although not recommended */
  children: PropTypes.node,

  /** distance between cells both vertically and horizontally */
  gap: PropTypes.string
};

Layout.defaultProps = {
  gap: '30px'
};

export default Layout;
