import React from 'react';
import {Pagination as CorePagination, PaginationProps} from 'wix-ui-core/Pagination';

import style from './Pagination.st.css';

export {PaginationProps};
export const Pagination = props => <CorePagination {...props} {...style('root', {}, props)}/>;

Pagination.displayName = 'Pagination';
Pagination.defaultProps = {};
Pagination.propTypes = CorePagination.propTypes;
