import React from 'react';

import Tag from '../../src/Tag';
import { createAutoExampleWrapper } from '../AutoExampleWrapper';

const GREEN_THUMB = (
  <div
    style={{
      height: '100%',
      width: '100%',
      backgroundColor: 'green',
    }}
  />
);

const TagWrapper = ({ story__withThumb, ...rest }) =>
  story__withThumb ? <Tag thumb={GREEN_THUMB} {...rest} /> : <Tag {...rest} />;
TagWrapper.propTypes = Tag.propTypes;
TagWrapper.displayName = Tag.displayName;

import { storySettings } from './storySettings';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: createAutoExampleWrapper(TagWrapper),
  componentPath: '../../src/Tag',
  componentProps: {
    children: 'Hello World',
    dataHook: storySettings.dataHook,
    useOldMargins: false,
  },
  exampleProps: {
    onRemove: id => `ID: ${id} Removed!`,
    onClick: id => `ID: ${id} Clicked!`,
    thumb: [
      {
        label: 'green square',
        value: GREEN_THUMB,
      },
    ],
  },
};
