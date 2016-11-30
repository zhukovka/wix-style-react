import RadioGroupDriver from './RadioGroup.driver';
import styles from './RadioGroup.scss';

describe('RadioGroup', () => {
  let driver;

  const setProps = newValue => driver.get.element().setProps({value: newValue});
  const noop = () => {};

  beforeEach(() => driver = new RadioGroupDriver());

  it('should check the option that matches the initial value', () => {
    driver
      .given.onChange(noop)
      .given.value(2)
      .given.options([{value: 0}, {value: 1}, {value: 2}])
      .when.created();

    expect(driver.get.radioAt(2).props().checked).toEqual(true);
  });

  it('should not check any options if value was not matched', () => {
    driver
      .given.onChange(noop)
      .given.value(10)
      .given.options([{value: 0}, {value: 1}, {value: 2}])
      .when.created();

    driver.get.allRadios().forEach(node =>
      expect(node.props().checked).toEqual(false)
    );
  });

  it('should call onChange with the correct option value', () => {
    const onChange = jest.fn();

    driver
      .given.onChange(onChange)
      .given.value(0)
      .given.options([{value: 0}, {value: 1}, {value: 2}])
      .when.created();

    driver
      .when.element(1).isChanged();

    expect(onChange).toBeCalledWith(1);
  });

  it('should change the matched options as the value changes', () => {
    driver
      .given.onChange(setProps)
      .given.value(0)
      .given.options([{value: 0}, {value: 1}, {value: 2}])
      .when.created();

    driver
      .when.element(1).isChanged()
      .when.updated();

    expect(driver.get.radioAt(1).props().checked).toEqual(true);
  });

  it('should have a different class based on the vAlign attribute', () => {
    driver
      .given.onChange(setProps)
      .given.options([{value: 0, vAlign: 'center'}, {value: 1, vAlign: 'top'}])
      .when.created();

    expect(driver.get.labelAt(0).hasClass(styles.vcenter)).toEqual(true);
    expect(driver.get.labelAt(1).hasClass(styles.vtop)).toEqual(true);
  });
});
