import * as React from 'react';
import { LabelProps as CoreLabelProps } from 'wix-ui-core/label';
import { WixComponentProps} from 'wix-ui-core/dist/src/createHOC';
import { BackofficeLabelProps } from 'wix-ui-backoffice/dist/src/components/Label/Label';

export interface LabelProps extends CoreLabelProps, BackofficeLabelProps, WixComponentProps {}

export default class Label extends React.PureComponent<LabelProps> {}
