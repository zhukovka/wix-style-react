import React from 'react';
import Button from 'wix-style-react/Button';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '140px',
  lineHeight: '22px'
};

export default () =>
  <div>
    <div style={style}>Main<br/><Button theme="fullgreen">Click Me!</Button></div>
    <div style={style}>Secondary<br/><Button theme="emptygreen">Click Me!</Button></div>
  </div>;
