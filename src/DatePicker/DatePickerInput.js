import React, {Component} from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';

import Input from '../Input';

import styles from './DatePickerInput.scss';

export default class DatePickerInput extends Component {

  static propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string,
    dateFormat: PropTypes.func,
    style: PropTypes.object,
    onChange: PropTypes.func,
    prefix: PropTypes.node
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
