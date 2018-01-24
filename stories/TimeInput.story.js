import TimeInput from 'wix-style-react/TimeInput';

export default {
  category: '3. Inputs',
  storyName: '3.4 TimePicker',

  component: TimeInput,
  componentPath: '../src/TimeInput', // TODO: move folder to TimePicker to align with component name

  exampleProps: {
    onChange: moment => moment.format('h:mm a')
  }
};
