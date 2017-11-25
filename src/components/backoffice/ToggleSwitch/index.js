import React from 'react';
import {oneOf} from 'prop-types';
import CoreToggleSwitch from '../../core/ToggleSwitch';
import {theme} from './theme';
import {ThemedComponent} from '../../core/theme';

const ToggleSwitch = ({size, skin, ...coreProps}) => (
  <ThemedComponent theme={theme} size={size} skin={skin}>
    <CoreToggleSwitch {...coreProps}/>
  </ThemedComponent>
);

ToggleSwitch.propTypes = {
  ...CoreToggleSwitch.propTypes,

  /** size of the toggle switch */
  size: oneOf(['x-small', 'small', 'large']),

  /** Color for disabled toggle switch */
  skin: oneOf(['standard', 'error', 'success'])
};

ToggleSwitch.defaultProps = {
  size: 'large',
  skin: 'standard'
};

export default ToggleSwitch;
