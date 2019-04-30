import * as React from 'react';
import CircularProgressBar from '../../src/CircularProgressBar';
import {circularProgressBarTestkitFactory} from '../../testkit';
import {circularProgressBarTestkitFactory as circularProgressBarEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = circularProgressBarTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = circularProgressBarEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function CircularWithMandatoryProps() {
  return <CircularProgressBar />;
}

function CircularWithAllProps() {
  return (
    <CircularProgressBar
      error
      errorLabel="asd"
      errorMessage="some error message"
      light
      showProgressIndication
      size="medium"
      value={20}
    />
  );
}
