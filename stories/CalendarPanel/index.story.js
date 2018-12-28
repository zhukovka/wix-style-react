import { storySettings } from './storySettings';

import CalendarPanel from '../../src/CalendarPanel';

const TODAY = new Date(2019, 4, 29);

const YESTERDAY = (() => {
  const date = new Date(TODAY);
  date.setDate(date.getDate() - 1);
  return date;
})();
const A_WEEK_AGO = (() => {
  const date = new Date(TODAY);
  date.setDate(date.getDate() - 7);
  return date;
})();
const NEXT_WEEK = (() => {
  const date = new Date(TODAY);
  date.setDate(date.getDate() + 7);
  return date;
})();
const TWO_MONTH_AGO = (() => {
  const date = new Date(TODAY);
  date.setMonth(date.getDate() - 60);
  return date;
})();

const ONE_MONTH_AGO = (() => {
  const date = new Date(TODAY);
  date.setMonth(date.getDate() - 30);
  return date;
})();

const presets = [
  { id: 1, value: 'Today', selectedDays: TODAY },
  {
    id: 2,
    value: 'Yesterday',
    selectedDays: { from: YESTERDAY, to: YESTERDAY },
  },
  {
    id: 3,
    value: 'Last 7 days',
    selectedDays: { from: A_WEEK_AGO, to: TODAY },
  },
  { id: 4, value: 'Next 7 days', selectedDays: { from: TODAY, to: NEXT_WEEK } },
  {
    id: 5,
    value: 'A month (2 month ago)',
    selectedDays: { from: TWO_MONTH_AGO, to: ONE_MONTH_AGO },
  },
  { id: 6, value: 'Today', selectedDays: { from: TODAY, to: TODAY } },
  {
    id: 7,
    value: 'Yesterday',
    selectedDays: { from: YESTERDAY, to: YESTERDAY },
  },
  {
    id: 8,
    value: 'Last 7 days',
    selectedDays: { from: A_WEEK_AGO, to: TODAY },
  },
  { id: 9, value: 'Next 7 days', selectedDays: { from: TODAY, to: NEXT_WEEK } },
  {
    id: 10,
    value: 'A month (2 month ago)',
    selectedDays: { from: TWO_MONTH_AGO, to: ONE_MONTH_AGO },
  },
];
export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: CalendarPanel,
  componentPath: '../../src/CalendarPanel/CalendarPanel.js',

  componentProps: setState => ({
    dataHook: storySettings.dataHook,
    onChange: value => setState({ value }),
    selectionMode: 'day',
    presets,
    value: presets[0].selectedDays,
  }),

  exampleProps: {
    presets: [
      {
        label: 'presets',
        value: presets,
      },
    ],
  },
};
