import * as React from 'react';
import GenericModalLayout from '../../src/GenericModalLayout';
import {genericModalLayoutTestkitFactory} from '../../testkit';
import {genericModalLayoutTestkitFactory as genericModalLayoutEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = genericModalLayoutTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = genericModalLayoutEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function GenericModalLayoutWithMandatoryProps() {
  return <GenericModalLayout />;
}

function GenericModalLayoutWithAllProps() {
  return (
    <GenericModalLayout
      content="content"
      dataHook="hook"
      footer="footer"
      fullscreen
    />
  );
}
