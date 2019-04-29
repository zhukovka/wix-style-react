import * as React from 'react';
import Button from '../../src/Button';
import {buttonTestkitFactory} from '../../testkit';
import {buttonTestkitFactory as buttonEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = buttonTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();
  vanilla.getButtonTextContent();

  const enzyme = buttonEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function ButtonWithMandatoryProps() {
  return <Button />;
}

function ButtonWithAllProps() {
  return (
    <Button
      as="button"
      className="cls"
      dataHook="hook"
      disabled
      fullWidth
      onClick={e => undefined}
      prefixIcon={<span/>}
      suffixIcon={<span />}
      priority="primary"
      size="medium"
      skin="dark"
    />
  );
}
