import * as React from 'react';
import VBox from '../../src/VBox';

function VBoxWithMandatoryProps() {
  return <VBox />;
}

function VBoxWithAllProps() {
  return <VBox horizontalAlignment="left" spacing={3} />;
}
