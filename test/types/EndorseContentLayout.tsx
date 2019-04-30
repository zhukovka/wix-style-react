import * as React from 'react';
import EndorseContentLayout from '../../src/EndorseContentLayout';

function EndorseContentLayoutWithMandatoryProps() {
  return <EndorseContentLayout />;
}

function EndorseContentLayoutWithAllProps() {
  return (
    <EndorseContentLayout
      content="content"
      head="head"
      primaryCta="foo"
      secondaryCta="foo"
    />
  );
}
