import React from 'react';
import PropTypes from 'prop-types';
import Button from 'wix-style-react/components/Button';
import WixStyleProvider from '../../src/providers/WixStyleProvider';
import backoffice from '../../src/themes/backoffice';
import answers from '../../src/themes/answers';

const Example = () =>
  <div style={{width: '500px', display: 'flex', justifyContent: 'space-between'}}>
    <WixStyleProvider>
      <div>
        <h1>Core</h1>
        <Button>
           Hello
        </Button>
      </div>
    </WixStyleProvider>

    <WixStyleProvider theme={backoffice}>
      <div>
        <h1>Backoffice</h1>
        <Button>Hello</Button>
        <br/><br/>

        <Button skin="emptyStandard">Hello</Button>
        <br/><br/>

        <Button skin="danger">Hello</Button>
      </div>
    </WixStyleProvider>

    <WixStyleProvider theme={answers}>
      <div>
        <h1>Answers</h1>
        <Button>Hello</Button>
        <br/><br/>

        <Button skin="attention">Hello</Button>
        <br/><br/>

        <Button skin="danger">Hello</Button>
        <br/><br/>
      </div>
    </WixStyleProvider>
  </div>;

Example.propTypes = {
  theme: PropTypes.string
};

export default Example;
