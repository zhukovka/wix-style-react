import React from 'react';
import {storySettings} from './storySettings';

import EmptyState from '../../src/EmptyState';
import TextLink from '../../src/TextLink';

import Add from '../../src/new-icons/Add';
import Download from '../../src/new-icons/Download';
import StatusComplete from '../../src/new-icons/StatusComplete';

const imageNodeProp = (
  <div
    style={{
      height: 120,
      width: 120,
      backgroundColor: '#dfe5eb',
      borderRadius: '50%'
    }}
    />
);

const singleAction = (
  <TextLink prefixIcon={<Add/>}>New Item</TextLink>
);

const twoActions = (
  <span>
    <span style={{margin: '0 15px'}}><TextLink prefixIcon={<Add/>}>New Item</TextLink></span>
    <span style={{margin: '0 15px'}}><TextLink prefixIcon={<Download/>}>Import Items</TextLink></span>
  </span>
);


export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,

  component: EmptyState,
  componentPath: '../../src/EmptyState/EmptyState.js',

  componentProps: {
    dataHook: storySettings.dataHook,
    theme: 'page',
    title: 'You don\'t have any items yet',
    subtitle: 'Create your product item in an easy & fast way to display it on your site',
    image: imageNodeProp,
    children: null
  },

  exampleProps: {
    theme: ['page', 'page-no-border', 'section'],
    image: [
      {label: 'No image', value: null},
      {label: 'Image URL', value: 'https://static.wixstatic.com/media/c78d05b79ede429fb77c9d8ec4443b93.jpg/v1/fit/w_375,h_375/c78d05b79ede429fb77c9d8ec4443b93.jpg'},
      {label: 'Node', value: imageNodeProp},
      {label: 'SVG', value: <StatusComplete size="120px"/>}
    ],
    children: [
      {label: 'No children', value: null},
      {label: 'Single action', value: singleAction},
      {label: 'Two actions', value: twoActions}
    ]
  }
};
