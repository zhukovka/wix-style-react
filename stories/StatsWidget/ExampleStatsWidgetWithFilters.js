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
},
{
  title: '5',
  subtitle: 'Profit'
}];

const dropdownOption = [
  {id: 0, value: 'This month'},
  {id: 1, value: 'This week'}];

const onFilterChange = () => {
  alert('hi');
};

export default () =>
  <div data-hook="card-example" className={styles.statsWidgetWrapper}>
    <StatsWidget title="Let's what going on with your store" statistics={statistics}>
      <StatsWidget.Filter selectedId={1} options={dropdownOption} onSelect={onFilterChange}/>
      <StatsWidget.Filter selectedId={1} options={dropdownOption}/>
    </StatsWidget>
  </div>;
