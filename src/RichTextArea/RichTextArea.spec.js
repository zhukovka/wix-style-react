import React from 'react';
import {createDriverFactory} from '../test-common';
import richTextAreaDriverFactory from './RichTextArea.driver';
import RichTextArea from './RichTextArea';

describe('RichTextArea', () => {
  let currentValue;

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
    expect(currentValue).toBe(`<p>${text}</p>`);
  });

  it('should render buttons specified in props.buttons', () => {
    const buttons = [
      'bold',
      'italic',
      'underline',
    ];
    const driver = createComponent({buttons});
    expect(driver.getButtonTypes()).toEqual(buttons);
  });

  it('should handle bold button click', () => {
    const driver = createComponent({buttons: ['bold']});
    driver.clickBoldButton();
    driver.enterText('test');

    expect(currentValue).toEqual('<p><strong>test</strong></p>');
  });

  it('should handle italic button click', () => {
    const driver = createComponent({buttons: ['italic']});
    driver.clickItalicButton();
    driver.enterText('test');

    expect(currentValue).toEqual('<p><em>test</em></p>');
  });

  it('should handle underline button click', () => {
    const driver = createComponent({buttons: ['underline']});
    driver.clickUnderlineButton();
    driver.enterText('test');

    expect(currentValue).toEqual('<p><u>test</u></p>');
  });

  const createDriver = createDriverFactory(richTextAreaDriverFactory);
  function createComponent(props) {
    const mergedProps = Object.assign({
      onChange: newValue => currentValue = newValue,
    }, props);
    return createDriver(<RichTextArea {...mergedProps}/>);
  }
});
