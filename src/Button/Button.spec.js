import React from 'react';
import {shallow} from 'enzyme';
import Button from './Button';
import ButtonDriver from '../../testkit/Button';

describe('Button', () => {
  let driver;
  const actions = {
    onClickHandler: jest.fn()
  }
  beforeEach(() => {
    const wrapper = shallow(
      <Button id="my-button" onClick={actions.onClickHandler}/>
    );
    driver = new ButtonDriver({id: 'my-button', find: selector => wrapper.find(selector)});
  });

  it('should click a button', () => {
    driver.click();
    expect(actions.onClickHandler).toBeCalled();
  });
});
