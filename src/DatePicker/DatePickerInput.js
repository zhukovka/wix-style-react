import React, {Component} from 'react';
import Input from '../Input';
import styles from './DatePickerInput.scss';

export default class DatePickerInput extends Component {
  static propTypes = {
    onClick: React.PropTypes.func,
    value: React.PropTypes.string,
    dateFormat: React.PropTypes.func,
    style: React.PropTypes.object,
    onChange: React.PropTypes.func
  };

  renderIcon() {
    return <div className={styles.icon}/>;
  }

  render() {
    return (
      <div style={this.props.style} onClick={this.props.onClick}>
        <Input
          value={this.props.value}
          onChange={this.props.onChange}
          iconLeft={this.renderIcon()}
          />
      </div>
    );
  }
}
