import React from 'react';
import {shallow} from 'enzyme';
import Checkbox from './Checkbox';
import CheckboxDriver from '../../testkit/Checkbox';

describe('Checkbox', () => {
  let driver;
  const actions = {
    onChangeHandler: jest.fn()
  }
  beforeEach(() => {
    const wrapper = shallow(
      <Checkbox id="my-cb" onChange={actions.onChangeHandler}/>
    );
    driver = new CheckboxDriver({id: 'my-cb', find: selector => wrapper.find(selector)});
  });

  it('should click a Checkbox', () => {
    driver.change();
    expect(actions.onChangeHandler).toBeCalled();
  });
});
