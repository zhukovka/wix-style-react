import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import InputErrorSuffix from './InputErrorSuffix';
import Tooltip from '../Tooltip';

import {Error} from '../Icons/dist';


import styles from './Input.scss';

const mapPlacementTomoveBy = {
  right: {x: -2, y: -10},
  left: {x: 2, y: -10},
  top: {x: 0, y: -8},
  bottom: {x: 0, y: -8}
};

class AmaterialErrorSuffix extends React.Component {
  renderTooltip() {
    const {focused, error, errorMessage} = this.props;

    const customTooltip = this.props.customTooltip || <Tooltip content={errorMessage}/>;

    const baseProps = {
      dataHook: 'input-tooltip',
      disabled: !error && !errorMessage,
      maxWidth: '250px',
      hideDelay: 5,
      showDelay: 5,
      active: focused,
      moveBy: mapPlacementTomoveBy.right,
      alignment: 'center',
      textAlign: 'left',
      content: errorMessage,
      overlay: '',
      placement: 'right'
    };

    return (
      React.cloneElement(
        customTooltip,
        {
          ...baseProps,
          placement: customTooltip.props.placement,
          moveBy: mapPlacementTomoveBy[customTooltip.props.placement]
        },
        <div className={classNames(styles.errorIcon, styles.suffix)}><Error size="1.5em"/></div>
      )

    );
  }

  render() {
    return this.props.focused ? null : this.renderTooltip();
  }
}

AmaterialErrorSuffix.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  error: PropTypes.bool,
  focused: PropTypes.bool,
  customTooltip: PropTypes.node
};



class ThemedInputErrorSuffix extends InputErrorSuffix {
  render() {
    const {theme, focused, error, errorMessage, customTooltip} = this.props;
    return theme === 'amaterial' ?
      <AmaterialErrorSuffix focused={focused} error={error} errorMessage={errorMessage} customTooltip={customTooltip}/> :
      super.render();
  }
}

export default ThemedInputErrorSuffix;
