import React, {Component, PropTypes} from 'react';

import Template from './Template';
import RadioGroup from '../../src/RadioGroup';
import Label from '../../src/Label';
import Input from '../../src/Input';
import ToggleSwitch from '../../src/ToggleSwitch';

import styles from './ExampleButton.scss';

class ButtonTextLink extends Component {

  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    disabled: false,
    theme: 'emptybluesecondary',
    text: 'Click On Me'
  };

  render() {
    return (
      <from className={styles.form}>
        <div className={styles.input}>
          <h1>TODO</h1>

          <div className={styles.option}>
            <Label>Type</Label>
            <div className={styles.flex}>
              <RadioGroup
                display="horizontal"
                value={this.state.theme}
                onChange={theme => this.setState({theme})}
              >
                <RadioGroup.Radio value="emptybluesecondary">Regular</RadioGroup.Radio>
                <RadioGroup.Radio value="transparentwhite">Dark Background</RadioGroup.Radio>
                <RadioGroup.Radio value="transparentwhiteunderline">Dark Background Underline</RadioGroup.Radio>
              </RadioGroup>
            </div>
          </div>

          <div className={styles.option}>
            <Label>Text</Label>
            <div className={styles.flex}>
              <Input
                size="small"
                value={this.state.text}
                onChange={e => this.setState({text: e.target.value})}
              />
            </div>
          </div>

        </div>

        <div className={styles[this.state.theme === 'emptybluesecondary' ? 'output' : 'output-darkblue']}>
          <div className={`${styles[this.state.theme]} ${styles.exampleWrapper}`}>
            <Template {...this.state} onChange={this.props.onChange}/>
          </div>
        </div>
      </from>
    );
  }
}

export default ButtonTextLink;
