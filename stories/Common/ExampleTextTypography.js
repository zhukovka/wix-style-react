import React from 'react';
import typography from '../../src/Typography';
import classNames from 'classnames';

export default () =>
  <ul className="ltr style-list">
    <li>
      <h3>Body</h3>
      <ul className="ltr style-list">
        <li className={typography.t1}>T1 - Helvetica_45 /16px /24px</li>
        <li className={typography.t1_1}>T1.1 - Helvetica_45 /16px /24px</li>
        <li className={classNames(typography.t1_2, 'inverted')}>T1.2 - Helvetica_45 /16px /24px</li>
        <li className={typography.t1_3}>T1.3 - Helvetica_45 /16px /24px</li>
        <li className={typography.t1_4}>T1.4 - Helvetica_45 /16px /24px</li>
      </ul>
    </li>
    <li>
      <h3>Body Bold</h3>
      <ul className="ltr style-list">
        <li className={typography.t2}>T2 - Helvetica_55 /16px /24px</li>
        <li className={typography.t2_1}>T2.1 - Helvetica_55 /16px /24px</li>
        <li className={classNames(typography.t2_2, 'inverted')}>T2.2 - Helvetica_55 /16px /24px</li>
        <li className={typography.t2_3}>T2.3 - Helvetica_55 /16px /24px</li>
      </ul>
    </li>
    <li>
      <h3>Body Small</h3>
      <ul className="ltr style-list">
        <li className={typography.t3}>T3 - Helvetica_45 /14px /18px</li>
        <li className={typography.t3_1}>T3.1 - Helvetica_45 /14px /18px</li>
        <li className={classNames(typography.t3_2, 'inverted')}>T3.2 - Helvetica_45 /14px /18px</li>
        <li className={typography.t3_3}>T3.3 - Helvetica_45 /14px /18px</li>
        <li className={typography.t3_4}>T3.4 - Helvetica_45 /14px /18px</li>
      </ul>
    </li>
    <li>
      <h3>Body Small Bold</h3>
      <ul className="ltr style-list">
        <li className={typography.t4}>T4 - Helvetica_55 /14px /18px</li>
        <li className={typography.t4_1}>T4.1 - Helvetica_55 /14px /18px</li>
        <li className={classNames(typography.t4_2, 'inverted')}>T4.2 - Helvetica_55 /14px /18px</li>
        <li className={typography.t4_3}>T4.3 - Helvetica_55 /14px /18px</li>
      </ul>
    </li>
    <li>
      <h3>Text on labels</h3>
      <ul className="ltr style-list">
        <li className={typography.t5}>T5 - Helvetica_65 /10px</li>
        <li className={classNames(typography.t5_1, 'inverted')}>T5.1 - Helvetica_65 /10px</li>
      </ul>
    </li>
  </ul>;
