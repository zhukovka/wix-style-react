import React from 'react';
import PropTypes from 'prop-types';
import FormFieldErrorFilled from 'wix-ui-icons-common/system/FormFieldErrorFilled';
import classNames from 'classnames';
import styles from './MaterialInput.scss';

class MaterialInputErrorSuffix extends React.Component {
  render() {
    const classes = classNames(styles.exclamation, {});
    return (
      <div dataHook="input-error">
        <div className={classes}>
          <FormFieldErrorFilled />
        </div>
        <div className={`${styles.statusMessage} ${styles.errorMessage}`}>
          {this.props.errorMessage}
        </div>
      </div>
    );
  }
}

MaterialInputErrorSuffix.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  focused: PropTypes.bool,
};

export default MaterialInputErrorSuffix;
