import React, {Component, PropTypes} from 'react';

import TextFieldExample from './TextFieldTemplate';
import Input from '../../src/Input';
import Label from '../../src/Label';
import ToggleSwitch from '../../src/ToggleSwitch';
import RadioGroup from '../../src/RadioGroup';

import styles from './ExampleStandard.scss';

class ExampleStandard extends Component {

  static propTypes = {
    onChange: PropTypes.func
  }

  state = {
    withLabel: true,
    prefixSuffixValue: '',
    prefixUnit: '',
    prefixTicker: false,
    suffixUnit: '',
    suffixTicker: false,
    label: {
      appearance: 'T1.1',
      children: 'First name'
    },
    input: {
      size: 'normal',
      placeholder: 'Please type in your first name...'
    }
  }

  setComponentState(componentName, obj) {
    this.setState(prevState => {
      prevState[componentName] = {...this.state[componentName], ...obj};
      Object.keys(prevState[componentName])
        .forEach(k => !prevState[componentName][k] && delete prevState[componentName][k]);
      return prevState;
    });
  }

  updatePrefix(state) {
    this.setState(state, () => {
      const items = [];
      if (this.state.prefixUnit) {
        items.push(<Input.Unit key={1}>{this.state.prefixUnit}</Input.Unit>);
      }
      if (this.state.prefixTicker) {
        items.push(<Input.Ticker key={2}/>);
      }
      this.setComponentState('input', {prefix: items.length ? items : null});
    });
  }

  updateSuffix(state) {
    this.setState(state, () => {
      const items = [];
      if (this.state.suffixUnit) {
        items.push(<Input.Unit key={1}>{this.state.suffixUnit}</Input.Unit>);
      }
      if (this.state.suffixTicker) {
        items.push(<Input.Ticker key={2}/>);
      }
      this.setComponentState('input', {suffix: items.length ? items : null});
    });
  }

  render() {
    return (
      <from className={styles.form}>
        <div className={styles.input}>
          <div className={styles.option}>
            <Label>Show label</Label>
            <div className={styles.flex}>
              <Input
                size="small"
                value={this.state.label.children}
                onChange={e => this.setComponentState('label', {children: e.target.value})}
                />&nbsp;
              <ToggleSwitch
                size="small"
                checked={this.state.withLabel}
                onChange={() => this.setState({withLabel: !this.state.withLabel})}
                />
            </div>
          </div>
          <div className={styles.option}>
            <Label>Placeholder</Label>
            <div className={styles.flex}>
              <Input
                size="small"
                value={this.state.input.placeholder}
                onChange={e => this.setComponentState('input', {placeholder: e.target.value})}
                />
            </div>
          </div>
          <div className={styles.option}>
            <Label>Size</Label>
            <div className={styles.flex}>
              <RadioGroup
                display="horizontal"
                value={this.state.input.size}
                onChange={size => this.setComponentState('input', {size})}
                >
                <RadioGroup.Radio value="small">Small</RadioGroup.Radio>
                <RadioGroup.Radio value="normal">Normal</RadioGroup.Radio>
                <RadioGroup.Radio value="large">Large</RadioGroup.Radio>
              </RadioGroup>
            </div>
          </div>
          <div className={styles.option}>
            <Label>Type</Label>
            <div className={styles.flex}>
              <RadioGroup
                display="horizontal"
                value={this.state.input.type}
                onChange={type => this.setComponentState('input', {type})}
                >
                <RadioGroup.Radio value="">Text</RadioGroup.Radio>
                <RadioGroup.Radio value="number">Number</RadioGroup.Radio>
              </RadioGroup>
            </div>
          </div>
          <div className={styles.option}>
            <Label>Prefix</Label>
            <div className={styles.flex}>
              <div className={styles.smallInput}>
                <Input
                  size="small"
                  value={this.state.prefixUnit}
                  onChange={e => this.updatePrefix({prefixUnit: e.target.value})}
                  />
              </div>
              &nbsp;Unit&nbsp;
              <ToggleSwitch
                size="small"
                checked={this.state.prefixTicker}
                onChange={() => this.updatePrefix({prefixTicker: !this.state.prefixTicker})}
                />&nbsp;with ticker
            </div>
          </div>
          <div className={styles.option}>
            <Label>Suffix</Label>
            <div className={styles.flex}>
              <div className={styles.smallInput}>
                <Input
                  size="small"
                  value={this.state.suffixUnit}
                  onChange={e => this.updateSuffix({suffixUnit: e.target.value})}
                  />
              </div>
              &nbsp;Unit&nbsp;
              <ToggleSwitch
                size="small"
                checked={this.state.suffixTicker}
                onChange={() => this.updateSuffix({suffixTicker: !this.state.suffixTicker})}
                />&nbsp;with ticker
            </div>
          </div>
        </div>
        <div className={styles.output}>
          <TextFieldExample {...this.state} onChange={this.props.onChange}/>
        </div>
      </from>
    );
  }
}

export default ExampleStandard;
