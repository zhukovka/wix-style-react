import React, {PropTypes} from 'react';
import classNames from 'classnames';

import InputErrorSuffix from './InputErrorSuffix';
import Tooltip from '../Tooltip';

import {Error} from '../Icons/dist';


import styles from './Input.scss';

const AmaterialErrorSuffix = ({focused, error, errorMessage}) => focused ?
  null : <Tooltip
    dataHook="input-tooltip"
    disabled={!error && !errorMessage}
    placement="right"
    hideDelay={5}
    showDelay={5}
    active={focused}
    moveBy={{x: 2, y: -10}}
    alignment="center"
    content={errorMessage}
    overlay=""
    >
    <div className={classNames(styles.errorIcon, styles.suffix)}><Error size="1.5em"/></div>
  </Tooltip>;

AmaterialErrorSuffix.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  error: PropTypes.bool,
  focused: PropTypes.bool,
};



class ThemedInputErrorSuffix extends InputErrorSuffix {
  render() {
    return this.props.theme === 'amaterial' ?
      <AmaterialErrorSuffix focused={this.props.focused} error={this.props.error} errorMessage={this.props.errorMessage}/> :
      super.render();
  }
}

export default ThemedInputErrorSuffix;
