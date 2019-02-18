import React from 'react';
import { object, number, string } from 'prop-types';
import classnames from 'classnames';

import Tooltip from '../Tooltip';
import Text from '../Text';
import { formatToPercent } from '../utils/numberFormatters';

import styles from './FunnelBadge.scss';

const FunnelBadge = props => (
  <div
    className={classnames(styles.badge, props.className)}
    style={props.styles}
  >
    <Tooltip content={props.tooltip} appendToParent={false} theme="dark">
      <span className={styles.badgeContent}>
        <Text size="tiny" weight="bold">
          {formatToPercent(props.value)}
        </Text>
      </span>
    </Tooltip>
  </div>
);

FunnelBadge.propTypes = {
  styles: object,
  value: number,
  tooltip: string,
  className: string,
};

export default FunnelBadge;
