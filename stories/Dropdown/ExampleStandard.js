import React from 'react';
import Dropdown from 'wix-style-react/Dropdown';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '140px',
  lineHeight: '22px'
};

const options = [
  {value: 0, text: 'Option 1'},
  {value: 1, text: 'Option 2'},
  {value: 2, text: 'Option 3'},
  {value: 3, text: 'Option 4'},
];

const rtlOptions = [
  {value: 0, text: 'אופציה 1'},
  {value: 1, text: 'אופציה 2'},
  {value: 2, text: 'אופציה 3'},
  {value: 3, text: 'אופציה 4'},
];

export default () =>
  <div>
    <div className="ltr" style={style}>Left to right<br/><Dropdown value={0} options={options}/></div>
    <div className="rtl" style={style}>Right to left<br/><Dropdown value={0} options={rtlOptions}/></div>
  </div>;
