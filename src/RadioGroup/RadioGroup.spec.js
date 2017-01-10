import {componentFactory, radioGroupDriverFactory} from './RadioGroup.driver';

describe('RadioGroup', () => {
  const options = [{value: 0}, {value: 1}, {value: 2}];
  const {createShallow, createMount} = componentFactory(options);

  const createDriver = args => radioGroupDriverFactory(createShallow(args));
  const createMountDriver = args => radioGroupDriverFactory(createMount(args));
  const noop = () => {};

  it('should check the option that matches the initial value', () => {
    const value = 2;
    const driver = createMountDriver({value, onChange: noop});

    expect(driver.getSelectedValue()).toEqual(value);
    expect(driver.radioAt(2).node.checked).toEqual(true);
  });

  it('should not check any options if value was not matched', () => {
    const value = 10;
    const driver = createDriver({value, onChange: noop});

    driver.allRadios().forEach(node =>
      expect(node.props().checked).toEqual(false)
    );
  });

  it('should call onChange with the correct option value', () => {
    const value = 10;
    const onChange = jest.fn();
    const driver = createMountDriver({value, onChange});

    driver.selectByValue(1);
    expect(onChange).toBeCalledWith(1);
  });

  it('should not call onChange when called upon checked option', () => {
    const value = 1, onChange = jest.fn();
    const component = createMount({
      value,
      onChange
    });

    const driver = radioGroupDriverFactory(component);

    driver.selectByValue(1);
    expect(onChange.mock.calls.length).toBe(0);
  });

  it('should not call onChange when called upon disabled option', () => {
    const onChange = jest.fn();
    const component = createMount({
      onChange,
      disabledRadios: [1]
    });

    const driver = radioGroupDriverFactory(component);

    driver.selectByValue(1);
    expect(onChange.mock.calls.length).toBe(0);
  });

  it('should change the matched options as the value changes', () => {
    const value = 10;
    const component = createMount({
      value,
      onChange: value => component.setProps({value})
    });

    const driver = radioGroupDriverFactory(component);

    driver.selectByValue(1);
    expect(driver.radioAt(1).props().checked).toEqual(true);
  });

  it('should have a default vcenter class based on the vAlign attribute', () => {
    const options = [{value: 0}, {value: 1}];
    const {createMount} = componentFactory(options);

    const component = createMount({
      onChange: value => component.setProps({value})
    });

    const driver = radioGroupDriverFactory(component);

    expect(driver.getClassOfLabelAt(0)).toEqual('vcenter');
    expect(driver.getClassOfLabelAt(1)).toEqual('vcenter');
  });

  it('should have a vtop class based on the vAlign attribute', () => {
    const options = [{value: 0}, {value: 1}];
    const {createMount} = componentFactory(options);

    const component = createMount({
      onChange: noop,
      vAlign: 'top'
    });

    const driver = radioGroupDriverFactory(component);

    expect(driver.getClassOfLabelAt(0)).toEqual('vtop');
    expect(driver.getClassOfLabelAt(1)).toEqual('vtop');
  });

  it('should have a vertical class by default', () => {
    const options = [{value: 0}, {value: 1}];
    const {createMount} = componentFactory(options);

    const component = createMount({});
    const driver = radioGroupDriverFactory(component);

    expect(driver.isVerticalDisplay()).toBeTruthy();
  });

  it('should have a horizontal class', () => {
    const options = [{value: 0}, {value: 1}];
    const {createMount} = componentFactory(options);

    const component = createMount({display: 'horizontal'});
    const driver = radioGroupDriverFactory(component);

    expect(driver.isHorizontalDisplay()).toBeTruthy();
  });
});
