import React from 'react';
import ToggleSwitch from 'wix-style-react/ToggleSwitch';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  lineHeight: '10px'
};

export default () =>
  <div>
    <div style={{...style, lineHeight: '12.6px'}}>Small<br/><br/><ToggleSwitch size="small"/></div>
    <div style={style}>Large<br/><br/><ToggleSwitch checked size="large"/></div>
  </div>;
