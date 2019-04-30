import * as React from 'react';
import EmptyState from '../../src/EmptyState';
import {emptyStateTestkitFactory} from '../../testkit';
import {emptyStateTestkitFactory as emptyStateEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = emptyStateTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = emptyStateEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function EmptyStateWithMandatoryProps() {
  return <EmptyState />;
}

function EmptyStateWithAllProps() {
  return (
    <EmptyState
      dataHook="hook"
      image="url"
      subtitle="title"
      theme="page"
      title="title"
    />
  );
}
