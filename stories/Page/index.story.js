import React from 'react';
import * as PropTypes from 'prop-types';
import Page from 'wix-style-react/Page';
import Button from 'wix-style-react/Button';
import SomeContentComponent from './SomeContentComponent';
import Breadcrumbs from './Breadcrumbs';
import SomeTailComponent from './SomeTailComponent';

import './Page.scss';
import * as s from './PageExample.scss';

const PageContainer = props => {
  return (
    <div className={s.pageContainer}>
      {props.children}
    </div>
  );
};
PageContainer.propTypes = {
  children: PropTypes.any
};

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
    gradientCoverTail: true,
    backgroundImageUrl: 'https://static.wixstatic.com/media/f0548921c53940ec803dfb1c203e96fe.jpg/v1/fill/w_400,h_100/f0548921c53940ec803dfb1c203e96fe.jpg'
  },

  exampleProps: {
    children: [
      {
        label: 'header, tail & content',
        value: [header(Breadcrumbs), tail, content(false)]
      },
      {
        label: 'header & content',
        value: [header(Breadcrumbs), content(false)]
      },
      {
        label: 'just content',
        value: [content(false)]
      }
    ],
    backgroundImageUrl: [
      {
        label: 'https://some-host.com/image-path.jpg',
        value: 'https://static.wixstatic.com/media/f0548921c53940ec803dfb1c203e96fe.jpg/v1/fill/w_400,h_100/f0548921c53940ec803dfb1c203e96fe.jpg'
      }
    ]
  },
  examples: (
    <div>
      <h1>Test Examples</h1>
      <h2>With Background-Image, Children: Header + Content (Without Tail)</h2>
      <PageContainer>
        <Page
          dataHook="story-page-background-image-header-content"
          children={[header(Breadcrumbs), content(false)]}
          backgroundImageUrl="https://static.wixstatic.com/media/f0548921c53940ec803dfb1c203e96fe.jpg/v1/fill/w_400,h_100/f0548921c53940ec803dfb1c203e96fe.jpg"
          />
      </PageContainer>
      <h2>With Gradient, Children: Header + Content (Without Tail)</h2>
      <PageContainer>
        <Page
          dataHook="story-page-gradient-header-content"
          children={[header(Breadcrumbs), content(false)]}
          gradientClassName="background-gradient"
          />
      </PageContainer>
    </div>
  )
};
