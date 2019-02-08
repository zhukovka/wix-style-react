import React from 'react';
import classNames from 'classnames';
import styles from './Pagination.scss';
import PropTypes from 'prop-types';

const Pagination = props => (
  <div className={classNames(props.className, styles.pagination)}>
    {props.totalPages &&
      Array.from({ length: props.totalPages }, (_, index) => {
        return (
          <div
            key={index}
            className={styles.dot}
            data-active={index === props.currentPage}
            onClick={() => props.onClick(index)}
          />
        );
      })}
  </div>
);

//update images on imageUpdate
Pagination.propTypes = {
  className: PropTypes.string,
  /** The amount of pages to show */
  totalPages: PropTypes.number.isRequired,
  /** The active page index (zero based) */
  currentPage: PropTypes.number.isRequired,
  /** On click handler */
  onClick: PropTypes.func.isRequired,
};

Pagination.displayName = 'Pagination';

export default Pagination;
