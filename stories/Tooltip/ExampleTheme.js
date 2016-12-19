import React from 'react';
import {Tooltip} from 'wix-style-react';

import styles from './Example.scss';

export default () =>
  <Tooltip active placement="right" alignment="center" content="Dark Theme" showTrigger="custom" hideTrigger="custom" theme="dark">
    <div className={styles.box}>Dark Theme</div>
  </Tooltip>;
