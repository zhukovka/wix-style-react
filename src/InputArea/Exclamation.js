import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip';
import styles from './InputArea.scss';
import {Error} from '../Icons/dist';

const Exclamation = ({errorMessage}) =>
  <div className={styles.suffix}>
    <Tooltip
      disabled={errorMessage.length === 0} active={errorMessage.length > 0}
      placement="right" alignment="center" hideDelay={100} content={errorMessage}
      moveBy={{x: 0, y: -10}} overlay=""
      textAlign="left"
      >
      <div className={styles.errorIcon}><Error size="1.5em"/></div>
    </Tooltip>
  </div>;

Exclamation.defaultProps = {
  errorMessage: ''
};

Exclamation.propTypes = {
  errorMessage: PropTypes.string
};

export default Exclamation;
