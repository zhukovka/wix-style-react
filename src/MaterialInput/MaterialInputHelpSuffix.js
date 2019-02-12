import React from 'react';
import PropTypes from 'prop-types';

import styles from './MaterialInput.scss';

class MaterialInputHelpSuffix extends React.Component {
  render() {
    return (
      <div dataHook="input-help">
        <div className={styles.statusMessage}>{this.props.helpMessage}</div>
      </div>
    );
  }
}

MaterialInputHelpSuffix.propTypes = {
  helpMessage: PropTypes.string.isRequired,
  help: PropTypes.bool,
};

export default MaterialInputHelpSuffix;
