import story from '../utils/Components/Story';

story({
  category: 'Core',
  componentSrcFolder: 'ToggleSwitch',
  componentProps: (setState, getState) => ({
    onChange: () => setState({checked: !getState().checked}),
    dataHook: 'storybook-toggleswitch'
  })
});
