import React from 'react';
import story from '../utils/Components/Story';
import Button from '../../src/Backoffice/Button';
import Breadcrumbs from '../Page/Breadcrumbs';
import './PageHeader.scss';

const breadcrumbsOptions = [null];
breadcrumbsOptions.push(<Breadcrumbs/>);

const actionsBarOptions = [null];
actionsBarOptions.push(<Button>Action</Button>);

story({
  category: '10. Page',
  storyName: '10.2 Header with Options',
  componentSrcFolder: 'PageHeader',
  componentProps: {
    onBackClicked: () => {},
    title: 'Page Header',
    dataHook: 'story-page-header'
  },
  exampleProps: {
    breadcrumbs: breadcrumbsOptions,
    actionsBar: actionsBarOptions
  }
});
