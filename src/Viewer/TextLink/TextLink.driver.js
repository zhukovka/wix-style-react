import ReactTestUtils from 'react-dom/test-utils';
import textLinkDriverFactory from '../../BaseComponents/TextLink/TextLink.driver';

const viewerTextLinkDriverFactory = ({element, wrapper, component}) => {

  const extendsFunc = {
    hoverLink: () => ReactTestUtils.Simulate.mouseEnter(element.children[0]),
    leaveLink: () => ReactTestUtils.Simulate.mouseLeave(element.children[0]),
    getColor: () => element.children[0].style._values.color
  };

  return Object.assign(textLinkDriverFactory({element, wrapper, component}), extendsFunc);
};

export default viewerTextLinkDriverFactory;
