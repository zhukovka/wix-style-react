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

import CarouselNew from '..';

const code = config => baseCode({ components: allComponents, ...config });

const imagesExamples = [
  {
    src:
      'https://a-static.besthdwallpaper.com/garfield-wallpaper-2800x2100-815_28.jpg',
  },
  {
    src:
      'https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg',
  },
  {
    src:
      'https://a-static.besthdwallpaper.com/cartoons-garfield-wallpaper-1440x1080-6773_22.jpg',
  },
];

export default {
  category: storySettings.category,
  storyName: 'CarouselNew',

  component: CarouselNew,
  componentPath: '..',

  componentProps: {
    images: imagesExamples,
  },

  exampleProps: {
    images: imagesExamples,
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/CarouselNew/',
      component: <CarouselNew images={imagesExamples} />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'This line here should briefly describe component in just a sentence or two. It should be short and easy to read.',
            }),
          ]),

          columns([
            importExample(
              "import CarouselNew from 'wix-style-react/CarouselNew';",
            ),
          ]),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Simple Usage',
              text: 'A simple example with compact preview',
            }),

            code({
              compact: true,
              source: '<CarouselNew buttonText="Hello World!"/>',
            }),
          ]),

          code({
            title: 'Full Interactive Preview',
            description: 'A non compact version of same code example as above',
            source: '<CarouselNew buttonText="Hello World!"/>',
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
