import * as React from 'react';
import Collapse from '../../src/Collapse';

function CollapseWithMandatoryProps() {
  return <Collapse />;
}

function CollapseWithAllProps() {
  return (
    <Collapse
      dataHook="hook"
      open
    />
  );
}
