import React from 'react';
import {storiesOf} from '@kadira/storybook';

import InteractiveCodeExample from '../utils/Components/InteractiveCodeExample';
import Markdown from '../utils/Components/Markdown';

import Readme from '../../src/Breadcrumbs/README.md';

import ExampleBreadcrumbs from '../Breadcrubms/ExampleBreadcrumbs';

storiesOf('6. Common', module)
	.add('6.4 Breadcrumbs', () => (
		<div>
			<Markdown source={Readme}/>
			<InteractiveCodeExample title="Customize a <Breadcrumbs/>">
				<ExampleBreadcrumbs/>
			</InteractiveCodeExample>
		</div>
	));
