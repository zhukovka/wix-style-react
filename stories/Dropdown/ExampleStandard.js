import React from 'react';
import Dropdown from 'wix-style-react/Dropdown';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '140px',
  lineHeight: '22px'
};

const options = [
  {id: 0, value: 'Option 1'},
  {id: 1, value: 'Option 2'},
  {id: 2, value: 'Option 3'},
  {id: 3, value: 'Option 4'},
];

const rtlOptions = [
  {id: 0, value: 'אופציה 1'},
  {id: 1, value: 'אופציה 2'},
  {id: 2, value: 'אופציה 3'},
  {id: 3, value: 'אופציה 4'},
];

export default () =>
  <div>
    <div className="ltr" style={style}>Left to right<br/><Dropdown options={options}/></div>
    <div className="rtl" style={style}>Right to left<br/><Dropdown options={rtlOptions}/></div>
  </div>;
