import SliderDriver from './Slider.driver';

describe('Slider', () => {
  let driver;

  beforeEach(() => {
    driver = new SliderDriver();
  });

  it('should render slider', () => {
    const onChange = jest.fn(value => this.setState({value}));

    driver
      .given.sliderData({min: 1, max: 10, value: [3]})
      .given.onChange(onChange)
      .when.created();

    expect(driver.get.sliderMarks().length).toBe(10);
    expect(driver.get.sliderHandles().length).toBe(1);
  });

  it('should render slider with multi-range', () => {
    const onChange = jest.fn(value => this.setState({value}));

    driver
      .given.sliderData({min: 1, max: 10, value: [3, 5, 7]})
      .given.onChange(onChange)
      .when.created();

    expect(driver.get.sliderMarks().length).toBe(10);
    expect(driver.get.sliderHandles().length).toBe(3);
  });

  it('should show correct value on hover', () => {
    const onChange = jest.fn(value => this.setState({value}));

    const handleInitialValues = [3, 5, 7];

    driver
      .given.sliderData({min: 1, max: 10, value: handleInitialValues})
      .given.onChange(onChange)
      .when.created()
      .when.hoverHandle({handleIndex: 0});

    expect(driver.get.toolTipValue()).toBe(`${handleInitialValues[0]}`);

    driver
      .when.unHoverHandle({handleIndex: 0})
      .when.hoverHandle({handleIndex: 1});

    expect(driver.get.toolTipValue()).toBe(`${handleInitialValues[1]}`);
  });
});
