import React, {Component} from 'react';
import Input from '../Input';
import styles from './DatePickerInput.scss';
import omit from 'lodash.omit';

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
    const unWantedProps = ['value', 'style'];
    const desiredProps = omit(this.props, unWantedProps);

    return (
      <div style={this.props.style} onClick={this.props.onClick}>
        <Input
          ref={Input => this.input = Input}
          value={this.props.value}
          iconLeft={this.renderIcon()}
          onEnterPressed={() => this.blur()}
          onEscapePressed={() => this.blur()}
          {...desiredProps}
          />
      </div>
    );
  }

  blur() {
    this.input.blur();
  }

  focus = () => {}
}
