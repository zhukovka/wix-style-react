// This is a copy of wix-ui-test-utils/vanilla/vanilla.tsx
// TODO: if this works well, then move it to wix-ui-test-utils
import ReactDOM from 'react-dom';
import { reactEnhancedUniDriver } from '../unidriver/adapters/ReactAdapter';

export { testkitFactoryCreator } from 'wix-ui-test-utils/vanilla';

const getElement = ({ wrapper, dataHook }) => {
  const domInstance = ReactDOM.findDOMNode(wrapper);

  if (domInstance) {
    const dataHookOnInstance = domInstance.attributes.getNamedItem(
      'data-hook',
    ) || { value: '' };

    return dataHook === dataHookOnInstance.value
      ? domInstance
      : domInstance.querySelector(`[data-hook='${dataHook}']`);
  }
};

export function uniTestkitFactoryCreator(driverFactory) {
  return testkitArgs => {
    const element = getElement(testkitArgs);
    return driverFactory(reactEnhancedUniDriver(element));
  };
}
