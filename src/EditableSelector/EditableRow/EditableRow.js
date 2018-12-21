import React from 'react';
import PropTypes from 'prop-types';
import WixComponent from '../../BaseComponents/WixComponent';
import Input from '../../Input';
import Tooltip from '../../Tooltip';
import IconButton from '../../IconButton';
import X from '../../new-icons/X';
import Check from '../../new-icons/Check';
import styles from '../EditableSelector.scss';

class EditableRow extends WixComponent {
  static propTypes = {
    newOption: PropTypes.string,
    onApprove: PropTypes.func,
    onCancel: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      newOption: props.newOption || '',
    };
  }

  componentDidMount() {
    super.componentDidMount();
    this.input.focus();
  }

  onApprove = () => {
    this.props.onApprove && this.props.onApprove(this.state.newOption);
  };

  onCancel = () => {
    this.props.onCancel && this.props.onCancel();
  };

  render() {
    return (
      <div data-hook="edit-row-wrapper" className={styles.editableRowContainer}>
        <div className={styles.editableRowInputWrap}>
          <Input
            ref={input => (this.input = input)}
            className={styles.editableRowInput}
            dataHook="edit-row-input"
            value={this.state.newOption}
            onChange={event => this.setState({ newOption: event.target.value })}
            onEnterPressed={() => this.onApprove()}
            onEscapePressed={() => this.onCancel()}
            size="normal"
            textOverflow="clip"
            theme="normal"
            width="initial"
          />
        </div>

        <div className={styles.editableRowButtons}>
          <Tooltip content="Cancel" shouldCloseOnClickOutside theme="dark">
            <IconButton
              onClick={() => this.onCancel()}
              size="medium"
              priority="secondary"
              dataHook="edit-row-cancel-button"
            >
              <X />
            </IconButton>
          </Tooltip>

          <Tooltip content="Confirm" shouldCloseOnClickOutside theme="dark">
            <IconButton
              onClick={() => this.onApprove()}
              size="medium"
              disabled={this.state.newOption.length === 0}
              dataHook="edit-row-approve-button"
            >
              <Check />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    );
  }
}

export default EditableRow;
