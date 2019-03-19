import Highlighter from '..';

export default {
  category: 'Components',
  storyName: 'Highlighter',

  component: Highlighter,
  componentPath: '..',

  componentProps: () => ({
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur earum eius eum fugiat',
    dataHook: 'story-highlighter',
  }),
};
