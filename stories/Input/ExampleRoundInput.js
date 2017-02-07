import React from 'react';
import Input from 'wix-style-react/Input';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '200px',
  lineHeight: '22px',
  verticalAlign: 'top'
};

const defaultProps = {
  size: 'normal',
  magnifyingGlass: true,
  placeholder: 'They did not know it was impossible, so they did it!',
  unit: '$'
};

export default () =>
  <div className="ltr">
    <div style={style}>
      Small
      <Input {...defaultProps} size="small" roundInput/>
    </div>
    <div style={style}>
      Normal<br/>
      <Input {...defaultProps} size="normal" roundInput/>
    </div>
    <div style={style}>
      Large<br/>
      <Input {...defaultProps} size="large" roundInput/>
    </div>
  </div>;
