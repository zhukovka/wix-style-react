import { configure, storiesOf } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import '../src/assets/helvetica.scss';
import './stories.scss';

function loadStories() {
  require('./stories');
}

configure(loadStories, module);

setOptions({
  showAddonPanel: false,
  sidebarAnimations: false
});
