import styles from './Dropdown.scss';
import InputWithOptions from '../InputWithOptions/InputWithOptions';
import classNames from 'classnames';

class Dropdown extends InputWithOptions {
  state = {value: '', selectedId: -1};

  update(props) {
    if (props.selectedId) {
      const selectedOption = props.options.find(option => option.id === props.selectedId);

      if (selectedOption) {
        this.setState({
          value: this.props.valueParser(selectedOption),
          selectedId: selectedOption.id
        });
      }
    }
  }

  componentWillMount() {
    this.update(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedId !== nextProps.selectedId) {
      this.update(nextProps);
    }
  }

  inputClasses() {
    const classes = {[styles.readOnly]: true};
    classes[styles.noRightBorderRadius] = this.props.noRightBorderRadius;
    classes[styles.noBorder] = this.props.noBorder;
    return classNames(classes);
  }

  dropdownAdditionalProps() {
    return {selectedId: this.state.selectedId, value: this.state.value};
  }

  inputAdditionalProps() {
    return {readOnly: true, value: this.state.value};
  }

  _onSelect(option) {
    this.setState({value: this.props.valueParser(option), selectedId: option.id});
    super._onSelect(option);
  }
}

Dropdown.propTypes = InputWithOptions.propTypes;
Dropdown.defaultProps = InputWithOptions.defaultProps;

export default Dropdown;
