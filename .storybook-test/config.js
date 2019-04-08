import { configure, storiesOf } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import '../src/assets/helvetica.scss';
import './stories.scss';

function loadStories() {
  const req = require.context('../src', true, /\.visual\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

setOptions({
  showAddonPanel: false,
  sidebarAnimations: false
});
