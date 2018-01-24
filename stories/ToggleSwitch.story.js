import ToggleSwitch from 'wix-style-react/ToggleSwitch';

export default {
  category: '4. Selection',
  storyName: '4.4 ToggleSwitch',

  component: ToggleSwitch,
  componentPath: '../src/ToggleSwitch',

  componentProps: (setState, getState) => ({
    onChange: () => setState({checked: !getState().checked}),
    dataHook: 'storybook-toggleswitch'
  })
};
