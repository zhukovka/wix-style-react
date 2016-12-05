import React from 'react';
import {shallow, mount} from 'enzyme';
import GoogleAddressInputBox from './GoogleAddressInputBox';

const componentFactory = () => {
  const createShallow = (props = {}) => {
    return shallow(
      <GoogleAddressInputBox {...props}/>
    );
  };

  const createMount = (props = {}) => {
    return mount(
      <GoogleAddressInputBox {...props}/>
    );
  };

  return {createShallow, createMount};
};

export {componentFactory};
