import React, {Component, PropTypes} from 'react';
import RadioGroup from '../../src/RadioGroup';
import Label from '../../src/Label';
import RichTextAreaTemplate from './RichTextAreaTemplate';
import styles from './RichTextAreaExample.scss';

class RichTextAreaExample extends Component {
  state = {
    type: '',
    error: false,
    errorMessage: '',
  };

  render() {
    return (
      <div>
        <div className={styles.controlGroup}>
          <Label>Error</Label>
          <div className={styles.radioGroup}>
            <RadioGroup
              display="horizontal"
              value={this.state.error}
              onChange={error => this.setState({error})}
              >
              <RadioGroup.Radio value={false}>False</RadioGroup.Radio>
              <RadioGroup.Radio value={true}>True</RadioGroup.Radio>
            </RadioGroup>
          </div>
        </div>
        <div className={styles.controlGroup}>
          <Label>Error message</Label>
          <div className={styles.radioGroup}>
            <RadioGroup
              display="horizontal"
              value={this.state.errorMessage}
              onChange={errorMessage => this.setState({errorMessage})}
              >
              <RadioGroup.Radio value="">None</RadioGroup.Radio>
              <RadioGroup.Radio value="Error message">Error message</RadioGroup.Radio>
            </RadioGroup>
          </div>
        </div>
        <div className={styles.preview}>
          <RichTextAreaTemplate
            onChange={this.props.onChange}
            value={'<p>$$$ Rich text area</p><strong>bold text here</strong>'}
            {...this.state}
            />
        </div>
      </div>
    );
  }
}

RichTextAreaExample.propTypes = {
  onChange: PropTypes.func,
};

export default RichTextAreaExample;

