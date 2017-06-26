import React, {Component, PropTypes} from 'react';

import Template from './Template';
import RadioGroup from '../../../src/RadioGroup';
import Label from '../../../src/Label';
import Input from '../../../src/Input';
import ToggleSwitch from '../../../src/ToggleSwitch';
import styles from './ExampleTextLink.scss';
import TextField from '../../../src/TextField';
const Color = require('color');

class TextLinkSnippet extends Component {

  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    framename: ''
  };

  render() {
    return (
      <from className={styles.form}>
        <div className={styles.input}>

          <div className={styles.option}>
            <Label>Underline</Label>
            <div className={styles.flex}>
              <RadioGroup
                display="horizontal"
                value={this.state.underlineStyle}
                onChange={underlineStyle => this.setState({underlineStyle})}
              >
                <RadioGroup.Radio value="always">Always</RadioGroup.Radio>
                <RadioGroup.Radio value="hover">Hover</RadioGroup.Radio>
                <RadioGroup.Radio value="never">Never</RadioGroup.Radio>
              </RadioGroup>
            </div>
          </div>

          <div className={styles.option}>
            <Label>Size</Label>
            <div className={styles.flex}>
              <RadioGroup
                display="horizontal"
                value={this.state.size}
                onChange={size => this.setState({size})}
              >
                <RadioGroup.Radio value="small">Small</RadioGroup.Radio>
                <RadioGroup.Radio value="medium">Medium</RadioGroup.Radio>
              </RadioGroup>
            </div>
          </div>

          <div className={styles.option}>
            <Label>Target</Label>
            <div className={styles.flex}>
              <RadioGroup
                display="horizontal"
                value={this.state.target}
                onChange={target => this.setState({target})}
              >
                <RadioGroup.Radio value="_blank">Blank</RadioGroup.Radio>
                <RadioGroup.Radio value="_parent">Parent</RadioGroup.Radio>
                <RadioGroup.Radio value="_self">Self</RadioGroup.Radio>
                <RadioGroup.Radio value="_top">Top</RadioGroup.Radio>
                <RadioGroup.Radio value="framename">Frame</RadioGroup.Radio>
              </RadioGroup>
            </div>
            {this.renderTargetFrame()}
          </div>

          <div className={styles.option}>
            <div className={styles.flex}>
              <div className={styles.paddRight}><Label>Download:</Label></div>
              <ToggleSwitch
                size="small"
                checked={this.state.download}
                onChange={() => this.setState({download: !this.state.download})}
              />
            </div>
          </div>

          <div className={styles.option}>
            <div className={styles.flex}>
              <div className={styles.paddRight}><Label>Dark Background:</Label></div>
              <ToggleSwitch
                size="small"
                checked={this.state.darkBackground}
                onChange={() => this.setState({darkBackground: !this.state.darkBackground})}
              />
            </div>
          </div>

          <div className={styles.option}>
            <div className={styles.flex}>
              <div className={styles.paddRight}><Label>Disabled:</Label></div>
              <ToggleSwitch
                size="small"
                checked={this.state.disabled}
                onChange={() => this.setState({disabled: !this.state.disabled})}
              />
            </div>
          </div>

          <div className={styles.option}>
            <Label>Rel</Label>
            <div className={styles.flex}>
              <Input
                size="small"
                value={this.state.rel}
                onChange={e => this.setState({rel: e.target.value})}
              />
            </div>
          </div>

          <div className={styles.option}>
            <Label>Aria Label</Label>
            <div className={styles.flex}>
              <Input
                size="small"
                value={this.state.ariaLabel}
                onChange={e => this.setState({ariaLabel: e.target.value})}
              />
            </div>
          </div>

          <div className={styles.option}>
            <Label>Color</Label>
            <div className={styles.flex}>
              <Input
                size="small"
                value={this.state.color}
                onChange={e => this.setState({color: e.target.value})}
              />
            </div>
          </div>

          <div className={styles.option}>
            <Label>Hover</Label>
            <div className={styles.flex}>
              <Input
                size="small"
                value={this.state.hover}
                onChange={e => this.setState({hover: e.target.value})}
              />
            </div>
          </div>

        </div>

        <div>
          <Template {...this.state} onChange={this.props.onChange}/>
        </div>
      </from>
    );
  }

  renderTargetFrame() {
    const framename = this.state.framename;

    if (this.state.target !== 'framename') {
      return null;
    }

    return (
      <div className={styles.output}>
        <TextField>
          <Label for="framename">Frame Name</Label>
          <Input
            id="framename"
            size="normal"
            theme="normal"
            value={framename}
            onChange={e => this.setState({framename: e.target.value})}
          />
        </TextField>
      </div>
    );
  }
}

export default TextLinkSnippet;
