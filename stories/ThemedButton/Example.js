import React from 'react';
import PropTypes from 'prop-types';
import Button from 'wix-style-react/components/Button';
import WixStyleProvider from '../../src/providers/WixStyleProvider';
import {ArrowDown} from '../../src/Icons/dist';
import theme from '../../src/themes/backoffice';

const Example = () =>
  <div>
    <WixStyleProvider theme={theme}>
      <Button>
        <Button.Prefix><ArrowDown size="12px"/></Button.Prefix>
        Hello
        <Button.Suffix><ArrowDown size="12px"/></Button.Suffix>
      </Button>
    </WixStyleProvider>
  </div>;

Example.propTypes = {
  theme: PropTypes.string
};

export default Example;
