import {PropTypes} from 'react';
import InputWithOptions from '../InputWithOptions/InputWithOptions';

class AutoComplete extends InputWithOptions {

  dropdownAdditionalProps() {
    const {options, predicate} = this.props;
    return {options: options.filter(predicate)};
  }
}

AutoComplete.propTypes = {
  ...InputWithOptions.propTypes,
  predicate: PropTypes.func
};

AutoComplete.defaultProps = {
  ...InputWithOptions.defaultProps,
  predicate: () => true
};

export default AutoComplete;
