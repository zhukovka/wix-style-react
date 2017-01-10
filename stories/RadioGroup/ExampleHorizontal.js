import React from 'react';
import RadioGroup from 'wix-style-react/RadioGroup';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '400px',
  lineHeight: '22px',
  marginBottom: '30px'
};

export default () =>
  <div className="ltr" style={style}>
    <RadioGroup value={1} display="horizontal">
      <RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio>
      <RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio>
      <RadioGroup.Radio value={3}>Option 3</RadioGroup.Radio>
      <RadioGroup.Radio value={4}>Option 4</RadioGroup.Radio>
    </RadioGroup>
  </div>;
