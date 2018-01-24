import Highlighter from 'wix-style-react/Highlighter';

export default {
  category: '12. Other',
  storyName: '12.4 Highlighter',

  component: Highlighter,
  componentPath: '../src/Highlighter',

  componentProps: () => ({
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur earum eius eum fugiat',
    dataHook: 'story-highlighter'
  })
};
