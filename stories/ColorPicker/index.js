import story from '../utils/Components/Story';

import component from 'wix-style-react/ColorPicker';
import source from '!raw-loader!wix-style-react/ColorPicker/color-picker';

story({
  category: '11. Pickers and Selectors',
  storyName: '11.5 ColorPicker',
  name: 'ColorPicker',
  source,
  component,
  componentProps: setProps => ({
    value: '#3899eb',
    onChange: value => setProps({value: value.hex()})
  }),
  exampleProps: {
    onChange: ev => ev.hex(),
    onCancel: () => 'Cancelled',
    onConfirm: () => 'Confirmed'
  }
});
