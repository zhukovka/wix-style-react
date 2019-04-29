import * as React from 'react';
import Breadcrumbs from '../../src/Breadcrumbs';
import {breadcrumbsTestkitFactory} from '../../testkit';
import {breadcrumbsTestkitFactory as breadcrumbsEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = breadcrumbsTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();
  vanilla.getActiveItemId();

  const enzyme = breadcrumbsEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function BreadcrumbsWithMandatoryProps() {
  return <Breadcrumbs items={[{id: 1, value: 'foo'}]}/>;
}

function BreadcrumbsWithAllProps() {
  return (
    <Breadcrumbs
      items={[{id: 1, customElement: <span />, value: 'hi', disabled: false, link: 'asda'}]}
      activeId={0}
      dataHook="hook"
      onClick={i => undefined}
      size="medium"
      styles="padding: 10px"
      theme="onDarkBackground"
    />
  );
}
