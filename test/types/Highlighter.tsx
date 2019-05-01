import * as React from 'react';
import Highlighter from '../../src/Highlighter';
import {highlighterTestkitFactory} from '../../testkit';
import {highlighterTestkitFactory as highlighterEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = highlighterTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = highlighterEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function HighlighterWithMandatoryProps() {
  return <Highlighter />;
}

function HighlighterWithAllProps() {
  return <Highlighter match="foo" />;
}
