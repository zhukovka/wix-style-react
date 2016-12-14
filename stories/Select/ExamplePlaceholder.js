import React from 'react';
import Select from 'wix-style-react/Select';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '200px',
  lineHeight: '22px'
};

const options = [
  {value: 0, text: 'Option 1'},
  {value: 1, text: 'Option 2'},
  {value: 2, text: 'Option 3'},
  {value: 3, text: 'Option 4'},
];

export default () =>
  <div>
    <div className="ltr" style={style}>Standard<Select placeHolder="Please pick one..." options={options}/></div>
  </div>;
