import React from 'react';
import RadioGroup from 'wix-style-react/RadioGroup';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '200px',
  lineHeight: '22px'
};

export default () =>
  <div>
    <div className="ltr" style={style}>Left to right
      <RadioGroup value={1}>
        <div><RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio></div>
        <div><RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio></div>
        <div><RadioGroup.Radio value={3}>Option 3</RadioGroup.Radio></div>
        <div><RadioGroup.Radio value={4}>Option 4</RadioGroup.Radio></div>
      </RadioGroup>
    </div>

    <div className="rtl" style={style}>Right to left
      <RadioGroup value={1}>
        <div><RadioGroup.Radio value={1}>אופציה 1</RadioGroup.Radio></div>
        <div><RadioGroup.Radio value={2}>אופציה 2</RadioGroup.Radio></div>
        <div><RadioGroup.Radio value={3}>אופציה 3</RadioGroup.Radio></div>
        <div><RadioGroup.Radio value={4}>אופציה 4</RadioGroup.Radio></div>
      </RadioGroup>
    </div>
  </div>;
