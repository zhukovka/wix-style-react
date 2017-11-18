import {input as core} from '../../themes/core';
import defaultsDeep from 'lodash/defaultsDeep';

export default ({input}) => {
  input = defaultsDeep(input, core);

  return {
    input: {
      color: input.color,
      background: input.backgroundColor,
      border: `1px solid ${input.borderColor}`,
      borderRadius: input.borderRadius,
      padding: input.padding,
      fontSize: input.fontSize,
      height: input.height,

      '&:hover': {
        ...input.hover
      },

      '&:focus': {
        ...input.focus
      }
    }
  };
};
