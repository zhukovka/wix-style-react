import * as React from 'react';
import Avatar from '../../Avatar';

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
      imgProps={{ alt: 'asd' }}
      placeholder="blalbal"
      text="some text"
      title="some title"
    />
  );
}