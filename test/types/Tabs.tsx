import * as React from 'react';
import Tabs from '../../src/Tabs';
import { tabsTestkitFactory } from '../../testkit';
import { tabsTestkitFactory as tabsEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

async function testkits() {
  const vanilla = tabsTestkitFactory({
    dataHook: 'hoo',
    wrapper: document.createElement('div'),
  });

  vanilla.clickTabAt(0);

  const enzyme = tabsEnzymeTestkitFactory({
    dataHook: 'hoo',
    wrapper: mount(<div/>)
  });

  enzyme.getItemsMaxWidths().forEach(console.log);
}

function TabsWithMandatoryProps() {
  return <Tabs
    items={[{
      id: 123,
      title: <h1>Boom</h1>
    }]}
  />;
}

function TabsWithAllProps() {
  return <Tabs
    items={[{
      id: 123,
      title: <h1>Boom</h1>,
      dataHook: 'h00000k',
    }]}
    styles="border: 50px solid red"
    onClick={tab => console.log(tab.title)}
    dataHook="h000000k"
    width={300}
    minWidth={3000}
    activeId={0}
    hasDivider
    sideContent={<aside />}
    type="uniformFull"
  />;
}
