import React, {PropTypes, Component} from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import Range from '../../src/Range';
import Input from '../../src/Input';
import Label from '../../src/Label';

export default class Form extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    withLabel: PropTypes.bool,
    label: PropTypes.object,
    firstInput: PropTypes.object,
    lastInput: PropTypes.object,
  };

  componentDidUpdate(props) {
    props.onChange(reactElementToJSXString(this.getComponent()));
  }

  componentDidMount() {
    this.props.onChange(reactElementToJSXString(this.getComponent()));
  }

  getComponent() {
    return (
      <Range>
        {this.props.withLabel ? <Label {...this.props.label}/> : null}
        <Input id="first" {...this.props.firstInput}/>
        <Input id="last" {...this.props.lastInput}/>
      </Range>
    );
  }

  render() {
    return this.getComponent();
  }
}
