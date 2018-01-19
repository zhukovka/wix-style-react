import ToggleSwitch from 'wix-style-react/ToggleSwitch';

export default {
  category: 'Core',
  component: ToggleSwitch,
  componentPath: '../src/ToggleSwitch',

  componentProps: (setState, getState) => ({
    onChange: () => setState({checked: !getState().checked}),
    dataHook: 'storybook-toggleswitch'
  })
};
