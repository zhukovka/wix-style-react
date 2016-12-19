import React from 'react';
import TooltipDriver from './Tooltip.driver';

describe('<Tooltip/>', () => {

  let driver;

  beforeEach(() => driver = new TooltipDriver());

  it('should be hidden by default', () => {
    driver.given.props({content: <div>I am the tooltip</div>});
    driver.when.created(<div>I am the child</div>);
    expect(driver.get.isShown()).toEqual(false);
  });

  it('should show a tooltip once hovering', () => {
    driver.given.props({content: <div/>, showTrigger: 'mouseenter', showDelay: 50});
    driver.when.created(<div>I am the child</div>);
    driver.when.mouseEntered();
    expect(driver.get.isShown()).toEqual(false);
    expect(driver.get.willBeShown()).toEqual(true);
    return resolveIn(100)
      .then(() => {
        expect(driver.get.isShown()).toEqual(true);
        expect(driver.get.willBeShown()).toEqual(false);
      });
  });

});

function resolveIn(timeout) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({});
    }, timeout);
  });
}
