import React from 'react';
import {Typography} from '../../src/Typography';
import classNames from 'classnames';

export default () =>
  <ul className="ltr style-list">
    <li>
      <h3>Body</h3>
      <ul className="ltr style-list">
        <li className={Typography.T1}>T1 - Helvetica_45 /16px /24px</li>
        <li className={Typography.T1_1}>T1.1 - Helvetica_45 /16px /24px</li>
        <li className={classNames(Typography.T1_2, 'inverted')}>T1.2 - Helvetica_45 /16px /24px</li>
        <li className={Typography.T1_3}>T1.3 - Helvetica_45 /16px /24px</li>
        <li className={Typography.T1_4}>T1.4 - Helvetica_45 /16px /24px</li>
      </ul>
    </li>
    <li>
      <h3>Body Bold</h3>
      <ul className="ltr style-list">
        <li className={Typography.T2}>T2 - Helvetica_55 /16px /24px</li>
        <li className={Typography.T2_1}>T2.1 - Helvetica_55 /16px /24px</li>
        <li className={classNames(Typography.T2_2, 'inverted')}>T2.2 - Helvetica_55 /16px /24px</li>
        <li className={Typography.T2_3}>T2.3 - Helvetica_55 /16px /24px</li>
      </ul>
    </li>
    <li>
      <h3>Body Small</h3>
      <ul className="ltr style-list">
        <li className={Typography.T3}>T3 - Helvetica_45 /14px /18px</li>
        <li className={Typography.T3_1}>T3.1 - Helvetica_45 /14px /18px</li>
        <li className={classNames(Typography.T3_2, 'inverted')}>T3.2 - Helvetica_45 /14px /18px</li>
        <li className={Typography.T3_3}>T3.3 - Helvetica_45 /14px /18px</li>
        <li className={Typography.T3_4}>T3.4 - Helvetica_45 /14px /18px</li>
      </ul>
    </li>
    <li>
      <h3>Body Small Bold</h3>
      <ul className="ltr style-list">
        <li className={Typography.T4}>T4 - Helvetica_55 /14px /18px</li>
        <li className={Typography.T4_1}>T4.1 - Helvetica_55 /14px /18px</li>
        <li className={classNames(Typography.T4_2, 'inverted')}>T4.2 - Helvetica_55 /14px /18px</li>
        <li className={Typography.T4_3}>T4.3 - Helvetica_55 /14px /18px</li>
      </ul>
    </li>
    <li>
      <h3>Text on labels</h3>
      <ul className="ltr style-list">
        <li className={Typography.T5}>T5 - HELVETICA_65 /10px</li>
        <li className={classNames(Typography.T5_1, 'inverted')}>T5.1 - HELVETICA_65 /10px</li>
      </ul>
    </li>
  </ul>;
