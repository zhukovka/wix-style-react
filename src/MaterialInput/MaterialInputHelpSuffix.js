import React from 'react';
import PropTypes from 'prop-types';

import InfoCircle from '../new-icons/InfoCircle';
import styles from './MaterialInput.scss';

class InputHelpSuffix extends React.Component {
  render() {
    return (
      <div
        dataHook="input-tooltip"
        disabled={this.props.helpMessage.length === 0}
        maxWidth="230px"
        placement="right"
        alignment="center"
        textAlign="left"
        hideDelay={100}
        overlay=""
      >
        <div className={styles.help}>
          <InfoCircle />
        </div>
        <div className={styles.statusMessage}>{this.props.helpMessage}</div>
      </div>
    );
  }
}

InputHelpSuffix.propTypes = {
  theme: PropTypes.oneOf(['normal', 'paneltitle', 'material', 'amaterial']),
  helpMessage: PropTypes.string.isRequired,
  help: PropTypes.bool,
};

export default InputHelpSuffix;
