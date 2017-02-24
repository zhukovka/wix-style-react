import React, {Component, PropTypes} from 'react';
import TextField from '../TextField';
import Button from '../Button';
import {Close, Check} from '../Icons';
import Input from '../Input';
import styles from './RichTextAreaLinkForm.scss';

class RichTextAreaLinkForm extends Component {
  state = {};
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className={styles.input}>
          <TextField>
            <Input
              placeholder="Text to display"
              size="small"
              />
          </TextField>
        </div>
        <div className={styles.input}>
          <TextField>
            <Input
              placeholder="URL this link should go to"
              size="small"
              />
          </TextField>
        </div>
        <div className={styles.buttons}>
          <span className={styles.button}>
            <Button theme="icon-standardsecondary" onClick={this.props.onCancel} height="small" type="button">
              <Close width="11" height="11"/>
            </Button>
          </span>
          <span className={styles.button}>
            <Button theme="icon-standard" height="small" type="submit" disabled={this.state.url}>
              <Check width="10" height="12"/>
            </Button>
          </span>
        </div>
      </form>
    );
  }
}

RichTextAreaLinkForm.propTypes = {
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default RichTextAreaLinkForm;
