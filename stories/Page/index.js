import React from 'react';
import story from '../utils/Components/Story';
import CodeExample from '../utils/Components/CodeExample';
import PageExample from './DefaultPage';
import PageExampleRaw from '!raw-loader!./DefaultPage';

story({
  category: 'Core',
  componentSrcFolder: 'Page',
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

    <CodeExample title="Header with title and breadcrumbs with Back" code={PageExampleRaw}>
      <PageExample title="Header with title and breadcrumbs" showBreadcrumbs showBackButton/>
    </CodeExample>

    <CodeExample title="Header with title with Back" code={PageExampleRaw}>
      <PageExample title="Header with title" showBreadcrumbs={false} showBackButton/>
    </CodeExample>

    <CodeExample title="Header with title and subtitle with Back" code={PageExampleRaw}>
      <PageExample title="Header with title and subtitle" subtitle="This is a very very very very long subtitle" showBreadcrumbs={false} showBackButton/>
    </CodeExample>

    <CodeExample title="Header with title, subtitle and breadcrumbs with Back" code={PageExampleRaw}>
      <PageExample title="Header with title, subtitle and breadcrumbs" subtitle="This is a very very very very long subtitle" showBreadcrumbs showBackButton/>
    </CodeExample>
  </div>
});
