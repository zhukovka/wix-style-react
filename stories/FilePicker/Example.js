import React from 'react';
import FilePicker from 'wix-style-react/FilePicker';

export default () =>
  <div style={{marginBottom: '100px'}}>
    <FilePicker dataHook="story-filepicker" supportedFormats=".png, .pdf" onChange={file => console.log(file.name)}/>
  </div>;
