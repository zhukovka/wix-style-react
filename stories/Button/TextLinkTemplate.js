import React, {PropTypes, Component} from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import TextLink from 'wix-style-react/TextLink';

export class Form extends Component {

  componentDidUpdate(props) {
    props.onChange(reactElementToJSXString(this.getComponent()));
  }

  componentDidMount() {
    this.props.onChange(reactElementToJSXString(this.getComponent()));
  }

  getComponent() {
    return (
      <TextLink
        size={this.props.size}
        darkBackground={this.props.darkBackground}
        link={this.props.link}
        forceUnderline={this.props.forceUnderline}>
        {this.props.children}
      </TextLink>
    );
  }

  render() {
    return this.getComponent();
  }
}

Form.propTypes = {
  size: PropTypes.string.isRequired,
  darkBackground: React.PropTypes.bool.isRequired,
  link: React.PropTypes.string.isRequired,
  forceUnderline: React.PropTypes.bool.isRequired,
  children: React.PropTypes.node
};

export default Form;

