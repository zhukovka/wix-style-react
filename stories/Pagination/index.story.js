import {Pagination} from '../../src/Pagination';
import {storySettings} from './storySettings';

export default {
  category: storySettings.kind,
  storyName: storySettings.story,
  component: Pagination,
  componentPath: '../../src/Pagination',

  componentProps: {
    dataHook: storySettings.dataHook,
    totalPages: 15,
    currentPage: 8,
    maxPagesToShow: 9
  }
};
