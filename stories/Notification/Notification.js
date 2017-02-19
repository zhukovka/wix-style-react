import React, {PropTypes, Component} from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import Notification from '../../src/Notification';
import {GLOBAL_NOTIFICATION} from '../../src/Notification';
import Button from '../../src/Button';
import Label from '../../src/Label';
import {Close} from '../../src/Icons';
import TextLink from '../../src/TextLink'

export default class Form extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    notification: PropTypes.object,
    label: PropTypes.object,
    withActionButton: PropTypes.bool,
    actionButton: PropTypes.object,
    link: PropTypes.string,
    linkText: PropTypes.string,
  };

  componentDidUpdate(props) {
    props.onChange(reactElementToJSXString(this.getComponent()));
  }

  componentDidMount() {
    this.props.onChange(reactElementToJSXString(this.getComponent()));
  }

  getCtaButton() {
    return this.props.actionButton.type === 'button' ?
      <Button height="small" theme="transparent">
        Thanks
      </Button> :
      <TextLink link={this.props.link} forceUnderline darkBackground>{this.props.linkText}</TextLink>;
  }

  getComponent() {
    const notificationProps = Object.assign({}, this.props.notification);
    if(notificationProps.type === GLOBAL_NOTIFICATION) {
      delete notificationProps.timeout
    }

    return (
      <Notification {...notificationProps}>
        <Label {...this.props.label}>
          Boo! I scared you with this very scary error message!
        </Label>
        {
          this.props.actionButton.type !== 'none' ?
            this.getCtaButton() :
            null
        }
        <Button height="medium" theme="close-transparent" onClick={e => e.preventDefault()}>
          <Close size="6px"/>
        </Button>
      </Notification>
    );
  }

  render() {
    return this.getComponent();
  }
}
