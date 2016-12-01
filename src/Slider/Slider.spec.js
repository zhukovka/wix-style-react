import SliderDriver from './Slider.driver';

describe('Slider', () => {
  let driver;

  beforeEach(() => {
    driver = new SliderDriver();
  });

  it('should render slider', () => {
    const onChange = jest.fn(value => this.setState({value}));
    const selectedValue = 3;
    const min = 1;
    const max = 10;

    driver
      .given.sliderData({min, max, value: [selectedValue]})
      .given.onChange(onChange)
      .when.created();

    expect(driver.get.sliderDots().length).toBe(10);
    expect(driver.get.sliderHandles().length).toBe(1);
    expect(driver.get.isDotSelected(selectedValue)).toBe(true);
  });

  it('should render slider with multi-range', () => {
    const onChange = jest.fn(value => this.setState({value}));
    const selectedValues = [3, 5, 7];
    const min = 1;
    const max = 10;

    driver
      .given.sliderData({min, max, value: selectedValues})
      .given.onChange(onChange)
      .when.created();

    expect(driver.get.sliderDots().length).toBe(10);
    expect(driver.get.sliderHandles().length).toBe(3);
    selectedValues.forEach(selectedValue => {
      expect(driver.get.isDotSelected(selectedValue)).toBe(true);
    });
  });

  it('should show correct value on hover', () => {
    const onChange = jest.fn(value => this.setState({value}));
    const selectedValues = [3, 5, 7];
    const min = 1;
    const max = 10;

    driver
      .given.sliderData({min, max, value: selectedValues})
      .given.onChange(onChange)
      .when.created()
      .when.hoverHandle({handleIndex: 0});

    expect(driver.get.toolTipValue()).toBe(`${selectedValues[0]}`);

    driver
      .when.unHoverHandle({handleIndex: 0})
      .when.hoverHandle({handleIndex: 1});

    expect(driver.get.toolTipValue()).toBe(`${selectedValues[1]}`);
  });
});
