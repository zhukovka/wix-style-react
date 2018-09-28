import React from 'react';
import ChevronLeft from 'wix-ui-icons-common/ChevronLeft';
import ChevronRight from 'wix-ui-icons-common/ChevronRight';

import {Pagination} from '../../src/Pagination';
import {storySettings} from './storySettings';

export default {
  category: storySettings.kind,
  storyName: storySettings.story,
  component: Pagination,
  componentPath: '../../src/Pagination',

  componentProps: {
    'data-hook': storySettings.dataHook,
    totalPages: 15,
    currentPage: 8,
    maxPagesToShow: 9,
    showFirstPage: true,
    showLastPage: true,
    responsive: false,
    showFirstLastNavButtons: false,
    paginationMode: 'pages',
    showInputModeTotalPages: false,
    disabled: false,
    previousLabel: <ChevronLeft/>,
    nextLabel: <ChevronRight/>
  }
};
