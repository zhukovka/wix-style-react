import React from 'react';
import {Pagination as CorePagination, PaginationProps} from 'wix-ui-core/Pagination';
import ChevronLeft from 'wix-ui-icons-common/ChevronLeft';
import ChevronRight from 'wix-ui-icons-common/ChevronRight';

import style from './Pagination.st.css';

export {PaginationProps};
export const Pagination = props => <CorePagination {...props} {...style('root', {}, props)}/>;

Pagination.displayName = 'Pagination';
Pagination.defaultProps = {
  showFirstPage: true,
  showLastPage: true,
  responsive: false,
  showFirstLastNavButtons: false,
  paginationMode: 'pages',
  showInputModeTotalPages: false,
  disabled: false,
  previousLabel: <ChevronLeft/>,
  nextLabel: <ChevronRight/>
};
Pagination.propTypes = CorePagination.propTypes;
