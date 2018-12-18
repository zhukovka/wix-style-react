import React from 'react';

import {
  badgeTestkitFactory,
  stylableCounterBadgeTestkitFactory as counterBadgeTestkitFactory,
  toggleSwitchTestkitFactory,
  labelTestkitFactory,
  floatingHelperTestkitFactory,
  linearProgressBarTestkitFactory,
  circularProgressBarTestkitFactory,
} from 'wix-ui-backoffice/dist/src/testkit/enzyme';

// TODO: this temporary, later reuse `importAllComponents` (but make it easily reusable)
import Popover from '../src/Popover';
import Dropdown from '../src/Dropdown';
import MultiSelect from '../src/MultiSelect';
import AutoComplete from '../src/AutoComplete';
import Input from '../src/Input';
import InputArea from '../src/InputArea';
import Label from '../src/Label';
import RichTextArea from '../src/RichTextArea';
import Notification from '../src/Notification';

// these are just for object shortcuts
const ignore = true;
const unidriver = true;

/*
 * This file exports object with component definitions.
 *
 * { [component.displayName]: ComponentDefinition }
 *
 * Ideally there should be no additional config, but:
 * * some components have required props,
 * * some are proxies to other libs,
 * * some have non-deterministic export paths
 * * some have only unidriver
 * * some have only enzyme testkit
 * * etc
 *
 * The goal is to reduce the list of snowflake components and eventually get rid of this
 * config
 *
 * until some typing solution is implemented in wix-style-react, i'll just write the type
 * by hand for now:
 *
 * [component.displayName] = {
 *   // what kind of drivers should be tested
 *   drivers?: ['vanilla', 'enzyme']
 *
 *   // skip automatic export AND tests for this component entirely
 *   ignore?: false;
 *
 *   unidriver?: false;
 *
 *   // set enzyme testkit factory directly.
 *   // given function will be passed to enzymeTetkitFactoryCreator
 *   enzymeTestkitFactory?: function;
 *
 *   // set enzyme testkit factory directly.
 *   // this is for cases when enzymeTestkitFactoryCreator has already been invoked
 *   // (mostly for proxied components)
 *   enzymeTestkit?: function;
 *
 *   // optional object with required props
 *   props?: object;
 * }
 *
 * as this file is quite extensive and could have tendency to grow, it would be best to
 * extract these definitions to live together with component implementation and make this
 * a requirement (convention) for all components
 */

