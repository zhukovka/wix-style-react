import React from 'react';
import InputAreaWithLabelComposite from './InputAreaWithLabelComposite';
import Label from '../../Label';
import Input from '../../Input';
import InputArea from '../../InputArea';
import AutoComplete from '../../AutoComplete';
import textAreaDriverFactory from '../../TextArea/TextArea.driver';
import textFieldDriverFactory from '../../TextField/TextField.driver';
import autoCompleteCompositeDriverFactory from '../../AutoCompleteComposite/AutoCompleteComposite.driver';
import {createDriverFactory} from '../../test-common';

describe('InputAreaWithLabelComposite', () => {
  const createTextAreaDriver = createDriverFactory(textAreaDriverFactory);
  const createTextFieldDriver = createDriverFactory(textFieldDriverFactory);
  const createAutoCompleteDriver = createDriverFactory(autoCompleteCompositeDriverFactory);

  it('should remove label wrapping when label not given', () => {
    const driver = createTextFieldDriver(<InputAreaWithLabelComposite><Input/></InputAreaWithLabelComposite>);
    expect(driver.hasLabel()).toBe(false);
    expect(driver.getNumberOfChildren()).toBe(1);
  });

  it('should render Label with Input', () => {
    const driver = createTextFieldDriver(<InputAreaWithLabelComposite><Label>myLabel</Label><Input/></InputAreaWithLabelComposite>);
    expect(driver.hasLabel()).toBe(true);
    expect(driver.getLabel()).toBe('myLabel');
    expect(driver.hasInput()).toBe(true);
  });

  it('should render Label with InputArea', () => {
    const driver = createTextAreaDriver(<InputAreaWithLabelComposite><Label/><InputArea/></InputAreaWithLabelComposite>);
    expect(driver.hasLabel()).toBe(true);
    expect(driver.hasInputArea()).toBe(true);
  });

  it('should render Label with AutoComplete', () => {
    const driver = createAutoCompleteDriver(<InputAreaWithLabelComposite><Label/><AutoComplete/></InputAreaWithLabelComposite>);
    expect(driver.hasLabel()).toBe(true);
    expect(driver.hasAutoComplete()).toBe(true);
  });
});
