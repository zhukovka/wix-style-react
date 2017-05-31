import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import InputErrorSuffix from './InputErrorSuffix';
import Tooltip from '../Tooltip';

import {Error} from '../Icons/dist';


import styles from './Input.scss';

const placementToMoveBy = {
  right: {x: 2, y: -10},
  left: {x: -2, y: -10},
  top: {x: 0, y: -10},
  bottom: {x: 0, y: -8},
};

const AmaterialErrorSuffix = ({focused, error, errorMessage, placement}) => focused ?
  null : <Tooltip
    dataHook="input-tooltip"
    disabled={!error && !errorMessage}
    placement={placement}
    maxWidth="250px"
    hideDelay={5}
    showDelay={5}
    active={focused}
    moveBy={placementToMoveBy[placement]}
    alignment="center"
    content={errorMessage}
    overlay=""
    textAlign="left"
    >
    <div className={classNames(styles.errorIcon, styles.suffix)}><Error size="1.5em"/></div>
  </Tooltip>;

AmaterialErrorSuffix.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  error: PropTypes.bool,
  focused: PropTypes.bool,
  placement: PropTypes.oneOf(['left', 'right', 'top', 'bottom'])
};

AmaterialErrorSuffix.defaultProps = {
  placement: 'right'
};



class ThemedInputErrorSuffix extends InputErrorSuffix {
  render() {
    const {theme, focused, error, errorMessage, placement} = this.props;
    return theme === 'amaterial' ?
      <AmaterialErrorSuffix focused={focused} error={error} errorMessage={errorMessage} placement={placement}/> :
      super.render();
  }
}

ThemedInputErrorSuffix.propTypes = {
  placement: PropTypes.oneOf(['left', 'right', 'top', 'bottom'])
};

export default ThemedInputErrorSuffix;
