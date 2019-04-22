import React from 'react';

import { tab, description, api, testkit } from 'wix-storybook-utils/Sections';
import CodeExample from 'wix-storybook-utils/CodeExample';

import EditableSelector from '..';

import CardWithEditableSelectorExample from './CardWithEditableSelector';
import CardWithEditableSelectorExampleRaw from '!raw-loader!./CardWithEditableSelector';

import PopoverWithEditableSelectorExample from './PopoverWithEditableSelector';
import PopoverEditableSelectorExampleRaw from '!raw-loader!./PopoverWithEditableSelector';

import { storySettings } from './storySettings';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: EditableSelector,
  componentPath: '..',

  sections: [
    tab({
      title: 'Examples',
      sections: [
        description({
          text: (
            <div>
              <CodeExample
                title="Card With Editable Selector"
                code={CardWithEditableSelectorExampleRaw}
              >
                <CardWithEditableSelectorExample />
              </CodeExample>

              <CodeExample
                title="Popover With Editable Selector"
                code={PopoverEditableSelectorExampleRaw}
              >
                <PopoverWithEditableSelectorExample />
              </CodeExample>
            </div>
          ),
        }),
      ],
    }),

    tab({
      title: 'API',
      sections: [api()],
    }),

    tab({
      title: 'Testkit',
      sections: [testkit()],
    }),
  ],
};
