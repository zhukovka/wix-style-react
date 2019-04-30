import * as React from 'react';
import { thumbnailTestkitFactory } from '../../testkit';
import { thumbnailTestkitFactory as thumbnailEnzymeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';
import Thumbnail from '../../src/Thumbnail';

async function testkit() {
  const vanilla = thumbnailTestkitFactory({
    dataHook: 'oook',
    wrapper: document.createElement('div'),
  });

  console.log(await vanilla.getDescription());

  const enzyme = thumbnailEnzymeTestkitFactory({
    dataHook: 'oook',
    wrapper: mount(<div/>),
  });

  console.log(await enzyme.getSelectedIcon());
}

function ThumbnailWithMandatoryProps() {
  return <Thumbnail />;
}

function ThumbnailWithAllProps() {
  return <Thumbnail
    dataHook="hoooooook"
    onClick={() => console.log('clicked!')}
    title="hihhhhh"
    size="small"
    width="inherit"
    backgroundImage="www.wix.com"
    image="www.google.com"
    description="hi"
    disabled
    height={100}
    hideSelectedIcon
    onBlur={() => console.log('blurred!')}
    onFocus={() => console.log('focused!')}
    selected
  />;
}
