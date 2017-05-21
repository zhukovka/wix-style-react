import React, {Component} from 'react';
import omit from 'lodash.omit';

import Input from '../Input';

import styles from './DatePickerInput.scss';

export default class DatePickerInput extends Component {

  static propTypes = {
    onClick: React.PropTypes.func,
    value: React.PropTypes.string,
    dateFormat: React.PropTypes.func,
    style: React.PropTypes.object,
    onChange: React.PropTypes.func,
    prefix: React.PropTypes.node,
  };

  static defaultProps = {
    prefix: <div className={styles.icon}/>
  }

  render() {
    const desiredProps = omit(this.props, 'style');

    return (
      <div style={this.props.style} onClick={this.props.onClick}>
        <Input
          ref={Input => this.input = Input}
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
