import 'react';
import styles from './Input.scss';
import InputDriver from './Input.driver';

describe('Input', () => {
  let driver;

  beforeEach(() => driver = new InputDriver());

  describe('value attribute', () => {
    it('should pass down to the wrapped input', () => {
      driver
        .given.props({value: 'hello'})
        .when.created();

      expect(driver.get.value()).toEqual('hello');
    });
  });

  describe('defaultValue attribute', () => {
    it('should pass down to the wrapped input', () => {
      driver
        .given.props({defaultValue: 'hello'})
        .when.created();

      expect(driver.get.defaultValue()).toEqual('hello');
    });
  });

  describe('tabIndex attribute', () => {
    it('should pass down to the wrapped input', () => {
      driver
        .given.props({tabIndex: 1})
        .when.created();

      expect(driver.get.tabIndex()).toEqual(1);
    });
  });

  describe('error attribute', () => {
    it('should display an error icon if error is true', () => {
      driver
        .given.props({error: true})
        .when.created();

      expect(driver.get.exclamation().length).toEqual(1);
      expect(driver.get.element().hasClass(styles.error)).toBe(true);
    });

    it('should not display an error icon if error is false', () => {
      driver
        .given.props({error: false})
        .when.created();

      expect(driver.get.exclamation().length).toEqual(0);
      expect(driver.get.element().hasClass(styles.error)).toBe(false);
    });
  });

  describe('unit attribute', () => {
    it('should the unit text if passed', () => {
      driver
        .given.props({unit: '$'})
        .when.created();

      expect(driver.get.unit().text()).toEqual('$');
    });
  });

  describe('magnifyingGlass attribute', () => {
    it('should display a magnifying glass icon if magnifyingGlass is true', () => {
      driver
        .given.props({magnifyingGlass: true})
        .when.created();

      expect(driver.get.magnifyingGlass().length).toEqual(1);
    });

    it('should not display a magnifying glass icon if magnifyingGlass is false', () => {
      driver
        .given.props({magnifyingGlass: false})
        .when.created();

      expect(driver.get.magnifyingGlass().length).toEqual(0);
    });

    it('should not display a magnifying glass icon if error is true', () => {
      driver
        .given.props({
          magnifyingGlass: true,
          error: true
        })
        .when.created();

      expect(driver.get.magnifyingGlass().length).toEqual(0);
    });
  });

  describe('rtl attribute', () => {
    it('should have rtl class if rtl is true', () => {
      driver
        .given.props({rtl: true})
        .when.created();

      expect(driver.get.element().hasClass(styles.rtl)).toBe(true);
    });

    it('should not have rtl class if rtl is false', () => {
      driver
        .given.props({rtl: false})
        .when.created();

      expect(driver.get.element().hasClass(styles.rtl)).toBe(false);
    });
  });

  describe('onChange attribute', () => {
    it('should be called when text is entered to the input', () => {
      const onChange = jest.fn();
      const event = {target: {value: 'world'}};

      driver
        .given.props({onChange})
        .when.created();

      driver.when.triggered('change', event);

      expect(onChange).toBeCalledWith(event);
    });
  });

  describe('onFocus attribute', () => {
    it('should be called when the input gets focused', () => {
      const onFocus = jest.fn();

      driver
        .given.props({onFocus})
        .when.created();

      driver.when.triggered('focus');

      expect(onFocus).toBeCalled();
    });
  });

  describe('onBlur attribute', () => {
    it('should be called when the input gets blured', () => {
      const onBlur = jest.fn();

      driver
        .given.props({onBlur})
        .when.created();

      driver.when.triggered('blur');

      expect(onBlur).toBeCalled();
    });
  });

  describe('onKeyDown attribute', () => {
    it('should be called when text is entered to the wrapped input', () => {
      const onKeyDown = jest.fn();
      const event = {keyCode: 40};

      driver
        .given.props({onKeyDown})
        .when.created();

      driver.when.triggered('keyDown', event);

      expect(onKeyDown).toBeCalledWith(event);
    });
  });

  describe('endpadding class', () => {
    it('should have endpadding class when error is true', () => {
      driver
        .given.props({error: true})
        .when.created();

      expect(driver.get.element().hasClass(styles.endpadding)).toBe(true);
    });

    it('should have endpadding class when magnifyingGlass is true', () => {
      driver
        .given.props({magnifyingGlass: true})
        .when.created();

      expect(driver.get.element().hasClass(styles.endpadding)).toBe(true);
    });
  });

  describe('forceFocus attribute', () => {
    it('should have focus class on input if forceFocus is true', () => {
      driver
        .given.props({forceFocus: true})
        .when.created();

      expect(driver.get.input().hasClass(styles.focus)).toBe(true);
    });
  });

  describe('forceHover attribute', () => {
    it('should have hover class on input if forceFocus is true', () => {
      driver
        .given.props({forceHover: true})
        .when.created();

      expect(driver.get.input().hasClass(styles.hover)).toBe(true);
    });

    it('should have hover class on input if forceFocus is true and forceFocus is not true', () => {
      driver
        .given.props({forceHover: true, forceFocus: true})
        .when.created();

      expect(driver.get.input().hasClass(styles.hover)).toBe(false);
    });
  });
});
