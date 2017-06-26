import React from 'react';
import dividerDriverFactory from './Divider.driver';
import Divider from './Divider';
import {createDriverFactory} from '../../test-common';
import {dividerTestkitFactory} from '../../../testkit';
import {dividerTestkitFactory as enzymeDividerTestkitFactory} from '../../../testkit/enzyme';
import {isTestkitExists, isEnzymeTestkitExists} from '../../../testkit/test-common';

describe('Divider', () => {

  const createDriver = createDriverFactory(dividerDriverFactory);

  it('should have a divider', () => {
    const driver = createDriver(<Divider/>);

    expect(driver.exists()).toBeTruthy();
  });

  it('should return the default size', () => {
    const defaultSize = 2;

    const driver = createDriver(<Divider/>);

    expect(driver.getSize()).toBe(defaultSize);
  });

  it('should replace the default size', () => {
    const newSize = 5;

    const driver = createDriver(<Divider size={newSize}/>);

    expect(driver.getSize()).toBe(newSize);
  });

  it('should replace the size to max size (12) if size exceed max', () => {
    const newSize = 50;
    const expectedHeight = '12px';

    const driver = createDriver(<Divider size={newSize}/>);

    expect(driver.getHeight()).toBe(expectedHeight);
  });

  it('should return the default direction', () => {
    const defaultDirection = 'horizontal';

    const driver = createDriver(<Divider/>);

    expect(driver.getDirection()).toBe(defaultDirection);
  });

  it('should replace the default direction', () => {
    const newDirection = 'vertical';

    const driver = createDriver(<Divider direction={newDirection}/>);

    expect(driver.getDirection()).toBe(newDirection);
  });

  it('should return the default length', () => {
    const defaultLength = '100px';

    const driver = createDriver(<Divider/>);

    expect(driver.getLength()).toBe(defaultLength);
  });

  it('should replace the default length', () => {
    const newLength = '200px';

    const driver = createDriver(<Divider length={newLength}/>);

    expect(driver.getLength()).toBe(newLength);
  });

  it('should replace the default length and add px if px and % are omitted', () => {
    const newLength = '200';
    const expectedLength = newLength + 'px';

    const driver = createDriver(<Divider length={newLength}/>);

    expect(driver.getWidth()).toBe(expectedLength);
  });

  it('should return the default color', () => {
    const defaultColor = '#18d2de';

    const driver = createDriver(<Divider/>);

    expect(driver.getColor()).toBe(defaultColor);
  });

  it('should replace the default color', () => {
    const newColor = '#123fdc';

    const driver = createDriver(<Divider color={newColor}/>);

    expect(driver.getColor()).toBe(newColor);
  });

  it('should replace the default color even if color do not have #', () => {
    const newColor = '123fdc';
    const expectedColor = '#' + newColor;

    const driver = createDriver(<Divider color={newColor}/>);

    expect(driver.getColor()).toBe(expectedColor);
  });

  it('should return the default opacity', () => {
    const defaultOpacity = '0.2';

    const driver = createDriver(<Divider/>);

    expect(driver.getOpacity()).toBe(defaultOpacity);
  });

  it('should replace the default opacity', () => {
    const newOpacity = 50;
    const expectedOpacity = newOpacity / 100;

    const driver = createDriver(<Divider opacity={newOpacity}/>);

    expect(driver.getOpacity()).toBe(expectedOpacity.toString());
  });

  it('should set style width to be length, style height to be size & border-size to be half of size if direction is horizontal', () => {
    const direction = 'horizontal';
    const length = '150px';
    const size = 5;
    const color = '#11aa66';
    const border = '2.5px solid ' + color;

    const driver = createDriver(<Divider direction={direction} length={length} size={size} color={color}/>);

    expect(driver.getWidth()).toBe(length);
    expect(driver.getHeight()).toBe(size + 'px');
    expect(driver.getBorder()).toBe(border);
  });

  it('should set style width to be size, style height to be length & border-size to be half of size if direction is vertical', () => {
    const direction = 'vertical';
    const length = '150px';
    const size = 5;
    const color = '#11aa66';
    const border = '2.5px solid ' + color;

    const driver = createDriver(<Divider direction={direction} length={length} size={size} color={color}/>);

    expect(driver.getWidth()).toBe(size + 'px');
    expect(driver.getHeight()).toBe(length);
    expect(driver.getBorder()).toBe(border);
  });

});

describe('testkit', () => {
  it('should exist', () => {
    expect(isTestkitExists(<Divider/>, dividerTestkitFactory)).toBe(true);
  });
});

describe('enzyme testkit', () => {
  it('should exist', () => {
    expect(isEnzymeTestkitExists(<Divider/>, enzymeDividerTestkitFactory)).toBe(true);
  });
});
