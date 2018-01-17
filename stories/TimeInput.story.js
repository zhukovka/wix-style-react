import TimeInput from 'wix-style-react/TimeInput';

export default {
  category: 'Core',
  component: TimeInput,
  componentPath: '../src/TimeInput', // TODO: move folder to TimePicker to align with component name
  storyName: 'TimePicker',
  exampleProps: {
    onChange: moment => moment.format('h:mm a')
  }
};
