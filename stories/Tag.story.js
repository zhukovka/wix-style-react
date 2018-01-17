import Tag from 'wix-style-react/Tag';

export default {
  component: Tag,
  category: 'Core',
  componentPath: '../src/Tag',
  componentProps: {
    children: 'Hello World'
  },
  exampleProps: {
    onRemove: () => 'Removed!'
  }
};
