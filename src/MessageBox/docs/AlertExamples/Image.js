/* eslint-disable react/prop-types */
import React from 'react';
import { MessageBoxFunctionalLayout } from 'wix-style-react/MessageBox';
import surfMusa from '../../../../test/assets/surf-musa.png';

export default () => (
  <MessageBoxFunctionalLayout
    title="Interuption Message"
    confirmText="Main"
    cancelText="Secondary"
    theme="blue"
    dataHook="alert-image"
    image={<img src={surfMusa} />}
  >
    This is a generic message. No harm done, but really needed to interrupt you.
  </MessageBoxFunctionalLayout>
);
