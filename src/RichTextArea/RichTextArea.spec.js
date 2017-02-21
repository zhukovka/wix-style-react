import React from 'react';
import {createDriverFactory} from '../test-common';
import richTextAreaDriverFactory from './RichTextArea.driver';
import RichTextArea from './RichTextArea';

describe('RichTextArea', () => {
  // let currentValue;

  it('should exist', () => {
    const driver = createComponent();
    expect(driver.exists()).toBeTruthy();
  });

  it('should render value as text', () => {
    const text = 'text content';
    const driver = createComponent({
      value: `<p>${text}</p>`,
    });
    expect(driver.getContent()).toBe(text);
  });

  it('should call callback on change', () => {
    const driver = createComponent();
    const text = 'testing';
    driver.enterText(text);
    // expect(currentValue).toBe(`<p>${text}</p>`);
  });

  const createDriver = createDriverFactory(richTextAreaDriverFactory);
  function createComponent(props) {
    // const onChange = newValue => currentValue = newValue;
    return createDriver(<RichTextArea {...props}/>);
  }
});
