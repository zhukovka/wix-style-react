import React from 'react';
import GoogleAddressInput from 'wix-style-react/GoogleAddressInput';
import clients from 'wix-style-react/clients';

const style = {
  display: 'inline-block',
  padding: '0 5px 0',
  width: '400px',
  lineHeight: '22px'
};

export default () =>
  <div>
    <div style={style} className="ltr">
      <span>Input should contain address, and be editable.</span>
      <GoogleAddressInput placeholder="Enter address..." Client={clients.GoogleMapsClient} countryCode="US"/>
    </div>
    <div style={style} className="ltr">
      <span>With default</span>
      <GoogleAddressInput placeholder="Enter address..." Client={clients.GoogleMapsClient} countryCode="US" defaultValue="Default Address"/>
    </div>
  </div>;
