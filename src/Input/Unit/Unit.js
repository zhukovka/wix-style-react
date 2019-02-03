import React from 'react';
import PropTypes from 'prop-types';
import deprecationLog from '../../utils/deprecationLog';

import styles from '../Input.scss';

class Unit extends React.Component {
  constructor(props) {
    super(props);
    deprecationLog(
      'Input.Unit component is deprecated and will be removed in the next major release, please use Input.CustomAffix instead',
    );
  }
  render() {
    const { children, value } = this.props;
    return (
      <div className={styles.unit} data-hook="unit">
        {value || children}
      </div>
    );
  }
}

Unit.displayName = 'Input.Unit';
Unit.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string,
};

export default Unit;
