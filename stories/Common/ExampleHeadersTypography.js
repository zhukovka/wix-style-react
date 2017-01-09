import React from 'react';
import {Typography} from '../../src/Typography';
import classNames from 'classnames';

export default () =>
  <ul className="ltr style-list">
    <li className={Typography.H0}>H0 - Helvetica_25 /48px</li>
    <li className={Typography.H1}>H1 - Helvetica_35 /36px</li>
    <li className={Typography.H2}>H2 - Helvetica_45 /20px</li>
    <li className={classNames(Typography.H2_1, 'inverted')}>H2.1 - Helvetica_45 /20px</li>
    <li className={Typography.H3}>H3 - HELVETICA_45 /13px</li>
    <li className={Typography.H4}>H4 - HELVETICA_55 /10px</li>
  </ul>
;
