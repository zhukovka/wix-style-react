import {configure} from '@kadira/storybook';

function loadStories() {
 require('../stories/stories.css');

 require('../stories/Input');
 require('../stories/ToggleSwitch');
 require('../stories/Checkbox');
 require('../stories/RadioGroup');
 require('../stories/Select');
 require('../stories/AutoCompleteInput');

 require('../stories');
}

configure(loadStories, module);
