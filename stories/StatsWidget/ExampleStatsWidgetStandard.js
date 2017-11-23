import React from 'react';
import StatsWidget from '../../src/StatsWidget';
import styles from './ExampleStatsWidget.scss';

const statistics = [{
  title: '10$',
  subtitle: 'Revenue'
},
{
  title: '2',
  subtitle: 'Products'
},
{
  title: '1',
  subtitle: 'Transactions'
}];

export default () =>
  <div data-hook="card-example" className={styles.statsWidgetWrapper}>
    <StatsWidget title="Let's what going on with your store" statistics={statistics} dataHook="standard-stats-widget"/>
  </div>;
