import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip';
import InputHelpSuffix from './InputHelpSuffix';

import {InfoMaterial} from '../Icons/dist';
import styles from './Input.scss';

const AmaterialHelpSuffix = ({help, helpMessage}) =>
  <Tooltip
    dataHook="input-tooltip"
    disabled={!help || helpMessage.length === 0}
    maxWidth="250px"
    placement="right"
    moveBy={{x: 10, y: -10}}
    alignment="center"
    hideDelay={100}
    content={helpMessage}
    textAlign="left"
    overlay=""
    >
    <div className={styles.amaterialHelp}><InfoMaterial height="30" width="30"/></div>
  </Tooltip>;

AmaterialHelpSuffix.propTypes = {
  help: PropTypes.bool,
  helpMessage: PropTypes.string
};


class ThemedInputHelpSuffix extends InputHelpSuffix {
  render() {
    return this.props.theme === 'amaterial' ?
      <AmaterialHelpSuffix help={this.props.help} helpMessage={this.props.helpMessage}/> :
      super.render();
  }
}

export default ThemedInputHelpSuffix;
