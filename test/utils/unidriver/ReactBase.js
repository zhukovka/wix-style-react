import { Simulate } from 'react-dom/test-utils';
import { reactUniDriver } from 'wix-ui-test-utils/vanilla';
/**
 *Temporary workaround for implementing missing Unidriver methods in React/DOM only.
 *
 * @param {UniDriver} base
 */
export function ReactBase(base) {
  const htmlElement = () => {
    if (base.type !== 'react') {
      throw new Error('Supported only in React/DOM.');
    }
    return base.getNative();
  };

  const pendingUnidriverFixes = {
    attr: async key => {
      if (base.type === 'react') {
        const attr = await base.attr(key);
        return attr ? attr : null;
      } else {
        return base.attr(key);
      }
    },
    enterValue: async value => {
      if (base.type === 'react') {
        const elem = await htmlElement();
        const { name, type } = elem;
        Simulate.change(elem, {
          target: { name, type, value },
        });
      } else {
        return base.enterValue(value);
      }
    },
    /**
     * Workaround Unidriver react adapter's implementation which dispatches a RAL event, that gets nullified by React.
     * Pending fix in unidriver.
     */
    click: async () => {
      if (base.type === 'react') {
        // setting button 0 is now needed in React 16+ as it's not set by react anymore
        // 15 - https://github.com/facebook/react/blob/v15.6.1/src/renderers/dom/client/syntheticEvents/SyntheticMouseEvent.js#L45
        // 16 - https://github.com/facebook/react/blob/master/packages/react-dom/src/events/SyntheticMouseEvent.js#L33
        const elm = await htmlElement();
        Simulate.mouseDown(elm);
        Simulate.mouseUp(elm);
        Simulate.click(elm, { button: 0 });
      } else {
        return base.click();
      }
    },
  };

  const pendingUnidriverFeatures = {
    pressKey: async key => {
      const elm = await htmlElement();
      Simulate.keyDown(elm, { key });
      Simulate.keyUp(elm, { key });
    },
    isFocus: async () => {
      return document.activeElement === (await htmlElement());
    },
    paste: async () => Simulate.paste(await htmlElement()),
  };

  const unidriverRejected = {
    tagName: async () => (await htmlElement()).tagName,
    focus: async () => {
      const elm = await htmlElement();
      elm.focus();
      Simulate.focus(elm); // TODO: Is this redundant?
    },
    blur: async () => {
      const elm = await htmlElement();
      elm.blur();
      Simulate.blur(elm); // TODO: Is this redundant?
    },
    tabIndex: async () => (await htmlElement()).tabIndex,
    readOnly: async () => (await htmlElement()).readOnly,
    innerHtml: async () => (await htmlElement()).innerHTML,
    required: async () => (await htmlElement()).required,
    defaultValue: async () => (await htmlElement()).defaultValue,
    // TODO: Remove this. use unidriver.text()
    textContent: async () => (await htmlElement()).textContent,
    getStyle: async () => (await htmlElement()).style,
    getClassList: async () => (await htmlElement()).classList,
    /** @returns {array} array of children unidrivers */
    children: async () => {
      const ch = (await htmlElement()).children;
      const uniChildren = [];
      for (let i = 0; i < ch.length; i++) {
        uniChildren.push(reactUniDriver(ch[i]));
      }
      return uniChildren;
    },
  };

  const shouldBePrivate = {
    // TODO: replace methods that use Simulate with a single `simulate`/`eventTrigger` method
    keyup: async () => Simulate.keyUp(await htmlElement()),
    keydown: async key => Simulate.keyDown(await htmlElement(), key),
    mouseLeave: async () => Simulate.mouseLeave(await htmlElement()),
    // TODO: remove selectionStart and use 'prop' method
    selectionStart: async () => (await htmlElement()).selectionStart,
    /** Get a property of the HTMLElement by name */
    prop: async propName => (await htmlElement())[propName],
  };

  return {
    ...pendingUnidriverFixes,
    ...pendingUnidriverFeatures,
    ...unidriverRejected,
    ...shouldBePrivate,
  };
}

ReactBase.clickBody = () =>
  document.body.dispatchEvent(new Event('mouseup', { cancelable: true }));
// TODO: Findout why some tests need clickOutSide to be on document and some on body
ReactBase.clickDocument = () =>
  document.dispatchEvent(new Event('mousedown', { cancelable: true }));
