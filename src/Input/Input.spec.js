import React from 'react';
import _ from 'lodash/fp';
import ReactTestUtils from 'react-addons-test-utils';
import {componentFactory, inputDriverFactory, inputTestkitFactory} from './testkit/Input';
import Input from '../Input';
import sinon from 'sinon';

describe('Input', () => {

  const createDriver = _.compose(inputDriverFactory, componentFactory);

  describe('value attribute', () => {
    it('should pass down to the wrapped input', () => {
      const value = 'hello';
      const onChange = () => {};
      const driver = createDriver({value, onChange});

      expect(driver.getValue()).toEqual(value);
    });
  });

  describe('defaultValue attribute', () => {
    it('should pass down to the wrapped input', () => {
      const defaultValue = 'hello';

      const driver = createDriver({defaultValue});

      expect(driver.getDefaultValue()).toEqual(defaultValue);
    });
  });

  describe('tabIndex attribute', () => {
    it('should pass down to the wrapped input', () => {

      const tabIndex = 1;

      const driver = createDriver({tabIndex});

      expect(driver.getTabIndex()).toEqual(tabIndex);
    });
  });

  describe('readOnly attribute', () => {
    it('should pass down to the wrapped input', () => {

      const readOnly = true;

      const driver = createDriver({readOnly});

      expect(driver.getReadOnly()).toEqual(readOnly);
    });

    it('should pass down to the wrapped input with default false value', () => {

      const driver = createDriver();

      expect(driver.getReadOnly()).toEqual(false);
    });
  });

  describe('error attribute', () => {
    it('should display an error icon if error is true', () => {
      const error = true;

      const driver = createDriver({error});

      expect(driver.hasExclamation()).toEqual(true);
      expect(driver.hasError()).toBe(true);
    });
  });

  describe('unit attribute', () => {
    it('should the unit text if passed', () => {
      const unit = '$';

      const driver = createDriver({unit});

      expect(driver.getUnit()).toEqual(unit);
    });
  });

  describe('magnifyingGlass attribute', () => {
    it('should display a magnifying glass icon if magnifyingGlass is true', () => {
      const magnifyingGlass = true;

      const driver = createDriver({magnifyingGlass});

      expect(driver.hasMagnifyingGlass()).toEqual(true);
    });

    it('should not display a magnifying glass icon if magnifyingGlass is false', () => {
      const magnifyingGlass = false;

      const driver = createDriver({magnifyingGlass});

      expect(driver.hasMagnifyingGlass()).toEqual(false);
    });

    it('should not display a magnifying glass icon if error is true', () => {
      const magnifyingGlass = true;
      const error = true;

      const driver = createDriver({magnifyingGlass, error});

      expect(driver.hasMagnifyingGlass()).toEqual(false);
    });
  });

  describe('menuArrow attribute', () => {
    it('should display a menu arrow icon if menuArrow is true', () => {
      const menuArrow = true;

      const driver = createDriver({menuArrow});

      expect(driver.hasMenuArrow()).toEqual(true);
    });

    it('should not display a menu arrow icon if menuArrow is false', () => {
      const menuArrow = false;

      const driver = createDriver({menuArrow});

      expect(driver.hasMenuArrow()).toEqual(false);
    });

    it('should not display a menu arrow icon if error is true', () => {
      const menuArrow = true;
      const error = true;

      const driver = createDriver({menuArrow, error});

      expect(driver.hasMenuArrow()).toEqual(false);
    });

    it('should not display a menu arrow icon if magnifyingGlass is true', () => {
      const menuArrow = true;
      const magnifyingGlass = true;

      const driver = createDriver({menuArrow, magnifyingGlass});

      expect(driver.hasMenuArrow()).toEqual(false);
    });
  });

  describe('rtl attribute', () => {
    it('should have rtl if rtl prop is true', () => {
      const rtl = true;

      const driver = createDriver({rtl});

      expect(driver.isRTL()).toBe(true);
    });

    it('should not have rtl if rtl prop is false', () => {
      const rtl = false;

      const driver = createDriver({rtl});

      expect(driver.isRTL()).toBe(false);
    });
  });

  describe('onChange attribute', () => {
    it('should be called when text is entered to the input', () => {
      let receivedEvent;
      const onChange = e => {
        receivedEvent = e;
      };

      const event = {target: {value: 'world'}};

      const driver = createDriver({onChange});

      driver.trigger('change', event);

      expect(receivedEvent.target).toBe(event.target);
    });
  });

  describe('onKeyUp attribute', () => {
    it('should be called after keybord key got pressed and then released', () => {
      let receivedEvent;
      const onKeyUp = e => {
        receivedEvent = e;
      };

      const event = {target: {value: 'world'}};

      const driver = createDriver({onKeyUp});

      driver.trigger('keyUp', event);

      expect(receivedEvent.target).toBe(event.target);
    });
  });

  describe('onFocus attribute', () => {
    it('should be called when the input gets focused', () => {
      const onFocus = jest.fn();

      const driver = createDriver({onFocus});

      driver.trigger('focus');

      expect(onFocus).toBeCalled();
    });
  });

  describe('onBlur attribute', () => {
    it('should be called when the input gets blured', () => {
      const onBlur = jest.fn();

      const driver = createDriver({onBlur});

      driver.trigger('blur');

      expect(onBlur).toBeCalled();
    });
  });

  describe('onKeyDown attribute', () => {
    it('should be called when text is entered to the wrapped input', () => {

      let receivedEvent;
      const onKeyDown = e => {
        receivedEvent = e;
      };

      const event = {keyCode: 40};

      const driver = createDriver({onKeyDown});

      driver.trigger('keyDown', event);

      expect(receivedEvent.keyCode).toBe(event.keyCode);
    });
  });

  describe('endpadding class', () => {
    it('should have endpadding when error is true', () => {
      const error = true;

      const driver = createDriver({error});

      expect(driver.hasEndWrapping()).toBe(true);
    });

    it('should have endpadding when magnifyingGlass is true', () => {
      const magnifyingGlass = true;

      const driver = createDriver({magnifyingGlass});

      expect(driver.hasEndWrapping()).toBe(true);
    });
  });

  describe('forceFocus attribute', () => {
    it('should have focus class on input if forceFocus is true', () => {
      const forceFocus = true;

      const driver = createDriver({forceFocus});

      expect(driver.isFocusedStyle()).toBe(true);
    });
  });

  describe('forceHover attribute', () => {
    it('should have hover class on input if forceHover is true', () => {
      const forceHover = true;

      const driver = createDriver({forceHover});

      expect(driver.isHoveredStyle()).toBe(true);
    });

    it('should be hovered if forceFocus is false and forceHover is true', () => {
      const forceFocus = false;
      const forceHover = true;

      const driver = createDriver({forceHover, forceFocus});

      expect(driver.isHoveredStyle()).toBe(true);
    });
  });

  describe('autoFocus attribute', () => {
    it('Mounting an input element with autoFocus=false, should give it the focus', () => {
      let autoFocus = false;
      const driver = createDriver({autoFocus});
      expect(driver.isFocus()).toBe(false);
      autoFocus = true;
      driver.setProps({autoFocus});
      expect(driver.isFocus()).toBe(false);
    });

    it('Mounting an input element with autoFocus=true, gives it the focus', () => {
      const driver = createDriver({autoFocus: true});
      expect(driver.isFocus()).toBe(true);
    });
  });

  describe('focus function', () => {
    it('calling focus should give focus to the input', () => {
      const driver = createDriver({autoFocus: false});
      expect(driver.isFocus()).toBe(false);
      driver.focus();
      expect(driver.isFocus()).toBe(true);
    });
  });

  describe('theme attribute', () => {
    it('should set the theme by default to "normal"', () => {
      const driver = createDriver({});
      expect(driver.isOfStyle('normal')).toBe(true);
    });

    it('should allowing setting the theme to "paneltitle"', () => {
      const driver = createDriver({theme: 'paneltitle'});
      expect(driver.isOfStyle('paneltitle')).toBe(true);
    });

    it('should allow setting the theme to "material"', () => {
      const driver = createDriver({theme: 'material'});
      expect(driver.isOfStyle('material')).toBe(true);
    });
  });

  describe('onClear attribute', () => {
    it('should not be displayed when text is empty', () => {
      const onClear = sinon.spy();
      const onChange = () => {};
      const driver = createDriver({onClear, value: '', onChange});
      expect(driver.hasClearButton()).toBe(false);
    });

    it('should display a X when text is not null, and be clickable', () => {
      const onClear = sinon.spy();
      const onChange = () => {};
      const driver = createDriver({onClear, value: 'some value', onChange});
      expect(driver.hasClearButton()).toBe(true);
      driver.clickClear();
      expect(onClear.calledOnce).toBe(true);
    });

    it('should display a left icon when one is passed', () => {
      const driver = createDriver({iconLeft: <div/>});
      expect(driver.hasIconLeft()).toBe(true);
    });
  });

  describe('size attribute', () => {

    it('should use "normal" size by default', () => {
      const driver = createDriver({});
      expect(driver.isOfSize('normal')).toEqual(true);
    });

    it('should use "small" size', () => {
      const driver = createDriver({size: 'small'});
      expect(driver.isOfSize('small')).toEqual(true);
    });

    it('should use "large" size', () => {
      const driver = createDriver({size: 'large'});
      expect(driver.isOfSize('large')).toEqual(true);
    });

  });

});

describe('testkit', () => {
  it('should exist', () => {
    const div = document.createElement('div');
    const value = 'hello';
    const onChange = () => {};
    const id = 'myID';
    const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div><Input id={id} value={value} onChange={onChange}/></div>));
    const driver = inputTestkitFactory({wrapper, id});
    expect(driver.exists()).toEqual(true);
  });
});
