import React from 'react';
import { string, number } from 'prop-types';

import Heading from '../Heading';

import UnitsHeading from './UnitsHeading';

import styles from './FunnelLabel.scss';

const FunnelLabel = props => (
  <div className={styles.funnelLabel} style={{ width: props.width }}>
    <div className={styles.funnelLabelWrapper}>
      <div className={styles.funnelLabelValue}>
        {props.value ? (
          <UnitsHeading value={props.value} />
        ) : (
          <Heading className={styles.funnelLabelEmptyTitle} ellipsis={false}>
            -
          </Heading>
        )}
      </div>
      <div className={styles.funnelLabelText}>
        <Heading appearance="H5" ellipsis>
          {props.label}
        </Heading>
      </div>
    </div>
  </div>
);

FunnelLabel.propTypes = {
  width: string,
  value: number,
  label: string,
};

export default FunnelLabel;
