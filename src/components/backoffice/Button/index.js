import React from 'react';
import {oneOf} from 'prop-types';
import CoreButton from '../../core/Button';
import {theme} from './theme';
import {ThemedComponent} from '../../core/theme';

const Button = ({height, skin, ...coreProps}) => (
  <ThemedComponent theme={theme} height={height} skin={skin}>
    <CoreButton {...coreProps}/>
  </ThemedComponent>
);

Button.propTypes = {
  ...CoreButton.propTypes,

  /** The height of the button */
  height: oneOf(['small', 'medium', 'large', 'x-large']),

  /** The skin (style) of the button */
  skin: oneOf(['standard', 'emptyStandard', 'error'])
};

Button.defaultProps = {
  height: 'medium',
  skin: 'standard'
};

export default Button;
