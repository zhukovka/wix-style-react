import React from 'react';
import ExternalModuleReferer from '../Common/ExternalModuleReferer';
import {storiesOf} from '@storybook/react';
import {CounterBadge} from 'wix-ui-backoffice/dist/src/components/CounterBadge';

const example = (
  <div>
    <div>
      <span>
        One digit:&nbsp;
      </span>
      <CounterBadge>
        1
      </CounterBadge>
    </div>
    <div>
      <span>
        Two digits:&nbsp;
      </span>
      <CounterBadge skin="urgent">
        12
      </CounterBadge>
    </div>
  </div>
);
storiesOf('12. Other', module)
  .add('12.3 CounterBadge', () => (
    <ExternalModuleReferer name="CounterBadge" example={example}/>
  ));
