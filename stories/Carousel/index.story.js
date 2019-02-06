import React from 'react';
import Carousel from 'wix-style-react/Carousel';
import { Container, Row, Col } from 'wix-style-react/Grid';
import { storySettings } from './storySettings';
import CodeExample from 'wix-storybook-utils/CodeExample';

import ExampleWithItems from './ExampleWithItems';
import ExampleWithItemsRaw from '!raw-loader!./ExampleWithItems';

const exampleContainerStyles = {
  display: 'flex',
  flexFlow: 'column',
  minHeight: 0,
};

const imagesExamples = [
  {
    value: [
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
          'https://a-static.besthdwallpaper.com/cartoons-garfield-wallpaper-1440x1080-6773_22.jpg_',
      },
    ],
    label: 'three images',
  },
];
export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Carousel,
  componentPath: '../../src/Carousel/Carousel.js',
  exampleProps: {
    images: imagesExamples,
  },
  componentProps: {
    images: imagesExamples[0].value,
    infinite: true,
    autoplay: true,
    autopreloader: true,
    dataHook: storySettings.dataHook,
  },

  examples: (
    <CodeExample title="Carousel with items" code={ExampleWithItemsRaw}>
      <Container>
        <Row>
          <Col span={6}>
            <div
              data-hook="story-carousel-with-items"
              style={exampleContainerStyles}
            >
              <ExampleWithItems />
            </div>
          </Col>
        </Row>
      </Container>
    </CodeExample>
  ),
};
