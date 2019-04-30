import * as React from 'react';

import { default as Badge, SIZE, SKIN, TYPE } from '..';

import { storySettings } from './storySettings';
import Facebook from 'wix-ui-icons-common/Facebook';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';
import CodeExample from 'wix-storybook-utils/CodeExample';

import ExampleBadges from './ExampleBadges';
import ExampleBadgesRaw from '!raw-loader!./ExampleBadges';
import {
  api,
  code as baseCode,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
} from 'wix-storybook-utils/dist/src/Sections';
import allComponents from '../../../stories/utils/allComponents';

import LiveCodeExample from '../../../stories/utils/LiveCodeExample';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Badge,
  componentPath: '..',

  componentProps: {
    children: "I'm a badge!",
    skin: 'general',
    type: 'solid',
    size: 'medium',
    uppercase: true,
    dataHook: storySettings.dataHook,
  },

  exampleProps: {
    skin: Object.keys(SKIN),
    type: Object.keys(TYPE),
    size: Object.keys(SIZE),
    prefixIcon: [<ChevronDown key="0" />, <Facebook key="1" />],
    suffixIcon: [<ChevronDown key="2" />, <Facebook key="3" />],
    onClick: () => alert('Badge Clicked'),
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          importExample("import Badge from 'wix-style-react/Badge';';"),

          divider(),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],

  examples: (
    <div>
      <div style={{ width: '70%' }}>
        <div style={{ fontSize: '22px' }}>With icon</div>
        <LiveCodeExample
          compact
          title="Badge can contain icon as a prefix/suffix.\r\n Icon size should match badge size. For a medium sized badge use normal icons. For a small badge use small icons which end with the prefix Small"
          initialCode={`
              <Layout cols={2} gap={0} justifyItems="center">
                  <Badge size="small" prefixIcon={<ChevronDown/>}>small badge</Badge>
                  <Badge size="medium" prefixIcon={<ChevronDown/>}>medium badge</Badge>
              </Layout>
          `}
        />
      </div>
      <CodeExample title="Variations" code={ExampleBadgesRaw}>
        <ExampleBadges />
      </CodeExample>
    </div>
  ),
};
