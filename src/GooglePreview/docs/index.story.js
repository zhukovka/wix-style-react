import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  columns,
  divider,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import GooglePreview from '..';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: 'GooglePreview',

  component: GooglePreview,
  componentPath: '..',

  componentProps: {
    dataHook: storySettings.dataHook,
    title: 'Site Name | a title of your site',
    previewUrl: 'www.site-name.com',
    description: 'A short description for a site',
  },

  hiddenProps: ['dataHook'],

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
    title: 'Site Name | a title of your site',
    previewUrl: 'www.site-name.com',
    description: 'A short description for a site',
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/GooglePreview/',
      component: (
        <GooglePreview
          title="Site Name | a title of your site"
          previewUrl="www.site-name.com"
          description="A short description for a site"
        />
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'A google preview displayer. Contains a title, url and description for SEO result',
            }),
          ]),

          columns([
            importExample(
              "import GooglePreview from 'wix-style-react/GooglePreview'",
            ),
          ]),

          divider(),

          title('Examples'),

          code({
            title: 'Basic',
            description: 'With all required fields',
            source:
              '<GooglePreview title="Site Name | a title of your site" previewUrl="www.site-name.com" description="a short description for a site"></GooglePreview>',
          }),
          code({
            title: 'Multi-line description',
            description: 'The description can grow up to two lines maximum',
            source:
              '<GooglePreview title="Site Name | a title of your site" previewUrl="www.site-name.com" description="a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site"></GooglePreview>',
          }),
          code({
            title: 'No description',
            description: 'The google preview can appear without a description',
            source:
              '<GooglePreview title="Site Name | a title of your site" previewUrl="www.site-name.com"></GooglePreview>',
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