export default {
  SideMenuDrill: { ignore },
  BadgeSelectItemBuilder: { ignore },
  ColorPicker: {
    ignore,
    enzymeTestkit: require('../src/ColorPicker/color-picker.driver').default,
  },
  ButtonWithOptions: {
    ignore, // testkit does not have root `exists` method
  },
  DropdownComposite: {
    props: {
      children: <Dropdown />,
    },
  },
  IconWithOptions: {
    ignore, // testkit does not have root `exists` method
  },
  MultiSelect: {
    ignore, // testkit does not have root `exists` method
  },
  MultiSelectComposite: {
    props: {
      children: <MultiSelect />,
    },
  },
  MultiSelectCheckbox: {
    ignore, // testkit does not have root `exists` method
  },
  AutoCompleteComposite: {
    props: {
      children: [<AutoComplete key={1} />],
    },
  },
  DragAndDrop: { ignore },
  DragDropContextProvider: { ignore },
  EndorseContentLayout: { ignore },
  GoogleAddressInput: { ignore },
  GoogleAddressInputWithLabel: { ignore },
  Grid: { ignore }, // Component has no testkit
  HBox: { ignore }, // Component has no testkit
  Layout: { ignore },
  MessageBox: { ignore },
  ButtonHeader: {
    // it's actually Card.ButtonHeader, should be deprecated
    props: {
      buttonTitle: 'Click me',
      subtitle: 'Header Subtitle',
      title: 'Header Title',
      buttonOnClick: () => {},
    },
  },
  Page: { ignore },
  PageHeader: { ignore },
  PopoverMenuItem: { ignore },
  Popover: {
    props: {
      children: [
        <Popover.Element>
          <div>I am the trigger!</div>
        </Popover.Element>,
        <Popover.Content>
          <div>I am the content!</div>
        </Popover.Content>,
      ],
    },
  },
  TableToolbar: { ignore },
  Tooltip: { ignore },
  VBox: { ignore }, // Component has no testkit
  Collapse: { ignore },
  Card: { ignore }, // Component has no testkit
  LinearProgressBar: {
    ignore,
    enzymeTestkit: linearProgressBarTestkitFactory,
  },
  CircularProgressBar: {
    ignore,
    enzymeTestkit: circularProgressBarTestkitFactory,
  },
  Composite: { ignore },
  FloatingHelper: {
    ignore,
    enzymeTestkit: floatingHelperTestkitFactory,
  },
  FullTextView: { ignore },

  RichTextArea: {
    beforeAllHook: () => (window.getSelection = () => ({})),
  },
  RichTextAreaComposite: {
    props: {
      children: [<Label key="0">Label text</Label>, <RichTextArea key="1" />],
    },
  },
  Range: {
    props: {
      children: [<Input key="0" />, <Input key="1" />],
    },
  },
  Avatar: { unidriver, ignore },
  ButtonLayout: {
    ignore, // TODO: i don't knowm, it fails, need to check why. Currently it doesn't have test anyway. Leaving for later
    props: {
      children: <div>abc</div>,
    },
  },
  Tag: {
    props: {
      useOldMargins: false,
      id: 'hello',
      children: 'a',
    },
  },
  TextButton: {
    unidriver,
    ignore, // different usage
  },
  IconButton: {
    unidriver,
    ignore,
  },
  CloseButton: {
    unidriver,
    ignore,
  },
  Label: { enzymeTestkit: labelTestkitFactory },
  SideMenu: {
    enzymeTestkitFactory: require('../src/SideMenu/core/SideMenu.driver')
      .default,
  },
  ToggleSwitch: { enzymeTestkit: toggleSwitchTestkitFactory },
  CounterBadge: {
    enzymeTestkit: counterBadgeTestkitFactory,
  },
  Badge: {
    enzymeTestkit: badgeTestkitFactory,
    props: {
      children: 'hello',
    },
  },
  Button: {
    enzymeTestkitFactory: require('../src/Backoffice/Button/Button.driver')
      .default,
  },

  ImageViewer: {
    props: {
      imageUrl: '',
    },
  },
  FormField: {
    props: {
      children: <div />,
    },
  },
  BadgeSelect: {
    props: {
      options: [{ id: '0', skin: 'general', text: 'general' }],
      selectedId: '0',
    },
  },
  Breadcrumbs: {
    props: {
      items: [{ id: 0, value: 'Option 1' }, { id: 1, value: 'Option 2' }],
    },
  },
  Calendar: {
    props: {
      onChange: () => {},
    },
  },
  DataTable: {
    props: {
      data: [{ a: 'value 1', b: 'value 2' }],
      columns: [{ title: 'A', render: row => row.a }],
    },
  },
  Slider: {
    props: {
      onChange: () => {},
    },
  },
  Selector: {
    props: {
      id: 1,
      title: 'title',
    },
  },
  StatsWidget: {
    props: {
      title: 'test title',
    },
  },
  Table: {
    props: {
      data: [{ a: 'value 1', b: 'value 2' }],
      columns: [{ title: 'A', render: row => row.a }],
    },
  },
  TextField: {
    props: {
      children: <Input />,
    },
  },
  TextArea: {
    props: {
      children: <InputArea />,
    },
  },
  Tabs: {
    props: {
      items: [],
    },
  },
  Modal: {
    props: {
      isOpen: false,
      contentLabel: 'modal_12345678',
    },
  },
  ContactItemBuilder: { ignore },
  Carousel: {
    drivers: ['enzyme'],
  },
  Notification: {
    props: {
      children: [
        <Notification.TextLabel key="0">label</Notification.TextLabel>,
        <Notification.CloseButton key="1" />,
      ],
    },
  },
  DatePicker: {
    ignore, // testkit does not have root `exists` method
    props: {
      onChange: () => {},
    },
  },
  ModalSelectorLayout: {
    props: {
      dataSource: () =>
        Promise.resolve({
          items: [],
          totalCount: 0,
        }),
    },
  },
  Proportion: { ignore, unidriver, drivers: ['enzyme'] },
  GeneratedTestComponent: { ignore, unidriver, drivers: ['enzyme'] },
};
