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
  {value: 4, text: 'Option 5'},
  {value: 5, text: 'Option 6'},
  {value: 6, text: 'Option 7'},
  {value: 7, text: 'Option 8'},
  {value: 8, text: 'Option 9'},
  {value: 9, text: 'Option 10'},
  {value: 10, text: 'Option 11'},
  {value: 11, text: 'Option 12'},
  {value: 12, text: 'Option 13'},
  {value: 13, text: 'Option 14'},
  {value: 14, text: 'Option 15'},
  {value: 15, text: 'Option 16'},
  {value: 16, text: 'Option 17'},
  {value: 17, text: 'Option 18'},
  {value: 18, text: 'Option 19'},
  {value: 19, text: 'Option 20'},
  {value: 20, text: 'Option 21'},
  {value: 21, text: 'Option 22'},
  {value: 22, text: 'Option 23'},
  {value: 23, text: 'Option 24'},
  {value: 24, text: 'Option 25'},
  {value: 25, text: 'Option 26'},
  {value: 26, text: 'Option 27'},
  {value: 27, text: 'Option 28'},
  {value: 28, text: 'Option 29'},
  {value: 29, text: 'Option 30'},
];

export default () =>
  <div>
    <div className="ltr" style={style}>30 options<br/><Dropdown options={options}/></div>
  </div>;
