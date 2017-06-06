import {configure} from '@kadira/storybook';
import {setOptions} from '@kadira/storybook-addon-options';

function loadStories() {
  require('../stories/stories.scss');

  // Introduction
  require('../stories/Introduction');
  // Core
  require('../stories/AutoComplete');
  require('../stories/Breadcrubms');
  require('../stories/Badge');
  require('../stories/Button');
  require('../stories/ButtonLayout');
  require('../stories/ButtonSelection');
  require('../stories/Checkbox');
  require('../stories/DataTable');
  require('../stories/DatePicker');
  require('../stories/Dropdown');
  require('../stories/DropdownLayout');
  require('../stories/EndorseContentLayout');
  require('../stories/FilePicker');
  require('../stories/GoogleAddressInput');
  require('../stories/ImageViewer');
  require('../stories/Input');
  require('../stories/InputWithOptions');
  require('../stories/Label');
  require('../stories/Loader');
  require('../stories/MessageBox');
  require('../stories/Modal');
  require('../stories/InputArea');
  require('../stories/MultiSelect');
  require('../stories/RadioGroup');
  require('../stories/SideBar');
  require('../stories/SideMenu');
  require('../stories/Slider');
  require('../stories/Tag');
  require('../stories/TextLink');
  require('../stories/TimeInput');
  // require('../stories/Toast'); DEPRECATED
  require('../stories/ToggleSwitch');
  require('../stories/Tooltip/Core');
  // Common
  require('../stories/Composite');
  require('../stories/GridWithCardLayout');
  require('../stories/Icons');
  require('../stories/Common');
  // Composites
  require('../stories/TextField');
  require('../stories/TextArea');
  require('../stories/Text');
  require('../stories/RichTextArea');
  require('../stories/RichTextAreaComposite');
  require('../stories/FieldWithSelectionComposite');
  require('../stories/Range');
  require('../stories/AutoCompleteComposite');
  require('../stories/GoogleAddressInputWithLabel');
  require('../stories/Button/CompositeStory');
  require('../stories/Breadcrubms/CompositeStory');
  require('../stories/Tabs');
  require('../stories/Tooltip/Composite/CompositeStory');
  require('../stories/Notification');

  // Animations
  // require('../stories/Animations');
}

configure(loadStories, module);

setOptions({
  showDownPanel: false
});
