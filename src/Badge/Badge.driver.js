import typography, {convertFromUxLangToCss} from '../Typography';
import styles from './Badge.scss';

export default ({element}) => {
  return {
    exists: () => !!element,
    isOfType: type => element.classList.contains(styles[type]),
    isOfAppearance: appearance => element.classList.contains(typography[convertFromUxLangToCss(appearance)]),
    isOfAlignment: alignment => element.classList.contains(styles[alignment]),
    text: () => element.textContent
  };
};
