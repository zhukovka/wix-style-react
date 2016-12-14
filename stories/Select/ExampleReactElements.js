import React from 'react';
import Select from 'wix-style-react/Select';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '200px',
  lineHeight: '22px'
};

const options = [
  {value: 0, text: <span style={{color: 'red'}}>Option 1</span>},
  {value: 1, text: <span style={{color: 'green'}}>Option 2</span>},
  {value: 2, text: <span style={{color: 'blue'}}>Option 3</span>},
  {value: 3, text: <span style={{color: 'brown'}}>Option 4</span>}
];

export default () =>
  <div>
    <div className="ltr" style={style}>Standard<Select value={0} options={options}/></div>
  </div>;
