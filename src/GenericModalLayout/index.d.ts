import WixComponent, {WixComponentProps} from '../BaseComponents/WixComponent';

export interface GenericModalLayoutProps extends WixComponentProps {
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  fullscreen?: boolean;
}

export default class GenericModalLayout extends WixComponent<GenericModalLayoutProps> {}
