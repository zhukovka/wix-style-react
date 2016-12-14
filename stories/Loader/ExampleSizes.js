import React from 'react';
import Loader from 'wix-style-react/Loader';

export default () =>
  <div>
    <div>
      <p>Small</p>
      <Loader size="small"/>
    </div>
    <div>
      <p>Medium</p>
      <Loader size="medium"/>
    </div>
    <div>
      <p>Large</p>
      <Loader size="large"/>
    </div>
  </div>;
