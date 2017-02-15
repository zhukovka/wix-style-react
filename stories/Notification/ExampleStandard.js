import React, {Component, PropTypes} from 'react';

import styles from './ExampleStandard.scss';
import Notification from './Notification';
import {LOCAL_NOTIFICATION, GLOBAL_NOTIFICATION, DEFAULT_TIMEOUT} from '../../src/Notification';
import Label from '../../src/Label';
import ToggleSwitch from '../../src/ToggleSwitch';
import RadioGroup from '../../src/RadioGroup';
import Input from '../../src/Input';

class ExampleStandard extends Component {

  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    notification: {
      show: true,
      type: GLOBAL_NOTIFICATION,
      size: 'big',
      theme: 'standard',
      timeout: DEFAULT_TIMEOUT,
      zIndex: 10000
    },
    label: {
      appearance: 'T1.2'
    },
    actionButton: {
      show: true,
      type: 'button'
    }
  };

  setComponentState(componentName, obj) {
    this.setState(prevState => {
      prevState[componentName] = {...this.state[componentName], ...obj};
      Object.keys(prevState[componentName])
        .forEach(k => !prevState[componentName][k] && delete prevState[componentName][k]);
      return prevState;
    });
  }

  setNotificationSize(actionButtonIsShown, actionButtonType) {
    const size = actionButtonIsShown && actionButtonType === 'button' ? 'big' : 'small';
    this.setComponentState('notification', {size});
  }

  render() {
    return (
      <form className={styles.form}>
        <div className={styles.output}>
          <Notification {...this.state} onChange={this.props.onChange}/>
        </div>
        <div className={styles.input}>
          <div className={styles.option}>
            <div className={styles.flex}>
              <Label>This text will be covered by a local notification</Label>
            </div>
            <hr/>
          </div>
          <div className={styles.option}>
            <Label>Show Notification</Label>
            <div className={styles.flex}>
              <ToggleSwitch
                size="small"
                checked={this.state.notification.show}
                onChange={() => this.setComponentState('notification', {show: !this.state.notification.show})}
              />
            </div>
          </div>
          <div className={styles.option}>
            <Label>Type</Label>
            <div className={styles.flex}>
              <RadioGroup
                display="horizontal"
                value={this.state.notification.type}
                onChange={type => this.setComponentState('notification', {type})}
              >
                <RadioGroup.Radio value={GLOBAL_NOTIFICATION}>Global (push the content)</RadioGroup.Radio>
                <RadioGroup.Radio value={LOCAL_NOTIFICATION}>Local (on top of the content)</RadioGroup.Radio>
              </RadioGroup>
            </div>
          </div>
          {
            this.state.notification.type === LOCAL_NOTIFICATION ?
              <div className={styles.option}>
                <Label>Timeout in ms (for local notifications)</Label>
                <div className={styles.column}>
                  <Input placeholder="Set the timeout" size="small" type="number"
                         value={this.state.notification.timeout}
                         onChange={e => this.setComponentState('notification', {timeout: Number(e.target.value)})}
                  />
                </div>
              </div> :
              null
          }
          <div className={styles.option}>
            <Label>Theme</Label>
            <div className={styles.flex}>
              <RadioGroup
                display="horizontal"
                value={this.state.notification.theme}
                onChange={theme => this.setComponentState('notification', {theme})}
              >
                <RadioGroup.Radio value="standard">Standard</RadioGroup.Radio>
                <RadioGroup.Radio value="error">Error</RadioGroup.Radio>
                <RadioGroup.Radio value="success">Success</RadioGroup.Radio>
                <RadioGroup.Radio value="warning">Warning</RadioGroup.Radio>
              </RadioGroup>
            </div>
          </div>
          <div className={styles.option}>
            <Label>Action Button</Label>
            <div className={styles.flex}>
              <ToggleSwitch
                size="small"
                checked={this.state.actionButton.show}
                onChange={show => {
                  this.setComponentState('actionButton', {show: !this.state.actionButton.show});
                  this.setNotificationSize(!this.state.actionButton.show, this.state.actionButton.type);
                }}
              />
            </div>
          </div>
          <div className={styles.option}>
            <Label>Button Type</Label>
            <div className={styles.flex}>
              <RadioGroup
                display="horizontal"
                value={this.state.actionButton.type}
                onChange={type => {
                  this.setComponentState('actionButton', {type});
                  this.setNotificationSize(this.state.actionButton.show, type);
                }}
              >
                <RadioGroup.Radio value="button">Button</RadioGroup.Radio>
                <RadioGroup.Radio value="textLink">TextLink</RadioGroup.Radio>
              </RadioGroup>
            </div>
          </div>
        </div>
        <div className={styles.option}>
          <Label>z-index (optional)</Label>
          <div className={styles.column}>
            <Input placeholder="optional z-index" size="small" type="number"
                   value={this.state.notification.zIndex}
                   onChange={e => this.setComponentState('notification', {zIndex: Number(e.target.value)})}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default ExampleStandard;
