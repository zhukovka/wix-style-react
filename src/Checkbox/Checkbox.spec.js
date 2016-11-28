import React from 'react';
import {shallow} from 'enzyme';
import styles from './Checkbox.scss';
import Checkbox from './Checkbox';
import CheckboxDriver from '../../testkit/Checkbox';

describe('Checkbox', () => {
  let checked = false;
  let testkitDriver;
  let wrapper;

  const actions = {
    onChangeHandler: jest.fn(() => {checked = !checked; wrapper.setProps({checked: checked});})
  }

  beforeEach(() => {
    checked = false;
    wrapper = shallow(
      <Checkbox id="my-cb" checked={checked} onChange={actions.onChangeHandler} />
    );
    testkitDriver = new CheckboxDriver({id: 'my-cb', find: selector => wrapper.find(selector)});
  });

  it('should click a Checkbox', () => {
    testkitDriver.change();
    expect(actions.onChangeHandler).toBeCalled();
  });

  it('should have correct class after checked/unchecked', () => {
    expect(wrapper.find(`.${styles.wrapper}`).hasClass(styles.checked)).toBe(false);
    expect(wrapper.find(`.${styles.wrapper}`).hasClass(styles.unchecked)).toBe(true);
    testkitDriver.change();
    expect(wrapper.find(`.${styles.wrapper}`).hasClass(styles.checked)).toBe(true);
    testkitDriver.change();
    expect(wrapper.find(`.${styles.wrapper}`).hasClass(styles.checked)).toBe(false);
    expect(wrapper.find(`.${styles.wrapper}`).hasClass(styles.unchecked)).toBe(true);
  });
});
