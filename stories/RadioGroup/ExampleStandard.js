import React from 'react';
import RadioGroup from 'wix-style-react/RadioGroup';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '200px',
  lineHeight: '22px'
};

const rtlStyle = {
  display: 'inline-block',
  padding: '0 5px',
  width: '95px',
  lineHeight: '22px'
};

export default () =>
  <div>
    <div className="ltr" style={style}>Left to right
      <RadioGroup value={1}>
        <RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio>
        <RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio>
        <RadioGroup.Radio value={3}>Option 3</RadioGroup.Radio>
        <RadioGroup.Radio value={4}>Option 4</RadioGroup.Radio>
      </RadioGroup>
    </div>

    <div className="rtl" style={rtlStyle}>Right to left
      <RadioGroup value={1}>
        <RadioGroup.Radio value={1}>אופציה1</RadioGroup.Radio>
        <RadioGroup.Radio value={2}>אופציה2</RadioGroup.Radio>
        <RadioGroup.Radio value={3}>אופציה3</RadioGroup.Radio>
        <RadioGroup.Radio value={4}>אופציה4</RadioGroup.Radio>
      </RadioGroup>
    </div>
  </div>;
