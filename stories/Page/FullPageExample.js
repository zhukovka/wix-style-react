import React from 'react';
import { storiesOf } from '@storybook/react';
import { bool, number } from 'prop-types';

import Page from 'wix-style-react/Page';
import Button from 'wix-style-react/Button';

import Breadcrumbs from './Breadcrumbs';
import SomeContentComponent from './SomeContentComponent';
import SomeTailComponent from './SomeTailComponent';

const header = breadcrumbs => (
  <Page.Header
    breadcrumbs={breadcrumbs}
    title="Page Title"
    subtitle="Page subtitle"
    showBackButton
    onBackClicked={() => {}}
    actionsBar={<Button>Action</Button>}
  />
);

const content = (showScss, shortContent = false) => (
  <Page.Content>
    <SomeContentComponent showScss={showScss} shortContent={shortContent} />
  </Page.Content>
);

const tail = (
  <Page.Tail>
    <SomeTailComponent />
  </Page.Tail>
);

export class FullPageExample extends React.Component {
  static propTypes = {
    shortContent: bool,
    maxWidth: number,
    sidePadding: number,
    stretchVertically: bool,
    bottomPadding: number,
  };

  render() {
    return (
      <div data-hook="story-full-page-example">
        <div data-hook="side-bar">Sidebar</div>

        <div data-hook="body-content">
          <div data-hook="top-bar">TopBar</div>

          <Page
            maxWidth={this.props.maxWidth}
            sidePadding={this.props.sidePadding}
            bottomPadding={this.props.bottomPadding}
            stretchVertically={this.props.stretchVertically}
          >
            {header(Breadcrumbs)}
            {tail}
            {content(true, this.props.shortContent)}
          </Page>
        </div>
      </div>
    );
  }
}
