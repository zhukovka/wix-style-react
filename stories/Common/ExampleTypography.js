import React from 'react';
import styles from '../../src/text-style.scss';
import classNames from 'classnames';

export default () =>
  <div>
    <h2>Headers</h2>
    <ul className="ltr style-list">
      <li className={styles.h0}>H0 - Helvetica_25 /48px <code>.h0</code></li>
      <li className={styles.h1}>H1 - Helvetica_35 /36px <code>.h1</code></li>
      <li className={styles.h2}>H2 - Helvetica_45 /20px <code>.h2</code></li>
      <li className={classNames(styles.h2_1, 'inverted')}>H2.1 - Helvetica_45 /20px <code>.h2_1</code></li>
      <li className={styles.h3}>H3 - HELVETICA_45 /13px <code>.h3</code></li>
      <li className={styles.h4}>H4 - HELVETICA_55 /10px <code>.h4</code></li>
    </ul>

    <h2>Text</h2>
    <ul className="ltr style-list">
      <li>
        <h3>Body</h3>
        <ul className="ltr style-list">
          <li className={styles.t1}>T1 - Helvetica_45 /16px /24px <code>.t1</code></li>
          <li className={styles.t1_1}>T1.1 - Helvetica_45 /16px /24px <code>.t1_1</code></li>
          <li className={classNames(styles.t1_2, 'inverted')}>T1.2 - Helvetica_45 /16px /24px <code>.t1_2</code></li>
          <li className={styles.t1_3}>T1.3 - Helvetica_45 /16px /24px <code>.t1_3</code></li>
          <li className={styles.t1_4}>T1.4 - Helvetica_45 /16px /24px <code>.t1_4</code></li>
        </ul>
      </li>
      <li>
        <h3>Body Bold</h3>
        <ul className="ltr style-list">
          <li className={styles.t2}>T2 - Helvetica_55 /16px /24px <code>.t2</code></li>
          <li className={styles.t2_1}>T2.1 - Helvetica_55 /16px /24px <code>.t2_1</code></li>
          <li className={classNames(styles.t2_2, 'inverted')}>T2.2 - Helvetica_55 /16px /24px <code>.t2_2</code></li>
          <li className={styles.t2_3}>T2.3 - Helvetica_55 /16px /24px <code>.t2_3</code></li>
        </ul>
      </li>
      <li>
        <h3>Body Small</h3>
        <ul className="ltr style-list">
          <li className={styles.t3}>T3 - Helvetica_45 /14px /18px <code>.t3</code></li>
          <li className={styles.t3_1}>T3.1 - Helvetica_45 /14px /18px <code>.t3_1</code></li>
          <li className={classNames(styles.t3_2, 'inverted')}>T3.2 - Helvetica_45 /14px /18px <code>.t3_2</code></li>
          <li className={styles.t3_3}>T3.3 - Helvetica_45 /14px /18px <code>.t3_3</code></li>
          <li className={styles.t3_4}>T3.4 - Helvetica_45 /14px /18px <code>.t3_4</code></li>
        </ul>
      </li>
      <li>
        <h3>Body Small Bold</h3>
        <ul className="ltr style-list">
          <li className={styles.t4}>T4 - Helvetica_55 /14px /18px <code>.t4</code></li>
          <li className={styles.t4_1}>T4.1 - Helvetica_55 /14px /18px <code>.t4_1</code></li>
          <li className={classNames(styles.t4_2, 'inverted')}>T4.2 - Helvetica_55 /14px /18px <code>.t4_2</code></li>
          <li className={styles.t4_3}>T4.3 - Helvetica_55 /14px /18px <code>.t4_3</code></li>
        </ul>
      </li>
      <li>
        <h3>Text on labels</h3>
        <ul className="ltr style-list">
          <li className={styles.t5}>T5 - HELVETICA_65 /10px <code>.t5</code></li>
          <li className={classNames(styles.t5_1, 'inverted')}>T5.1 - HELVETICA_65 /10px <code>.t5_1</code></li>
        </ul>
      </li>
    </ul>
  </div>;
