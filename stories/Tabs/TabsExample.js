import React, {Component, PropTypes} from 'react';
import RadioGroup from '../../src/RadioGroup';
import Label from '../../src/Label';
import TabsTemplate from './TabsTemplate';
import styles from './TabsExample.scss';

class TabsExample extends Component {
  state = {
    type: '',
    hasDivider: true,
  };

  render() {
    return (
      <div>
        <div className={styles.controlGroup}>
          <Label>Type</Label>
          <div className={styles.radioGroup}>
            <RadioGroup
              display="horizontal"
              value={this.state.type}
              onChange={type => this.setState({type})}
              >
              <RadioGroup.Radio value="">Default</RadioGroup.Radio>
              <RadioGroup.Radio value="compact">Compact</RadioGroup.Radio>
              <RadioGroup.Radio value="uniformSide">Uniform (Side)</RadioGroup.Radio>
              <RadioGroup.Radio value="uniformFull">Uniform (Full)</RadioGroup.Radio>
            </RadioGroup>
          </div>
        </div>
        <div className={styles.controlGroup}>
          <Label>Divider</Label>
          <div className={styles.radioGroup}>
            <RadioGroup
              display="horizontal"
              value={this.state.hasDivider}
              onChange={hasDivider => this.setState({hasDivider})}
              >
              <RadioGroup.Radio value={true}>Visible</RadioGroup.Radio>
              <RadioGroup.Radio value={false}>Hidden</RadioGroup.Radio>
            </RadioGroup>
          </div>
        </div>
        <div className={styles.preview}>
          <TabsTemplate
            onChange={this.props.onChange}
            type={this.state.type}
            hasDivider={this.state.hasDivider}
            />
        </div>
      </div>
    );
  }
}

TabsExample.propTypes = {
  onChange: PropTypes.func,
};

export default TabsExample;
