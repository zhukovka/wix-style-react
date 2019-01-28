import { StylableDOMUtil } from '@stylable/dom-test-kit';
import style from './Text.st.css';

const textDriverFactory = ({ element }) => {
  const stylableDOMUtil = new StylableDOMUtil(style);

  return {
    exists: () => !!element,
    getTagName: () => element.tagName.toLowerCase(),
    getText: () => element.innerHTML,
    getSize: () => stylableDOMUtil.getStyleState(element, 'size'),
    getSkin: () => stylableDOMUtil.getStyleState(element, 'skin'),
    getWeight: () => stylableDOMUtil.getStyleState(element, 'weight'),
    isLight: () => stylableDOMUtil.hasStyleState(element, 'light'),
    isSecondary: () => stylableDOMUtil.hasStyleState(element, 'secondary'),
  };
};

export default textDriverFactory;
