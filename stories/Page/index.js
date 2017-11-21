import React from 'react';
import story from '../utils/Components/Story';
import CodeExample from '../utils/Components/CodeExample';
import PageExample from './DefaultPage';
import PageExampleRaw from '!raw-loader!./DefaultPage';
import PageHeader from 'wix-style-react/Page/PageHeader';
import Page from 'wix-style-react/Page';
import Content from './Content';
import Breadcrumbs from './Breadcrumbs';

const children = [];
children.push(<Page.Header><PageHeader breadcrumbs={<Breadcrumbs/>} title="This is a Title" subtitle="This is a subtitle"/></Page.Header>);
children.push(<Page.Content><Content/></Page.Content>);

story({
  category: 'Core',
  componentSrcFolder: 'Page',
  componentProps: {
    children,
    dataHook: 'story-page'
  },
  examples:
  <div>
    <CodeExample title="Header with title and breadcrumbs" code={PageExampleRaw}>
      <PageExample title="Header with title and breadcrumbs" showBreadcrumbs/>
    </CodeExample>

    <CodeExample title="Header with title" code={PageExampleRaw}>
      <PageExample title="Header with title" showBreadcrumbs={false}/>
    </CodeExample>

    <CodeExample title="Header with title and subtitle" code={PageExampleRaw}>
      <PageExample title="Header with title and subtitle" subtitle="This is a very very very very long subtitle" showBreadcrumbs={false}/>
    </CodeExample>

    <CodeExample title="Header with title, subtitle and breadcrumbs" code={PageExampleRaw}>
      <PageExample title="Header with title, subtitle and breadcrumbs" subtitle="This is a very very very very long subtitle" showBreadcrumbs/>
    </CodeExample>
  </div>
});
