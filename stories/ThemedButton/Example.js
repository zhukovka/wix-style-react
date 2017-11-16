import React from 'react';
import PropTypes from 'prop-types';
import Button from 'wix-style-react/components/Button';
import WixStyleProvider from '../../src/providers/WixStyleProvider';
import {ArrowDown} from '../../src/Icons/dist';
import backoffice from '../../src/themes/backoffice';
import core from '../../src/themes/core';
import answers from '../../src/themes/answers';

const Example = () =>
  <div style={{width: '500px', display: 'flex', justifyContent: 'space-between'}}>
    <WixStyleProvider theme={core}>
      <div>
        <h1>Core</h1>
        <Button>
          <Button.Prefix><ArrowDown size="12px"/></Button.Prefix>
           Hello
          <Button.Suffix><ArrowDown size="12px"/></Button.Suffix>
        </Button>
      </div>
    </WixStyleProvider>

    <WixStyleProvider theme={backoffice}>
      <div>
        <h1>Backoffice</h1>
        <Button>
          <Button.Prefix><ArrowDown size="12px"/></Button.Prefix>
          Hello
          <Button.Suffix><ArrowDown size="12px"/></Button.Suffix>
        </Button>
        <br/><br/>

        <Button skin="emptyblue">
          <Button.Prefix><ArrowDown size="12px"/></Button.Prefix>
          Hello
          <Button.Suffix><ArrowDown size="12px"/></Button.Suffix>
        </Button>
        <br/><br/>

        <Button skin="fullred">
          <Button.Prefix><ArrowDown size="12px"/></Button.Prefix>
          Hello
          <Button.Suffix><ArrowDown size="12px"/></Button.Suffix>
        </Button>
      </div>
    </WixStyleProvider>

    <WixStyleProvider theme={answers}>
      <div>
        <h1>Answers</h1>
        <Button>
          <Button.Prefix><ArrowDown size="12px"/></Button.Prefix>
          Hello
          <Button.Suffix><ArrowDown size="12px"/></Button.Suffix>
        </Button>
      </div>
    </WixStyleProvider>
  </div>;

Example.propTypes = {
  theme: PropTypes.string
};

export default Example;
