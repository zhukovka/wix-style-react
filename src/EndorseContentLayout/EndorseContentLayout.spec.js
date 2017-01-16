import React from 'react';
import {shallow} from 'enzyme';

import EndorseContentLayout from './';
import styles from './styles.scss';

class Driver {
  component;
  when = {
    created: props => this.component = shallow(<EndorseContentLayout {...props}/>)
  }

  get = {
    root: () => this.component.find(`.${styles.root}`),
    head: () => this.component.find(`.${styles.head}`),
    content: () => this.component.find(`.${styles.content}`),
    primaryCta: () => this.component.find(`.${styles.primaryCta}`),
    secondaryCta: () => this.component.find(`.${styles.secondaryCta}`)
  }
}

const driver = new Driver();

describe('EndorseContentLayout', () => {
  it('should render', () => {
    driver.when.created();
    expect(driver.get.root().length).toBe(1);
  });

  const componentsToRender = ['head', 'content', 'primaryCta', 'secondaryCta'];

  it('should render children components from props', () => {
    componentsToRender
      .forEach(c => {
        driver.when.created({[c]: <div>hey hope you render</div>});
        expect(driver.get[c]().text()).toBe('hey hope you render');
      });
  });

  it('should not render anything when prop not given', () => {
    componentsToRender
      .forEach(c => {
        driver.when.created();
        expect(driver.get[c]().length).toBe(0);
      });
  });
});

