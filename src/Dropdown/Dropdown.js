import styles from './Dropdown.scss';
import InputWithOptions from '../InputWithOptions/InputWithOptions';

class Dropdown extends InputWithOptions {

  constructor(props) {
    super(props);
    let value = '', selectedId = -1;
    if (props.selectedId) {
      const option = props.options.find(option => {
        return option.id === props.selectedId;
      });

      if (option) {
        value = option.value;
        selectedId = option.id;
      }
    }
    this.state = {value, selectedId};
  }

  inputClasses() {
    return styles.readonly;
  }

  dropdownAdditionalProps() {
    return {selectedId: this.state.selectedId, value: this.state.value};
  }

  inputAdditionalProps() {
    return {readOnly: true, value: this.state.value};
  }

  _onSelect(option) {
    this.setState({value: option.value, selectedId: option.id});
    super._onSelect(option);
  }
}

Dropdown.propTypes = InputWithOptions.propTypes;
Dropdown.defaultProps = InputWithOptions.defaultProps;

export default Dropdown;
