import React from 'react';
import {bool} from 'prop-types';
import CoreInput from '../../core/Input';
import {theme} from './theme';
import {ThemedComponent} from '../../core/theme';

const Input = ({roundInput, ...coreProps}) => (
  <ThemedComponent theme={theme} roundInput={roundInput}>
    <CoreInput {...coreProps}/>
  </ThemedComponent>
);

Input.propTypes = {
  ...CoreInput.propTypes,
  /** Is the shape of the input round or not */
  roundInput: bool
};

export default Input;
