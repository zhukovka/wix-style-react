import moment from 'moment';

import DatePicker from 'wix-style-react/DatePicker';

export default {
  category: '3. Inputs',
  storyName: '3.6 DatePicker',
  component: DatePicker,
  componentPath: '../src/DatePicker',

  componentProps: setProps => ({
    onChange: value => setProps({value}),
    dateFormat: 'YYYY/MM/DD',
    dataHook: 'storybook-datepicker',
    value: moment('2017/01/01')
  }),

  exampleProps: {
    onChange: ev => moment(ev).format('YYYY/MM/DD')
  }
};
