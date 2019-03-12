import React from 'react';

import styles from './RichTextInputAreaForm.scss';
import Tooltip from '../Tooltip';
import Box from '../Box';
import IconButton from '../IconButton';
import { Check, X } from '../new-icons';

class RichTextInputAreaForm extends React.PureComponent {
  render() {
    const { dataHook, children, onSubmit, onCancel, isDisabled } = this.props;

    return (
      <div data-hook={dataHook}>
        {children}
        <div className={styles.footer}>
          <Tooltip content="Cancel" theme="dark" appendToParent>
            <IconButton
              dataHook="richtextarea-form-cancel-button"
              as="button"
              priority="secondary"
              size="small"
              onClick={onCancel}
            >
              <X />
            </IconButton>
          </Tooltip>
          <Box inline marginLeft={1}>
            <Tooltip content="Confirm" theme="dark" appendToParent>
              <IconButton
                dataHook="richtextarea-form-confirm-button"
                as="button"
                size="small"
                onClick={onSubmit}
                disabled={isDisabled}
              >
                <Check />
              </IconButton>
            </Tooltip>
          </Box>
        </div>
      </div>
    );
  }
}

export default RichTextInputAreaForm;
