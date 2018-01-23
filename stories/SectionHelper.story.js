import SectionHelper from 'wix-style-react/SectionHelper';

const titleExamples = [
  '',
  'Look at this important message!',
  'Look at this really long and important message that could in some cases contain many lengthy words like psychophysicotherapeutics!'
];

const childrenExamples = [
  '',
  'This is a very important message',
  'This is the content of very important message which actully has a lot of detailed explanation about various things. It may even have multiple sentences but they do not need to be those boring "Lorem Ipsum"'
];

export default {
  category: '8. Notification Bars',
  storyName: '8.7 SectionHelper',

  component: SectionHelper,
  componentPath: '../src/SectionHelper',

  componentProps: {
    title: titleExamples[0],
    children: childrenExamples[1]
  },

  exampleProps: {
    title: titleExamples,
    children: childrenExamples,

    onAction: () => 'onAction',
    onClose: () => 'onClose'
  }
};
