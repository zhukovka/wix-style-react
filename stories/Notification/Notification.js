import React, {PropTypes, Component} from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import Notification from '../../src/Notification';
import {GLOBAL_NOTIFICATION} from '../../src/Notification';
import Button from '../../src/Button';
import Label from '../../src/Label';
import {Close} from '../../src/Icons';

export default class Form extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    notification: PropTypes.object,
    label: PropTypes.object,
    withActionButton: PropTypes.bool,
    actionButton: PropTypes.object
  };

  componentDidUpdate(props) {
    props.onChange(reactElementToJSXString(this.getComponent()));
  }

  componentDidMount() {
    this.props.onChange(reactElementToJSXString(this.getComponent()));
  }

  getCtaButton() {
    //TODO - should support textLink when possible
    return this.props.actionButton.type === 'button' ?
      <Button height="small" theme="transparent">
        Thanks
      </Button> :
      <div>Thanks</div>;
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
          this.props.actionButton.show ?
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
