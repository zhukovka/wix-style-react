import WixComponent, {WixComponentProps} from "../BaseComponents/WixComponent";

export interface HighlighterProps extends WixComponentProps {
  match?: string;
}

export default class Highlighter extends WixComponent<HighlighterProps> {}
