import React, { Component, PropTypes } from 'react';
import RadioGroup from '../../src/RadioGroup';
import Label from '../../src/Label';
import RichTextAreaTemplate from './RichTextAreaTemplate';
import styles from './RichTextAreaExample.scss';

class RichTextAreaExample extends Component {
  state = {
    type: '',
  };

  render() {
    return (
      <div>
        <Label>Error</Label>
        <div className={styles.radioGroup}>
          <RadioGroup
            display="horizontal"
            value={this.state.type}
            onChange={errorText => this.setState({errorText})}
          >
            <RadioGroup.Radio value="">None</RadioGroup.Radio>
            <RadioGroup.Radio value="compact">With error</RadioGroup.Radio>
          </RadioGroup>
        </div>
        <div className={styles.preview}>
          <RichTextAreaTemplate onChange={this.props.onChange}/>
        </div>
      </div>
    );
  }
}

RichTextAreaExample.propTypes = {
  onChange: PropTypes.func,
};

export default RichTextAreaExample;

