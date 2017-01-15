import React from 'react';
import {storiesOf} from '@kadira/storybook';

import CodeExample from '../utils/Components/CodeExample';
import Markdown from '../utils/Components/Markdown';

import Readme from '../../src/Composite/README.md';

import ExampleComposite from './ExampleComposite';
import ExampleCompositeRaw from '!raw!./ExampleComposite';

import Breadcrumbs from '../../src/Breadcrumbs/Breadcrumbs';

import ExampleBreadcrumbsRaw from '!raw!./ExampleBreadcrumbs';

storiesOf('6. Common', module)
  .add('6.2 Composites', () => (
    <div>
      <h1>Composites</h1>
      <Markdown source={Readme}/>
      <CodeExample title="Example usage of composition" code={ExampleCompositeRaw}>
        <p>
          Example below requires Label and Input as the only allowed children.
          And when rendering just changes their location.
        </p>
        <ExampleComposite/>
      </CodeExample>
    </div>
  ))
	.add('6.2a Breadcrumbs', () => (
		<div>
			<h1>Breadcrumbs</h1>
			<Markdown source={Readme}/>
			<CodeExample title="Example usage of composition" code={ExampleBreadcrumbsRaw}>
				<p>
					Breadcrumbs
				</p>
				<Breadcrumbs items={[{id: '1', value: 'first item'}]} onClick={() => alert('hello')} size={'large'}/>
			</CodeExample>
		</div>
	));
