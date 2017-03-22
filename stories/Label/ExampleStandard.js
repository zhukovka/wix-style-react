import React from 'react';
import {Label, Input} from 'wix-style-react';

export default () =>
  <div style={{display: 'flex', alignItems: 'center'}}>
    <Label dataHook="story-label" for="my-input-id" appearance="T1.1">
      Label text
    </Label>&nbsp;
    <Input id="my-input-id"/>
  </div>;
