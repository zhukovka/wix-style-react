import React from 'react';
import { array } from 'prop-types';
import classnames from 'classnames';
import Fragment from 'react-dot-fragment';

import FunnelBadge from './FunnelBadge';
import FunnelLabel from './FunnelLabel';

import { countPercentageFromBase } from '../utils/numberFormatters';

import styles from './FunnelChart.scss';

const calculateHeights = (arr, total) => arr.map(i => countPercentageFromBase(total, i.value, 0));

const FIXED_PERCENT_BADGE_POSITION = 0.6;
const BADGE_MAX_TOP_POSITION = 86;
const BADGE_OVERFLOWED_TOP_POSITION = 10;

const FunnelChart = props => {
  const { dataset } = props;
  const total = dataset[0].value;
  const heights = calculateHeights(dataset, total);
  const itemsLength = dataset.length;
  const defWidth = `calc((100% - ${itemsLength} * ${
    styles.barWidth
  }px) / ${itemsLength - 1})`;
  const semiWidth = `calc((100% - ${itemsLength} * ${
    styles.barWidth
  }px) / ${(itemsLength - 1) * 2} + ${styles.barWidth / 2}px)`;

  return (
    <div>
      <section className={styles.funnel}>
        {dataset.map((item, index) => {
          const currHeight = heights[index] > 100 ? 100 : heights[index];
          const nextHeight = heights[index + 1];
          const nexDeltaHeight = currHeight - nextHeight;
          const prevDeltaHeight = 100 - currHeight;
          const calculatedBadgePosition = Math.max(
            prevDeltaHeight + nexDeltaHeight * FIXED_PERCENT_BADGE_POSITION,
            100 - BADGE_MAX_TOP_POSITION,
          );

          const badgeTopPosition =
            calculatedBadgePosition < 0
              ? BADGE_OVERFLOWED_TOP_POSITION
              : calculatedBadgePosition;

          return (
            <Fragment key={item.title || index}>
              <div className={styles.funnelItem}>
                <div
                  style={{ height: `${currHeight}%` }}
                  className={styles.funnelItemFilled}
                />
              </div>

              {index !== dataset.length - 1 && (
                <div
                  className={classnames(styles.funnelStepWrapper, {
                    [styles.funnelStepWrapperZeroDelta]: nexDeltaHeight === 0,
                    [styles.funnelStepWrapperZeroValue]: nextHeight === 0,
                  })}
                >
                  <div
                    className={styles.funnelStepRotated}
                    style={{
                      height: `${nexDeltaHeight}%`,
                    }}
                  />
                  <div
                    className={styles.funnelStep}
                    style={{ height: `${nextHeight}%` }}
                  />
                  <div
                    className={styles.funnelStepPlaceholder}
                    style={{
                      top: `${prevDeltaHeight}%`,
                      height: `${nexDeltaHeight}%`,
                    }}
                  />

                  <FunnelBadge
                    className={
                      badgeTopPosition > BADGE_MAX_TOP_POSITION &&
                      styles.badgeZeroDelta
                    }
                    tooltip={item.tooltip}
                    styles={{ top: `${badgeTopPosition}%` }}
                    value={countPercentageFromBase(
                      +item.value,
                      +dataset[index + 1].value,
                      0,
                    )}
                  />
                </div>
              )}
            </Fragment>
          );
        })}
      </section>
      <section className={styles.funnelLabelList}>
        {dataset.map((item, index) => {
          return (
            <FunnelLabel
              key={item.title}
              value={item.value}
              label={item.title}
              width={
                index === itemsLength - 1 || index === 0 ? semiWidth : defWidth
              }
            />
          );
        })}
      </section>
    </div>
  );
};

FunnelChart.propTypes = {
  dataset: array,
};

export default FunnelChart;
