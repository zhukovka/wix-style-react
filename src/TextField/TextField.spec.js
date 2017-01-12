import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {textFieldTestkitFactory, componentFactory, textFieldDriverFactory} from './testkit/TextField';
import Input from '../Input';
import _ from 'lodash/fp';
import Label from '../Label';
import TextField from '../TextField';

describe('TextField', () => {

  const createDriver = _.compose(textFieldDriverFactory, componentFactory);

  it('should remove label wrapping when label not given', () => {
    const driver = createDriver({appearance: 'T1', children: <div><Input/></div>});
    expect(driver.getNumberOfChildren()).toBe(1);
  });

  it('should render children', () => {
    const driver = createDriver({appearance: 'T1', children: (<div><Label appearance="T1"/><Input/></div>)});

    expect(driver.getLabel().tagName.toLowerCase()).toBe('label');
    expect(driver.getInput().tagName.toLowerCase()).toBe('input');
  });
});

describe('testkit', () => {
  it('should create new driver', () => {
    const div = document.createElement('div');
    const dataHook = 'compHook';

    const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div>
      <TextField dataHook={dataHook} appearance="T1">
        <Input/>
      </TextField>
    </div>));

    const driver = textFieldTestkitFactory({wrapper, dataHook});
    expect(driver.getAttr('data-hook')).toBe(dataHook);
  });
});
