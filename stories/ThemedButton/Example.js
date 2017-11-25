import React from 'react';
import Button from 'wix-style-react/components/backoffice/Button';
import CoreButton from 'wix-style-react/components/core/Button';

const Example = () => (
  <div style={{width: '500px', display: 'flex', justifyContent: 'space-between'}}>
    <div>
      <h1>Core</h1>
      <CoreButton>Core</CoreButton>
    </div>

    <div>
      <h1>Backoffice</h1>
      <Button>standard</Button><br/>
      <Button skin="emptyStandard">emptyStandard</Button><br/>
      <Button skin="error">error</Button><br/>
    </div>
  </div>
);

export default Example;
