import SelectDriver from './Select.driver';

describe('Select', () => {
  let driver;
  beforeEach(() => {
    driver = new SelectDriver();
  });

  it('should render select', () => {
    const options = [
      {value:'0', text:'Option 1'},
      {value:'1', text:'Option 2'},
      {value:'2', text:'Option 3'}
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
      {value:'0', text:'Option 1'},
      {value:'1', text:'Option 2'},
      {value:'2', text:'Option 3'}
    ];

    driver
      .given.options(options)
      .when.created();

    expect(driver.get.content().length).toBe(0);

    driver.when.openSelect();

    expect(driver.get.content().length).toBe(1);
  });

  it('should have initial selected value', () => {
    const options = [
      {value:'0', text:'Option 1'},
      {value:'1', text:'Option 2'},
      {value:'2', text:'Option 3'}
    ];

    driver
      .given.options(options)
      .given.selectedOption('1')
      .when.created();

    expect(driver.get.selectedContent().text()).toBe(options[1].text);
  });

  it('should select value', () => {
    const onChange = jest.fn(val => driver.get.element().setProps({value: val}));
    const options = [
      {value:'0', text:'Option 1'},
      {value:'1', text:'Option 2'},
      {value:'2', text:'Option 3'}
    ];

    driver
      .given.options(options)
      .given.onChange(onChange)
      .when.created()
      .when.openSelect()
      .when.clickOption(options[2].value);

    expect(driver.get.selectedContent().text()).toBe(options[2].text);
  });
});
