import React from 'react';
import {func, node} from 'prop-types';
import styles from './styles.scss';
import ArrowLeft from '../../../Icons/dist/components/ArrowLeft';

const BackLink = ({onBackHandler, children}) => (
  <a className={styles.backLink} onClick={onBackHandler} data-hook="menu-navigation-back-link">
    <span className={styles.backArrow}><ArrowLeft/></span>
    <span>{children}</span>
  </a>
);

BackLink.propTypes = {
  onBackHandler: func,
  children: node
};

export default BackLink;
