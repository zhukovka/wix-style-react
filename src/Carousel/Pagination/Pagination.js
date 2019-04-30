import React from 'react';
import classNames from 'classnames';
import styles from './Pagination.scss';
import './Pagination.global.scss';
import PropTypes from 'prop-types';

const Pagination = props => (
  <div className={classNames(props.className, styles.pagination)}>
    {React.Children.map(props.children, child => _withDotClass(child))}
  </div>
);

const _withDotClass = child => {
  const props = { className: classNames(child.props.className, styles.dot) };

  return React.cloneElement(child, props);
};

Pagination.propTypes = {
  className: PropTypes.string,
};

Pagination.displayName = 'Pagination';

export default Pagination;
