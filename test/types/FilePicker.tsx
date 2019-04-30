import * as React from 'react';
import FilePicker from '../../src/FilePicker';

function EndorseContentLayoutWithMandatoryProps() {
  return <FilePicker />;
}

function EndorseContentLayoutWithAllProps() {
  return (
    <FilePicker
      dataHook="hook"
      error
      errorMessage="msg"
      header="header"
      id="id"
      mainLabel="lbl"
      maxSize={123}
      name="name"
      subLabel="lbl"
      supportedFormats="png"
      onChange={e => undefined}
    />
  );
}
