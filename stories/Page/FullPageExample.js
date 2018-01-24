import React from 'react';
import {storiesOf} from '@storybook/react';

import Page from 'wix-style-react/Page';
import Button from 'wix-style-react/Button';

import Breadcrumbs from './Breadcrumbs';
import SomeContentComponent from './SomeContentComponent';
import SomeTailComponent from './SomeTailComponent';


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


class FullPageExample extends React.Component {
  render() {
    return (
      <div data-hook="story-page-example">
        <div data-hook="side-bar">Sidebar</div>

        <div data-hook="body-content">
          <div data-hook="top-bar">TopBar</div>

          <Page>
            {header(Breadcrumbs)}
            {tail}
            {content(true)}
          </Page>
        </div>
      </div>
    );
  }
}

storiesOf('2. Layout', module)
  .add('2.5 + Page Example', () =>
    <FullPageExample/>
  );
