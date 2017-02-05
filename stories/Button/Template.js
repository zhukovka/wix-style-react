import React, {PropTypes, Component} from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Button from 'wix-style-react/Button';
import {Close} from '../../src/Icons';

export default class Form extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    theme: React.PropTypes.string.isRequired,
    disabled: React.PropTypes.bool.isRequired,
    iconOnly: React.PropTypes.bool,
    text: React.PropTypes.string,
    height: React.PropTypes.string,
  };

  componentDidUpdate(props) {
    props.onChange(reactElementToJSXString(this.getComponent()));
  }

  componentDidMount() {
    this.props.onChange(reactElementToJSXString(this.getComponent()));
  }

  getComponent() {
    let iconSize = '6px';
    if (this.props.height === 'large') {
      iconSize = '8px';
    }
    if (['close-standard', 'close-dark', 'close-transparent'].indexOf(this.props.theme) < 0) {
      iconSize = '12px';
    }

    return (
      <Button
        disabled={this.props.disabled}
        height={this.props.height}
        theme={this.props.theme}>
        {this.props.iconOnly ? <Close size={iconSize}/> : this.props.text}
      </Button>
    );
  }

  render() {
    return this.getComponent();
  }
}
