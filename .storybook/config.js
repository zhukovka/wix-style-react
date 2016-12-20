import {configure} from '@kadira/storybook';
import {setOptions} from '@kadira/storybook-addon-options';

function loadStories() {
  require('../stories/stories.css');

  require('../stories/Input');
  require('../stories/Select');
  require('../stories/AutoCompleteInput');
  require('../stories/Slider');
  require('../stories/GoogleAddressInput');
  require('../stories/ToggleSwitch');
  require('../stories/Checkbox');
  require('../stories/RadioGroup');
  require('../stories/Button');
  require('../stories/MessageBox');
  require('../stories/Modal');
  require('../stories/Loader');
  require('../stories/Toast');
  require('../stories/DatePicker');
  require('../stories/TimeInput');
  require('../stories/Tooltip');
}

configure(loadStories, module);

setOptions({
  name: 'CUSTOM-OPTIONS',
  url: 'https://github.com/kadirahq/storybook-addon-options',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false,
});