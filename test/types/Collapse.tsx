import * as React from 'react';
import Collapse from '../../src/Collapse';

function CalendarWithMandatoryProps() {
  return <Collapse />;
}

function CalendarWithAllProps() {
  return (
    <Collapse
      dataHook="hook"
      open
    />
  );
}
