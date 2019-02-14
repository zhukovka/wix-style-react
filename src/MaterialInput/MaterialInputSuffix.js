import React from 'react';
import PropTypes from 'prop-types';

import FormFieldErrorFilled from 'wix-ui-icons-common/system/FormFieldErrorFilled';
import Input from './MaterialInput';

import styles from './MaterialInput.scss';

const isFixVisible = fix => fix.isVisible;

const suffixRules = {
  inputErrorSuffix: ({ status, disabled }) =>
    status === Input.StatusError && !disabled,
  inputHelpSuffix: ({ help, disabled }) => help && !disabled,
};

const getVisibleSuffixCount = args =>
  Object.keys(suffixRules)
    .map(key => suffixRules[key])
    .map(fn => fn(args))
    .filter(x => x).length;

const InputSuffix = ({
  statusMessage,
  status,
  disabled,
  help,
  helpMessage,
  errorMessage,
}) => {
  const error = status === Input.StatusError;

  const suffixes = [
    {
      component: () => (
        <div dataHook="input-error">
          <div className={styles.exclamation}>
            <FormFieldErrorFilled />
          </div>
          <div className={`${styles.statusMessage} ${styles.errorMessage}`}>
            {errorMessage}
          </div>
        </div>
      ),
      isVisible: suffixRules.inputErrorSuffix({ status, disabled }),
    },
    {
      component: () => (
        <div dataHook="input-help">
          <div className={`${styles.statusMessage} ${styles.helpMessage}`}>
            {helpMessage}
          </div>
        </div>
      ),
      isVisible: suffixRules.inputHelpSuffix({ help, disabled }),
    },
  ].filter(isFixVisible);

  return (
    <div className={styles.suffixes}>
      {suffixes.map((s, i) => (
        <div key={i} className={styles.suffix}>
          {s.component()}
        </div>
      ))}
    </div>
  );
};

InputSuffix.propTypes = {
  suffixes: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.func.isRequired,
      isVisible: PropTypes.bool.isRequired,
    }),
  ),
  statusMessage: PropTypes.node,
  status: PropTypes.oneOf(['loading', 'error']),
  disabled: PropTypes.bool,
  help: PropTypes.bool,
  helpMessage: PropTypes.node,
  errorMessage: PropTypes.node,
  focused: PropTypes.bool,
};

export default InputSuffix;
export { getVisibleSuffixCount };
