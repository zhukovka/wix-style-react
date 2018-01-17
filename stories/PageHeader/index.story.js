import React from 'react';

import PageHeader from 'wix-style-react/PageHeader';
import Button from 'wix-style-react/Button';

import Breadcrumbs from '../Page/Breadcrumbs';
import './PageHeader.scss';

const action = <Button>Action</Button>;

export default {
  category: '10. Page',
  storyName: '10.3 Header with Options',
  component: PageHeader,
  componentPath: '../../src/PageHeader',

  componentProps: {
    onBackClicked: () => {},
    title: 'Page Header',
    dataHook: 'story-page-header'
  },

  exampleProps: {
    breadcrumbs: [null, Breadcrumbs],
    actionsBar: [null, action]
  }
};
