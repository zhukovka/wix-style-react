import SelectDriver from './Select.driver';

describe('Select', () => {
  let driver;
  beforeEach(() => {
    driver = new SelectDriver();
  });

  it('should render select', () => {
    const options = [
      {value: '0', text: 'Option 1'},
      {value: '1', text: 'Option 2'},
      {value: '2', text: 'Option 3'}
    ];

    driver
      .given.options(options)
      .when.created();

    expect(driver.get.renderedOptions().length).toBe(options.length);

    options.forEach((option, index) => {
      expect(driver.get.renderedOptions().at(index).text()).toBe(option.text);
    });
  });

  it('should open select on click', () => {
    const options = [
      {value: '0', text: 'Option 1'},
      {value: '1', text: 'Option 2'},
      {value: '2', text: 'Option 3'}
    ];

    driver
      .given.options(options)
      .when.created();

    expect(driver.get.isSelectOpened()).toBe(false);

    driver.when.openSelect();

    expect(driver.get.isSelectOpened()).toBe(true);
  });

  it('should have initial selected value', () => {
    const options = [
      {value: '0', text: 'Option 1'},
      {value: '1', text: 'Option 2'},
      {value: '2', text: 'Option 3'}
    ];

    driver
      .given.options(options)
      .given.selectedOption('1')
      .when.created();

    expect(driver.get.selectedContentText()).toBe(options[1].text);
  });

  it('should select value', () => {
    const onChange = jest.fn(val => driver.get.element().setProps({value: val}));
    const options = [
      {value: '0', text: 'Option 1'},
      {value: '1', text: 'Option 2'},
      {value: '2', text: 'Option 3'}
    ];

    driver
      .given.options(options)
      .given.onChange(onChange)
      .when.created()
      .when.openSelect()
      .when.clickOptionAt(options[2].value);

    expect(driver.get.selectedContentText()).toBe(options[2].text);
  });

  it('should hover over select items', () => {
    const onChange = jest.fn();
    const options = [
      {value: '0', text: 'Option 1'},
      {value: '1', text: 'Option 2'},
      {value: '2', text: 'Option 3'}
    ];

    driver
      .given.options(options)
      .given.onChange(onChange)
      .when.created();

    expect(driver.get.renderedOptions().at(2).hasClass('hovered')).toBe(false);

    driver
      .when.openSelect()
      .when.mouseEnterOptionAt(options[2].value);

    expect(driver.get.renderedOptions().at(2).hasClass('hovered')).toBe(true);

    driver.when.mouseLeaveOptionAt(options[2].value);

    expect(driver.get.renderedOptions().at(2).hasClass('hovered')).toBe(false);
  });

  it('should close select when pressing "esc" key', () => {
    const onChange = jest.fn();
    const options = [
      {value: '0', text: 'Option 1'},
      {value: '1', text: 'Option 2'},
      {value: '2', text: 'Option 3'}
    ];

    driver
      .given.options(options)
      .given.onChange(onChange)
      .when.createdWithMount()
      .when.openSelect();

    expect(driver.get.isSelectOpened()).toBe(true);

    driver.when.pressEscape();

    expect(driver.get.isSelectOpened()).toBe(false);
  });

  it('should select value when pressing "enter"', () => {
    const onChange = jest.fn(val => driver.get.element().setProps({value: val}));
    const options = [
      {value: '0', text: 'Option 1'},
      {value: '1', text: 'Option 2'},
      {value: '2', text: 'Option 3'}
    ];

    driver
      .given.options(options)
      .given.onChange(onChange)
      .when.createdWithMount()
      .when.openSelect()
      .when.mouseEnterOptionAt(options[2].value)
      .when.pressEnter();

    expect(driver.get.isSelectOpened()).toBe(false);
    expect(driver.get.selectedContentText()).toBe(options[2].text);
  });

  it('should move down between options using keyboard', () => {
    const onChange = jest.fn(val => driver.get.element().setProps({value: val}));
    const options = [
      {value: '0', text: 'Option 1'},
      {value: '1', text: 'Option 2'},
      {value: '2', text: 'Option 3'}
    ];

    driver
      .given.options(options)
      .given.onChange(onChange)
      .when.createdWithMount()
      .when.openSelect()
      .when.mouseEnterOptionAt(options[1].value)
      .when.pressDownArrow()
      .when.pressEnter();

    expect(driver.get.selectedContentText()).toBe(options[2].text);
  });

  it('should move up between options using keyboard', () => {
    const onChange = jest.fn(val => driver.get.element().setProps({value: val}));
    const options = [
      {value: '0', text: 'Option 1'},
      {value: '1', text: 'Option 2'},
      {value: '2', text: 'Option 3'}
    ];

    driver
      .given.options(options)
      .given.onChange(onChange)
      .when.createdWithMount()
      .when.openSelect()
      .when.mouseEnterOptionAt(options[2].value)
      .when.pressUpArrow()
      .when.pressEnter();

    expect(driver.get.selectedContentText()).toBe(options[1].text);
  });
});
