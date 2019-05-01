import * as React from 'react';
import FloatingNotification from '../../src/FloatingNotification';
import {floatingNotificationTestkitFactory} from '../../testkit';
import {floatingNotificationTestkitFactory as floatingNotificationEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = floatingNotificationTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = floatingNotificationEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function FloatingNotificationWithMandatoryProps() {
  return <FloatingNotification />;
}

function FloatingNotificationWithAllProps() {
  return (
    <FloatingNotification
      buttonProps={{
        as: 'a',
        href: 'https://www.wix.com',
        label: 'Wix.com',
        onClick: e => undefined
      }}
      dataHook="hook"
      onClose={() => undefined}
      showCloseButton
      type="destructive"
      className="asd"
      prefixIcon={<span />}
      text="Some content text"
      textButtonProps={{
        as: 'a',
        href: 'https://www.wix.com',
        label: 'Wix.com',
        onClick: e => undefined
      }}
    />
  );
}
