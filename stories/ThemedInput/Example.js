import React from 'react';
import CoreInput from 'wix-style-react/components/core/Input';
import Input from 'wix-style-react/components/backoffice/Input';

const Example = () => (
  <div style={{width: '500px', display: 'flex', justifyContent: 'space-between'}}>
    <div>
      <h1>Backoffice</h1>
      <CoreInput/>
    </div>

    <div>
      <h1>Core</h1>
      <Input roundInput/>
    </div>
  </div>
);

export default Example;
