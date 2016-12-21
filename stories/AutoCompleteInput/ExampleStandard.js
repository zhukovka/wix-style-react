import React from 'react';
import AutoCompleteInput from 'wix-style-react/AutoCompleteInput';

const style = {
  display: 'inline-block',
  padding: '0 5px 0',
  width: '200px',
  lineHeight: '22px'
};

const suggestions = [
  {text: 'First suggestion'},
  {text: 'Unselectable suggestion', unselectable: true},
  {text: 'Third suggestion'},
  {node: <span style={{color: 'red'}}>Node suggestion</span>, text: 'Text of node suggestion'},
  {text: 'Very long suggestion text jldlkasj ldk jsalkdjsal kdjaklsjdlkasj dklasj'}
];

const rtlSuggestions = [
  {text: 'אפשרות ראשונה'},
  {text: 'אפשרות שניה'},
  {text: 'אפשרות שלישית'}
];

export default () =>
  <div>
    <div style={style} className="ltr">Left to right<AutoCompleteInput suggestions={suggestions} bottomNode={<small><a href='#'>Footer!</a></small>} header={<div>Header</div>} /></div>
    <div style={style} className="rtl">Right to left<AutoCompleteInput suggestions={rtlSuggestions} rtl/></div>
  </div>;
