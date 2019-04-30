import * as React from 'react';
import Tag from '../../src/Tag';
import { tagTestkitFactory } from '../../testkit';
import {tagTestkitFactory as tagEnzymeTestkitFactory} from '../../testkit/enzyme';
import { mount } from 'enzyme';

async function testkits() {
  const vanilla = tagTestkitFactory({
    dataHook: 'hoo',
    wrapper: document.createElement('div'),
  });

  vanilla.click();

  const enzyme = tagEnzymeTestkitFactory({
    dataHook: 'hoo',
    wrapper: mount(<div/>)
  });

  await enzyme.removeTag();
}

function TagWithMandatoryProps() {
  return <Tag id="idddd" />;
}

function TagWithAllProps() {
  return <Tag
    id="id"
    onClick={() => console.log('clicked!')}
    styles="padding: 10px"
    maxWidth={900}
    dataHook="hoookkk"
    size="tiny"
    className="clzzzz"
    disabled
    onRemove={(id) => console.log('removed!', id)}
    removable
    theme="error"
    thumb={<div />}
    wrap
  />;
}
