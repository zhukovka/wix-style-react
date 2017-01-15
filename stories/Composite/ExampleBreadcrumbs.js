import React from 'react';

import Breadcrumbs from '../../src/Breadcrumbs/Breadcrumbs';

export default () =>
		<div>
			<Breadcrumbs items={[{id: '1', value: 'first item'}]} onClick={() => alert('hello')}/>
		</div>;
