import React, {PropTypes, Component} from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import {Divider} from 'wix-style-react/Viewer';
const Color = require('color');

export class Form extends Component {

  componentDidUpdate(props) {
    props.onChange(reactElementToJSXString(this.getComponent()));
  }

  componentDidMount() {
    this.props.onChange(reactElementToJSXString(this.getComponent()));
  }

  getComponent() {
    let size = this.getValidSize(this.props.size);
    let opacity = this.getValidOpacity(this.props.opacity);
    let color = this.getValidColor(this.props.color);

    return (
      <Divider
        direction={this.props.direction}
        size={size}
        length={this.props.length ? this.props.length : '100px'}
        color={color}
        opacity={opacity}
      >
      </Divider>
    );
  }

  getValidColor(color) {
    color = color ? color : '#18D2DE';
    let colorObj;
    try {
      colorObj = Color(color);
      //color valid, do nothing
    } catch (e) {
      color = '#18D2DE';
    }
    return color;
  }


  getValidSize(size) {
    size = size ? size : 2;
    if (size > 12) {
      size = 12;
    } else if (size < 0) {
      size = 2;
    }
    return size;
  }

  getValidOpacity(opacity) {
    opacity = opacity ? opacity : 20;
    if (opacity > 100) {
      opacity = 100;
    }
    return opacity = opacity > 0 ? opacity : 0;
  }

  render() {
    return this.getComponent();
  }
}

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
  size: PropTypes.number,
  direction: PropTypes.string,
  length: PropTypes.string,
  color: PropTypes.string,
  opacity: PropTypes.number
};

export default Form;

