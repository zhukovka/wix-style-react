import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import LiveCodeExample from '../utils/LiveCodeExample';
import MultiSelect from '../../src/MultiSelect';

import {
  description,
  divider,
  importExample,
  tab,
  table,
  title,
} from 'wix-storybook-utils/Sections';

import LinkTo from '@storybook/addon-links/react';
import playgroundStoryConfig from '../../src/MultiSelect/docs/MultiSelectPlaygroundConfig';

import ExampleSelectSimpleRaw from '!raw-loader!../../src/MultiSelect/docs/ExampleSelectSimple';
import ExampleSelectAutocompleteRaw from '!raw-loader!../../src/MultiSelect/docs/ExampleSelectAutocomplete';
import ExampleSuggestionsRaw from '!raw-loader!../../src/MultiSelect/docs/ExampleSuggestions';
import ExampleTagInputRaw from '!raw-loader!../../src/MultiSelect/docs/ExampleTagInput';
import ExampleTagInputSelectionRaw from '!raw-loader!../../src/MultiSelect/docs/ExampleTagInputSelection';

import ExampleReorderableRaw from '!raw-loader!../../src/MultiSelect/docs/ExampleReorderable';

import ExampleThumbVariations from '../../src/MultiSelect/docs/ExampleThumbVariations';
import ExampleThumbVariationsRaw from '!raw-loader!../../src/MultiSelect/docs/ExampleThumbVariations';

import { storySettings } from './storySettings';

import styles from '../../src/MultiSelect/docs/styles.scss';

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

    <CodeExample title="ThumbVariations" code={ExampleThumbVariationsRaw}>
      <div className={styles.exampleContainer}>
        <ExampleThumbVariations />
      </div>
    </CodeExample>
  </div>
);

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: MultiSelect,

  componentPath: '..',
  ...playgroundStoryConfig,

  sections: [
    tab({
      title: 'Description',
      sections: [
        description(
          'A component for selecting/creating multiple values, and displaying them as tags.',
        ),

        table({
          title: 'Included Components',
          rows: [
            [
              <LinkTo
                kind="Components"
                story="MultiSelect"
              >{`<MultiSelect/>`}</LinkTo>,
            ],
            [<LinkTo kind="Components" story="Tag">{`<Tag/>`}</LinkTo>],
          ],
        }),

        importExample("import MultiSelect from 'wix-style-react/MultiSelect';"),

        divider(),

        title('Examples'),

        description({ text: examples }),
      ],
    }),
  ],
};
