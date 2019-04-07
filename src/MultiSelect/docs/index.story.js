import React from 'react';
import LiveCodeExample from '../../../stories/utils/LiveCodeExample';
import MultiSelect from '..';

import {
  description,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';

import readmeApi from '../README.API.md';
import readmeTestkit from '../README.TESTKIT.md';
import playgroundStoryConfig from './MultiSelectPlaygroundConfig';

import ExampleSelectSimpleRaw from '!raw-loader!./ExampleSelectSimple';
import ExampleSelectAutocompleteRaw from '!raw-loader!./ExampleSelectAutocomplete';
import ExampleSuggestionsRaw from '!raw-loader!./ExampleSuggestions';
import ExampleTagInputRaw from '!raw-loader!./ExampleTagInput';
import ExampleTagInputSelectionRaw from '!raw-loader!./ExampleTagInputSelection';
import ExampleForHeader from './ExampleForHeader';

import ExampleReorderableRaw from '!raw-loader!./ExampleReorderable';

import { storySettings } from './storySettings';

import styles from './styles.scss';

/**
 * Strips imports and exports
 *
 */
function processLive(code, ComponentName, label) {
  const filteredCode = code
    .split('\n')
    .map(line => {
      if (line.startsWith('import')) {
        return '// ' + line;
      } else {
        return line;
      }
    })
    .filter(
      line =>
        !line.startsWith('export') &&
        !(line === '/* eslint-disable no-console */'),
    )
    .join('\n');

  return filteredCode + '\n\n' + createExampleRender(ComponentName, label);
}

function createExampleRender(Component, label) {
  return `
render(
  <div style={{ width: '600px' }}>
    <Card>
      <Card.Content>
        <FormField label="${label}">
          <${Component} />
        </FormField>
      </Card.Content>
    </Card>
  </div>,
);
`;
}

const defaultLiveCodeProps = {
  compact: true,
  autoRender: false,
  previewProps: {
    className: styles.livePreview,
  },
};

const examples = (
  <div>
    <LiveCodeExample
      {...defaultLiveCodeProps}
      title="Select"
      initialCode={processLive(
        ExampleSelectSimpleRaw,
        'CountrySelection',
        'Select Countries',
      )}
    />

    <LiveCodeExample
      {...defaultLiveCodeProps}
      title="Select + Autocomplete"
      initialCode={processLive(
        ExampleSelectAutocompleteRaw,
        'CountrySelection',
        'Select Countries',
      )}
    />

    <LiveCodeExample
      {...defaultLiveCodeProps}
      title="Tag Input"
      initialCode={processLive(
        ExampleTagInputRaw,
        'ExampleTagInput',
        'Enter Any Tag',
      )}
    />

    <LiveCodeExample
      {...defaultLiveCodeProps}
      compact
      title="Tag Input + Suggestions"
      initialCode={processLive(
        ExampleSuggestionsRaw,
        'ContactsInput',
        'Enter Contact Emails',
      )}
    />

    <LiveCodeExample
      {...defaultLiveCodeProps}
      title="Tag Input + Selection"
      initialCode={processLive(
        ExampleTagInputSelectionRaw,
        'CountryInput',
        'Enter Or Select Countries',
      )}
    />

    <LiveCodeExample
      {...defaultLiveCodeProps}
      title="Reorderable"
      initialCode={processLive(
        ExampleReorderableRaw,
        'ExampleReorderable',
        'Reorderable Numbers',
      )}
    />
  </div>
);

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: MultiSelect,

  componentPath: '..',
  ...playgroundStoryConfig,

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/MultiSelect',
      component: (
        <div style={{ width: '50%' }}>
          <ExampleForHeader/>
        </div>
      ),
    }),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          importExample({
            source: "import MultiSelect from 'wix-style-react/MultiSelect';",
          }),

          divider(),

          title('Examples'),

          description({ text: examples }),
        ],
      }),

      tab({
        title: 'Playground',
        sections: [playground()],
      }),

      tab({
        title: 'API',
        // Not using built-in api because we can not override props' description of InputWithOptions
        sections: [description(readmeApi)],
      }),

      tab({
        title: 'Testkit',
        sections: [description(readmeTestkit)],
      }),
    ]),
  ],
};
