import React from 'react';

import Page from 'wix-style-react/Page';
import Button from 'wix-style-react/Button';
import SomeContentComponent from './SomeContentComponent';
import SomeTailComponent from './SomeTailComponent';
import Breadcrumbs from './Breadcrumbs';

export const header = props => (
  <Page.Header
    title="Page Title"
    subtitle="Page subtitle"
    showBackButton
    onBackClicked={() => {}}
    actionsBar={<Button>Action</Button>}
    breadcrumbs={Breadcrumbs}
    {...props}
  />
);

export const content = (showScss, prefixContent) => (
  <Page.Content>
    {prefixContent}
    <SomeContentComponent showScss={showScss} />
  </Page.Content>
);

export const tail = (
  <Page.Tail>
    <SomeTailComponent />
  </Page.Tail>
);

export const fixedContent = (
  <Page.FixedContent>
    <div style={{ padding: '10px 0px', backgroundColor: 'white' }}>
      This is a fixedContent
    </div>
  </Page.FixedContent>
);
