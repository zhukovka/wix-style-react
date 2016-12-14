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
    <div className="ltr" style={style}>vAlign center
      <RadioGroup value={1}>
        <div><RadioGroup.Radio vAlign="center" value={1}><div>Option 1</div><small>best option</small></RadioGroup.Radio></div>
        <div><RadioGroup.Radio vAlign="center" value={2}><div>Option 2</div><small>Also pretty good option</small></RadioGroup.Radio></div>
      </RadioGroup>
    </div>

    <div className="ltr" style={style}>vAlign top
      <RadioGroup value={1}>
        <div><RadioGroup.Radio vAlign="top" value={1}><div>Option 1</div><small>best option</small></RadioGroup.Radio></div>
        <div><RadioGroup.Radio vAlign="top" value={2}><div>Option 2</div><small>Also pretty good option</small></RadioGroup.Radio></div>
      </RadioGroup>
    </div>
  </div>;
