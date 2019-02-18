import React from 'react';
import { string } from 'prop-types';
import classnames from 'classnames';

import styles from './FunnelChart.scss';

const EmptyFunnel = props => (
  <div className={classnames(styles.funnelEmpty, props.className)}>
    <svg
      className={styles.funnelEmptyImage}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 846 150"
    >
      <g fill="none" fillRule="nonzero">
        <path fill="#C4E7FC" d="M0 0h66v150H0z" />
        <path fill="#EBF7FE" d="M66 0l129 44v106H66z" />
        <path fill="#C4E7FC" d="M195 44h66v106h-66z" />
        <path fill="#EBF7FE" d="M261 45l129 24.679V150H261z" />
        <path fill="#C4E7FC" d="M390 69h66v81h-66z" />
        <path fill="#EBF7FE" d="M456 69l129 32v49H456z" />
        <path fill="#C4E7FC" d="M585 100h66v50h-66z" />
        <path fill="#EBF7FE" d="M651 101l129 24.5V150H651z" />
        <path fill="#C4E7FC" d="M780 125h66v25h-66z" />
      </g>
    </svg>
  </div>
);

EmptyFunnel.propTypes = {
  className: string,
};

export default EmptyFunnel;
