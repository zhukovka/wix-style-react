import React from 'react';
import Input from 'wix-style-react/Input';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '200px',
  lineHeight: '22px'
};

export default () =>
  <div>
    <div className="ltr" style={style}>Left to right<Input magnifyingGlass/></div>
    <div className="rtl" style={style}>Right to left<Input rtl magnifyingGlass/></div>
    <div className="ltr" style={style}>With unit<Input magnifyingGlass unit="$"/></div>
    <div className="ltr" style={style}>With error<Input magnifyingGlass error/></div>
    <div className="ltr" style={style}>With unit &amp; error<Input magnifyingGlass error unit="$"/></div>
  </div>;
