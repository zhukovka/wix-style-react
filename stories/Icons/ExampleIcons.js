import React from 'react';
import classNames from 'classnames';
import styles from './ExampleIcons.scss';


export default () =>
    <ul className="ltr style-list">
      <li className={styles.arrowLeftIcon}>Left arrow</li>
      <li className={styles.arrowRightIcon}>Right arrow</li>
      <li className={styles.searchIcon}>Search icon</li>
    </ul>
;
