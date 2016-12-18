import {configure} from '@kadira/storybook';

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
}

configure(loadStories, module);
