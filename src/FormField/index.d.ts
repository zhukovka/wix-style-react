import * as React from 'react';
import {TooltipProps} from '../Tooltip';

export interface FormFieldProps {
  children?:
    | React.ReactNode
    | ((data: {setCharactersLeft: CharactersLeftFn}) => React.ReactNode);
  stretchContent?: boolean;
  label?: React.ReactNode;
  labelSize?: LabelPlacement;
  labelPlacement?: FormFieldLabelPlacement;
  required?: boolean;
  infoContent?: React.ReactNode;
  infoTooltipProps?: TooltipProps;
  id?: string;
  dataHook?: string;
}

export default class FormField extends React.Component<FormFieldProps> {}

export type FormFieldLabelPlacement = 'top' | 'right' | 'left';

export type LabelPlacement = 'small' | 'medium';

type CharactersLeftFn = (lengthLeft: number) => void;
