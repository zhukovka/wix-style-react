import * as React from 'react';
import {mount} from '../../node_modules/@types/enzyme';
import Avatar from '../../src/Avatar';
import {avatarTestkitFactory} from '../../testkit';
import {avatarTestkitFactory as avatarEnzymeTestkitFactory} from '../../testkit/enzyme';

async function testkits() {
  const vanilla = avatarTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  await vanilla.exists();
  await vanilla.getTextContent();

  const enzyme = avatarEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function AvatarWithMandatoryProps() {
  return <Avatar />;
}

function AvatarWithAllProps() {
  return (
    <Avatar
      className="some-class"
      name="as"
      size="size90"
      ariaLabel="asasas"
      color="blue"
      dataHook="sadasd"
      imgProps={{alt: 'asd'}}
      placeholder="blalbal"
      text="some text"
      title="some title"
    />
  );
}
