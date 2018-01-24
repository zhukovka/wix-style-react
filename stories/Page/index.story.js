import React from 'react';

import Page from 'wix-style-react/Page';
import Button from 'wix-style-react/Button';

import SomeContentComponent from './SomeContentComponent';
import Breadcrumbs from './Breadcrumbs';
import SomeTailComponent from './SomeTailComponent';

import './Page.scss';

const header = breadcrumbs =>
  <Page.Header
    breadcrumbs={breadcrumbs}
    title="Page Title"
    subtitle="Page subtitle"
    showBackButton
    onBackClicked={() => {}}
    actionsBar={<Button>Action</Button>}
    />;

const content = showScss =>
  <Page.Content>
    <SomeContentComponent showScss={showScss}/>
  </Page.Content>;

const tail = (
  <Page.Tail>
    <SomeTailComponent/>
  </Page.Tail>
);

export default {
  category: '2. Layout',
  storyName: '2.5 Page',
  name: 'Page',
  component: Page,
  componentPath: '../../src/Page',

  componentProps: {
    children: [header(Breadcrumbs), tail, content(false)],
    dataHook: 'story-page',
    gradientClassName: 'background-gradient',
    backgroundImageUrl: 'https://static.wixstatic.com/media/a9ff3b_9928686dcfa740bd802821d0b6f4ac03.jpg/v1/fill/w_1000,h_250,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_9928686dcfa740bd802821d0b6f4ac03.jpg'
  },

  exampleProps: {
    backgroundImageUrl: [
      '',
      'https://static.wixstatic.com/media/a9ff3b_9928686dcfa740bd802821d0b6f4ac03.jpg/v1/fill/w_1000,h_250,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_9928686dcfa740bd802821d0b6f4ac03.jpg'
    ],
    gradientClassName: ['', 'background-gradient']
  }
};
