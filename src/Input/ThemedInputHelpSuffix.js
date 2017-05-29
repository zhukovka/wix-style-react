import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip';
import InputHelpSuffix from './InputHelpSuffix';

import {InfoMaterial} from '../Icons/dist';
import styles from './Input.scss';

const mapPlacementTomoveBy = {
  right: {x: 2, y: -10},
  left: {x: -2, y: -10},
  top: {x: 0, y: -2},
  bottom: {x: 0, y: -16}
};

class AmaterialHelpSuffix extends React.Component {
  render() {
    const {help, helpMessage} = this.props;

    const customTooltip = this.props.customTooltip || <Tooltip content={helpMessage}/>;

    const baseProps = {
      dataHook: 'input-tooltip',
      disabled: !help || helpMessage.length === 0,
      maxWidth: '250px',
      moveBy: mapPlacementTomoveBy.right,
      alignment: 'center',
      hideDelay: 5,
      showDelay: 5,
      content: helpMessage,
      textAlign: 'left',
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
        <div className={styles.amaterialHelp}><InfoMaterial height="30" width="30"/></div>
      )
    );
  }
}

AmaterialHelpSuffix.propTypes = {
  help: PropTypes.bool,
  helpMessage: PropTypes.string,
  customTooltip: PropTypes.node
};


class ThemedInputHelpSuffix extends InputHelpSuffix {
  render() {
    const {theme, help, helpMessage, customTooltip} = this.props;

    return theme === 'amaterial' ?
      <AmaterialHelpSuffix help={help} helpMessage={helpMessage} customTooltip={customTooltip}/> :
      super.render();
  }
}

export default ThemedInputHelpSuffix;
