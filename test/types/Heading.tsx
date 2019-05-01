import * as React from 'react';
import Heading from '../../src/Heading';
import {headingTestkitFactory} from '../../testkit';
import {headingTestkitFactory as headingEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = headingTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = headingEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function GenericModalLayoutWithMandatoryProps() {
  return <Heading />;
}

function GenericModalLayoutWithAllProps() {
  return (
    <Heading
      appearance="H3"
      light
    />
  );
}
