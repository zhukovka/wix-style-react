import story from '../utils/Components/Story';

story({
  category: 'Core',
  componentSrcFolder: 'Tag',
  componentProps: {
    children: 'Hello World'
  },
  exampleProps: {
    onRemove: () => 'Removed!'
  }
});
