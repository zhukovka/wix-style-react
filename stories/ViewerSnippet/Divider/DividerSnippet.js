import React, {Component, PropTypes} from 'react';

import Template from './Template';
import RadioGroup from '../../../src/RadioGroup';
import Label from '../../../src/Label';
import Input from '../../../src/Input';

import styles from './ExampleDivider.scss';

class DividerSnippet extends Component {

  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
  };

  render() {
    return (
      <from className={styles.form}>
        <div className={styles.input}>

          <div className={styles.option}>
            <Label>Direction</Label>
            <div className={styles.flex}>
              <RadioGroup
                display="horizontal"
                value={this.state.direction}
                onChange={direction => this.setState({direction})}
              >
                <RadioGroup.Radio value="horizontal">Horizontal</RadioGroup.Radio>
                <RadioGroup.Radio value="vertical">Vertical</RadioGroup.Radio>
              </RadioGroup>
            </div>
          </div>

          <div className={styles.option}>
            <Label>Size</Label>
            <div className={styles.flex}>
              <Input
                size="small"
                type="number"
                value={this.state.size}
                onChange={e => this.setState({size: e.target.value})}
              />
            </div>
          </div>

          <div className={styles.option}>
            <Label>Length ('px' / '%' / none)</Label>
            <div className={styles.flex}>
              <Input
                size="small"
                value={this.state.length}
                onChange={e => this.setState({length: e.target.value})}
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
            <Label>Opacity</Label>
            <div className={styles.flex}>
              <Input
                size="small"
                type="number"
                value={this.state.opacity}
                onChange={e => this.setState({opacity: e.target.value})}
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
}

export default DividerSnippet;
