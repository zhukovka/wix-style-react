import React from 'react';

import Carousel from 'wix-style-react/Carousel';
import Button from 'wix-style-react/Button';
import Heading from 'wix-style-react/Heading';

const ExampleWithItems = () => (
  <Carousel
    autopreloader
    items={[
      ({ hidePreloader }) => {
        return (
          <div
            style={{
              display: 'flex',
              'flex-direction': 'column',
              'justify-content': 'space-between',
            }}
          >
            <Heading>Test Content</Heading>
            <img
              style={{ width: '80%' }}
              src="https://static.wixstatic.com/media/506418dbb019414f951a61670f3255a8.jpg/v1/fit/w_1500,h_1500/506418dbb019414f951a61670f3255a8.jpg"
              onLoad={hidePreloader}
            />
            <Button>TestContent</Button>
          </div>
        );
      },
      ({ hidePreloader }) => {
        return (
          <div>
            <div>TestContent</div>
            <img
              src="https://static.wixstatic.com/media/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg/v1/fit/w_1500,h_1500/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg_"
              onLoad={hidePreloader}
            />
          </div>
        );
      },
    ]}
  />
);

export default ExampleWithItems;
