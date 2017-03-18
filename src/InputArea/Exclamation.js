import React from 'react';
import Tooltip from '../Tooltip';
import SvgExclamation from '../svg/Exclamation.js';
import styles from './InputArea.scss';

const Exclamation = ({errorMessage}) =>
  <div className={styles.suffix}>
    <Tooltip disabled={errorMessage.length === 0} placement="top" alignment="center" hideDelay={100} content={errorMessage} overlay="" theme="dark">
      <div className={styles.exclamation}><SvgExclamation width={2} height={11}/></div>
    </Tooltip>
  </div>;

Exclamation.defaultProps = {
  errorMessage: ''
};

Exclamation.propTypes = {
  errorMessage: React.PropTypes.string
};

export default Exclamation;
