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
    <div style={style}>Small<br/><Button height="small">Click Me!</Button></div>
    <div style={style}>Medium<br/><Button height="medium">Click Me!</Button></div>
    <div style={style}>Large<br/><Button height="large">Click Me!</Button></div>
  </div>;
