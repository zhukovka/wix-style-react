import FunnelChart from 'wix-style-react/FunnelChart';

const sampleData = [
  {
    value: 122,
    previous: 100,
    title: 'visits',
    tooltip: '66% of visits to your site, viewed your store products. 7% more than last week',
  },
  {
    value: 80,
    previous: 75,
    title: 'product views',
    tooltip: '79% of viewed products were added to a cart. 7% more than last week',
  },
  {
    value: 63,
    previous: 32,
    title: 'cart',
    tooltip: '65% of carts reached checked out. 7% more than last week',
  },
  {
    value: 41,
    previous: 14,
    title: 'checkout',
    tooltip: '0% of checkouts were completed. 7% more than last week',
  },
  {
    value: 0,
    previous: 18,
    title: 'ordered',
  },
];

export default {
  category: 'Components/FunnelChart',
  storyName: 'Default',

  component: FunnelChart,
  componentPath: '../../src/FunnelChart',

  componentProps: {
    dataset: sampleData
  }
};
