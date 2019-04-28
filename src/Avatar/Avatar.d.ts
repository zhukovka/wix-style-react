declare module 'wix-style-react' {
    export {default as Avatar} from 'wix-style-react/Avatar'
    export {AvatarProps} from 'wix-style-react/Avatar';
  }

declare module 'wix-style-react/Avatar' {
    export type AvatarProps = __WixStyleReact.Avatar.AvatarProps;
    export default __WixStyleReact.Avatar.Avatar;
}

declare namespace __WixStyleReact {
    namespace Avatar {
        export interface AvatarProps  extends WixComponent {
          name?: string;
          text?: string;
          placeholder?: string;
          imgProps: HTMLImageElement;
          ariaLabel?: string;
          title?: string;
          size?:
            | 'size90'
            | 'size72'
            | 'size60'
            | 'size48'
            | 'size36'
            | 'size30'
            | 'size24'
            | 'size18';
          color?: 'blue' | 'green' | 'grey' | 'red' | 'orange';
          className?: string;
          dataHook?: string;
        }
    
        export const Avatar: React.SFC<AvatarProps>;
      }
}

declare namespace __WixStyleReact {
    export interface WixComponentProps {
      dataHook?: string;
      styles?: string;
    }
  
    export class WixComponent<T extends WixComponentProps> extends React.PureComponent<T> {}
    export type Icon = React.ReactNode;
    type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
}  

