import React from 'react';
import PropTypes from 'prop-types';

import PageDeprecated from './Page.deprecated';
import PageNew from './Page';
import { allValidators } from '../utils/propTypes';
import deprecationLog from '../utils/deprecationLog';

const Page = props => {
  const { upgrade, ...rest } = props;

  return upgrade ? <PageNew {...rest} /> : <PageDeprecated {...rest} />;
};

Page.propTypes = {
  upgrade: allValidators(PropTypes.bool, (props, propName, componentName) => {
    if (!props[propName]) {
      deprecationLog(`
      ${componentName}: New Page API ! Please set upgrade=true prop to use new Page API.
      See migration docs for more info: https://github.com/wix/wix-style-react/blob/master/src/Page/README.MIGRATION.md
      `);
    }
  }),
};

Page.displayName = 'Page';
Page.Header = PageNew.Header;
Page.Content = PageNew.Content;
Page.FixedContent = PageNew.FixedContent; // TODO: Add deprecationLog, use Page.Sticky instead
Page.Tail = PageNew.Tail;
Page.Sticky = PageNew.Sticky;

export default Page;
