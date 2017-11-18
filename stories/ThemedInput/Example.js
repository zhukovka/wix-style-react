import React from 'react';
import PropTypes from 'prop-types';
import Input from 'wix-style-react/components/Input';
import WixStyleProvider from '../../src/providers/WixStyleProvider';
import backoffice from '../../src/themes/backoffice';

const Example = () =>
  <div style={{width: '500px', display: 'flex', justifyContent: 'space-between'}}>
    <WixStyleProvider>
      <div>
        <h1>Core</h1>
        <Input/>
      </div>
    </WixStyleProvider>

    <WixStyleProvider theme={backoffice}>
      <div>
        <h1>Backoffice</h1>
        <Input roundInput/>
      </div>
    </WixStyleProvider>
  </div>;

Example.propTypes = {
  theme: PropTypes.string
};

export default Example;
