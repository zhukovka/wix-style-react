import React, {Component, PropTypes} from 'react';
import RadioGroup from '../../src/RadioGroup';
import Label from '../../src/Label';
import Input from '../../src/Input';
import TabsTemplate from './TabsTemplate';
import styles from './TabsExample.scss';

class TabsExample extends Component {
  state = {
    type: '',
    hasDivider: true,
    width: ''
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
        {
          this.state.type === 'uniformSide' ?
            <div className={styles.option}>
              <Label>Tab width</Label>
              <div className={styles.column}>
                <Input placeholder="Set tab width in px (optional)" size="small" type="text"
                       value={this.state.width}
                       onChange={e => this.setState({width: e.target.value})}
                />
              </div>
            </div> :
            null
        }
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
            width={this.state.width}
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
