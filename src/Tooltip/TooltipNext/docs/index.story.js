import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  columns,
  playground,
  api,
  testkit,
  importExample,
  divider,
  code,
  title,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';

import Tooltip from '..';
import TextButton from '../../../TextButton';
import Text from '../../../Text';
import AddItem from '../../../AddItem';

import { placements } from '../../../Popover/Popover';
import SectionHelper from '../../../SectionHelper';
import { Layout, Cell } from '../../../Layout';
import { baseScope } from '../../../../stories/utils/LiveCodeExample';
import usage from './Usage.md';
import * as examples from './examples';

const liveCode = config =>
  code({
    previewProps: {
      style: { backgroundColor: '#f0f4f7' },
    },
    compact: true,
    components: baseScope,
    ...config,
  });

const example = ({ source, ...rest }) =>
  columns([description({ ...rest }), liveCode({ source })]);

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Tooltip,
  componentPath: '..',

  componentProps: {
    children: <TextButton>Hover me</TextButton>,
    content: 'Enter your postal code, so postman can easier send you a mail.',
    appendTo: 'window',
    placement: 'top',
    textAlign: 'center',
    size: 'medium',
  },

  exampleProps: {
    appendTo: ['window', 'scrollParent', 'viewport', 'parent'],
    textAlign: ['start', 'center'],
    size: ['small', 'medium'],
    placement: placements,
    children: [
      {
        label: `TextButton`,
        value: <TextButton>Hover me</TextButton>,
      },
      {
        label: `Text`,
        value: <Text>Long story short</Text>,
      },
      {
        label: `AddItem`,
        value: <AddItem>Hover me</AddItem>,
      },
    ],
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/TooltipNext/',
      component: (
        <Layout gap={10}>
          <Cell>
            <Tooltip appendTo="window" content="HERE I AM! THIS IS ME!">
              <TextButton skin="dark">Hover me</TextButton>
            </Tooltip>
          </Cell>
          <Cell span={6}>
            <SectionHelper title="Next Generation Tooltip">
              To enable new generation tooltip make sure to pass prop `upgrade`
            </SectionHelper>
          </Cell>
        </Layout>
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description(
              'A tooltip is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
            ),
          ]),

          importExample("import Tooltip from 'wix-style-react/Tooltip';"),

          divider(),

          columns([
            description({
              title: 'Usage',
              text: usage,
            }),
          ]),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'Plain Example',
              text: 'Plain example of how to use tooltip.',
              source: examples.basic,
            },
            {
              title: 'Placement',
              text:
                'Tooltips have four standard placements available: `top`, `right`, `bottom`, and `left`. Each standard position center-aligns itself along the appropriate axis and appears outside the target element.',
              source: examples.placements,
            },
            {
              title: 'Delay',
              text:
                'Time in milliseconds to wait before showing or hiding the tooltip. Controlled by props `enterDelay` or `exitDelay`.',
              source: examples.delay,
            },
            {
              title: 'Size',
              text: 'Tooltip supports two sizes: `small` and `medium`.',
              source: examples.size,
            },
          ].map(example),

          title('Floating Behaviour'),

          columns([
            liveCode({
              title: 'Flip: Enabled (default) & Fixed: Disabled (default)',
              subtitle:
                'Focus target element (TAB) and scroll viewport to see behaviour',
              source: examples.flip,
            }),
            liveCode({
              title: 'Flip: Disabled & Fixed: Disabled (default)',
              subtitle:
                'Focus target element (TAB) and scroll viewport to see behaviour',
              source: examples.flipnot,
            }),
          ]),
          columns([
            liveCode({
              title: 'Flip: Enabled (default) & Fixed: Enabled',
              subtitle:
                'Focus target element (TAB) and scroll viewport to see behaviour',
              source: examples.fixed,
            }),
          ]),

          title('Attachement to DOM'),

          columns([
            liveCode({
              title: 'Append to: parent',
              subtitle: `If you inspect the content, you'll see it is attached to a new div next to the target element.`,
              source: examples.parent,
            }),
            liveCode({
              title: 'Append to: window',
              subtitle: `If you inspect the content, you'll see it is attached to a new <div/> under the body.`,
              source: examples.window,
            }),
          ]),
          columns([
            liveCode({
              title: 'Append to: viewport',
              subtitle: `This is similar to window as it also appends the content to a new <div/> under the body, but also set its boundry to the viewport.`,
              source: examples.viewport,
            }),
            liveCode({
              title: 'Append to: scrollparent',
              subtitle: `If you inspect the content, you'll see it is attached to a new div under the list container.`,
              source: examples.scrollParent,
            }),
          ]),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit({ unidriver: true })] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
