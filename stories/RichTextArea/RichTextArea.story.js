import RichTextArea from '../../src/RichTextArea';

export const settings = {
  category: '3. Inputs',
  storyName: '3.2b + RichTextArea',
  dataHook: 'storybook-richtextarea',
};

export default {
  category: settings.category,
  storyName: settings.storyName,
  component: RichTextArea,
  componentPath: '../../src/RichTextArea',
  componentProps: setProps => ({
    value: '',
    resizable: false,
    error: false,
    dataHook: settings.dataHook,
    onChange: value => {
      setProps({ value });
    },
  }),
  exampleProps: {
    onChange: value => value,
  },
};
