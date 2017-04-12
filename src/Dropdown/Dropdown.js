import styles from './Dropdown.scss';
import InputWithOptions from '../InputWithOptions/InputWithOptions';
import classNames from 'classnames';

class Dropdown extends InputWithOptions {

  constructor(props) {
    super(props);
    this.update(props, {isFirstTime: true});
  }

  update(props, {isFirstTime}) {
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
    if (isFirstTime) {
      this.state = {value, selectedId};
    } else {
      this.setState({value, selectedId});
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedId !== nextProps.selectedId) {
      this.update(nextProps, {isFirstTime: false});
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
