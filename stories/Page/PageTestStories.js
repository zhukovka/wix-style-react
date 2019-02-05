import React from 'react';
import * as PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';

import Page from 'wix-style-react/Page';
import { getTestStoryKind } from '../storiesHierarchy';

import * as s from './PageTestStories.scss';
import { header, tail, fixedContent, content } from './PageChildren';
import { storySettings } from './storySettings';
import ExampleEmptyState from './ExampleEmptyState';

const PageContainer = props => {
  return (
    <div className={s.pageContainer} {...props}>
      {props.children}
    </div>
  );
};
PageContainer.propTypes = {
  children: PropTypes.any,
};

const kind = getTestStoryKind(storySettings);
const dataHook = 'story-page';

const defaultPageProps = () => ({
  upgrade: true,
  dataHook: dataHook,
  gradientClassName: 'background-gradient',
  children: [header(), content()],
});

const PageTestStories = storiesOf(kind, module);

PageTestStories.add('1. Image', () => (
  <PageContainer>
    <Page
      {...defaultPageProps}
      backgroundImageUrl="https://static.wixstatic.com/media/f0548921c53940ec803dfb1c203e96fe.jpg/v1/fill/w_400,h_100/f0548921c53940ec803dfb1c203e96fe.jpg"
    />
  </PageContainer>
));

PageTestStories.add('2. Gradient', () => (
  <PageContainer>
    <Page {...defaultPageProps} gradientClassName="background-gradient" />
  </PageContainer>
));

PageTestStories.add('3. FC-Image', () => (
  <PageContainer>
    <Page
      {...defaultPageProps}
      children={[header(), fixedContent, content(false)]}
      backgroundImageUrl="https://static.wixstatic.com/media/f0548921c53940ec803dfb1c203e96fe.jpg/v1/fill/w_400,h_100/f0548921c53940ec803dfb1c203e96fe.jpg"
    />
  </PageContainer>
));

PageTestStories.add('4. FC-Gradient', () => (
  <PageContainer>
    <Page
      {...defaultPageProps}
      children={[header(), fixedContent, content(false)]}
      gradientClassName="background-gradient"
    />
  </PageContainer>
));

PageTestStories.add('5. HTC-Image', () => (
  <PageContainer>
    <Page
      {...defaultPageProps}
      children={[header(), tail, content(false)]}
      backgroundImageUrl="https://static.wixstatic.com/media/f0548921c53940ec803dfb1c203e96fe.jpg/v1/fill/w_400,h_100/f0548921c53940ec803dfb1c203e96fe.jpg"
    />
  </PageContainer>
));

PageTestStories.add('6. HTC-Gradient Cover Tail', () => (
  <PageContainer>
    <Page
      {...defaultPageProps}
      children={[header(), tail, content(false)]}
      gradientClassName="background-gradient"
      gradientCoverTail
    />
  </PageContainer>
));

PageTestStories.add('7. Default [min/max]-width', () => (
  <div>
    <Page {...defaultPageProps} />
  </div>
));

PageTestStories.add('8. Custom [min/max]-width', () => (
  <div>
    <Page
      {...defaultPageProps}
      minWidth={504} // With padding: 504 + 48*2 = 600px
      maxWidth={1304} // With padding: 1304 + 48*2 = 1400px
    />
  </div>
));

PageTestStories.add('9. Empty State', () => (
  <PageContainer>
    <ExampleEmptyState {...defaultPageProps} />
  </PageContainer>
));

PageTestStories.add('10. Page Example with short content', () => (
  <PageContainer>
    <Page
      {...defaultPageProps()}
      children={[header(), content({ shortContent: true })]}
    />
  </PageContainer>
));

PageTestStories.add('11. Page Example with sidePadding=0', () => (
  <PageContainer>
    <Page {...defaultPageProps()} sidePadding={0} />
  </PageContainer>
));

PageTestStories.add('12. Page Example with stretchVertically', () => (
  <PageContainer>
    <Page
      {...defaultPageProps()}
      stretchVertically
      children={[
        header(),
        content({ shortContent: true, stretchVertically: true }),
      ]}
    />
  </PageContainer>
));
