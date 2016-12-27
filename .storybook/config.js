import {configure} from '@kadira/storybook';
import {setOptions} from '@kadira/storybook-addon-options';

function loadStories() {
  require('../stories/stories.css');

  require('../stories/Introduction');
  require('../stories/Input');
  require('../stories/Select');
  require('../stories/AutoCompleteInput');
  require('../stories/Slider');
  require('../stories/GoogleAddressInput');
  require('../stories/ToggleSwitch');
  require('../stories/Checkbox');
  require('../stories/RadioGroup');
  require('../stories/Button');
  require('../stories/ButtonSelection');
  require('../stories/MessageBox');
  require('../stories/Modal');
  require('../stories/Loader');
  require('../stories/Toast');
  require('../stories/DatePicker');
  require('../stories/TimeInput');
  require('../stories/Tooltip');
  require('../stories/MultiSelect');
  require('../stories/SideBar');
}

configure(loadStories, module);

setOptions({
  showDownPanel: false
});
