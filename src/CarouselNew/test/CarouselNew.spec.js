import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import CarouselNew from '../CarouselNew';
import { carouselNewPrivateDriverFactory } from './CarouselNew.private.uni.driver';

describe('CarouselNew', () => {
  const render = createRendererWithUniDriver(carouselNewPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<CarouselNew />);

    expect(await driver.exists()).toBeTruthy();
  });

  ////// Backward compatibility test suites:

  // describe('loader', () => {
  //   it('should show only the loader when loading', () => {
  //     const driver = render(
  //       <CarouselNew images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]} />,
  //     );
  //     expect(driver.isLoading()).toBeTruthy();
  //   });
  //
  //   it('should hide the loader when images are loaded', () => {
  //     const driver = render(
  //       <CarouselNew images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]} />,
  //     );
  //     driver.loadImages();
  //     expect(driver.isLoading()).toBeFalsy();
  //   });
  // });

  describe('basic behaviour', () => {
    it('should show the first image', () => {
      const driver = render(
        <CarouselNew images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]} />,
      );
      expect(driver.getCurrentImageIndex()).toBe(0);
    });

    it('should switch to the next image when clicking next', () => {
      const driver = render(
        <CarouselNew images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]} />,
      );
      driver.clickNext();
      expect(driver.getCurrentImageIndex()).toBe(1);
    });

    it('should switch to the previous image when clicking prev', () => {
      const driver = render(
        <CarouselNew images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]} />,
      );
      driver.clickNext();
      jest.runOnlyPendingTimers();
      driver.clickPrevious();
      expect(driver.getCurrentImageIndex()).toBe(0);
    });
  });

  describe('infinite functionallity', () => {
    describe('default behaviour', () => {
      it('should show the last image when clicing `prev`', () => {
        const driver = render(
          <CarouselNew
            images={[
              { src: 'image1.jpg' },
              { src: 'image2.jpg' },
              { src: 'image3.jpg' },
            ]}
          />,
        );
        driver.clickPrevious();
        expect(driver.getCurrentImageIndex()).toBe(2);
      });

      it('should show the first image when clicing `next` on the last image', () => {
        const driver = render(
          <CarouselNew
            images={[
              { src: 'image1.jpg' },
              { src: 'image2.jpg' },
              { src: 'image3.jpg' },
            ]}
          />,
        );
        driver.clickNext();
        expect(driver.getCurrentImageIndex()).toBe(1);
        jest.runOnlyPendingTimers();
        driver.clickNext();
        expect(driver.getCurrentImageIndex()).toBe(2);
        jest.runOnlyPendingTimers();
        driver.clickNext();
        expect(driver.getCurrentImageIndex()).toBe(0);
      });
    });

    describe('when `infinite` is false', () => {
      it('should stay on the same image when clicking `prev`', () => {
        const driver = render(
          <CarouselNew
            images={[
              { src: 'image1.jpg' },
              { src: 'image2.jpg' },
              { src: 'image3.jpg' },
            ]}
            infinite={false}
          />,
        );
        driver.clickPrevious();
        expect(driver.getCurrentImageIndex()).toBe(0);
      });

      it('should stay on the last image when clicing `next` on the last image', async () => {
        const driver = render(
          <CarouselNew
            images={[
              { src: 'image1.jpg' },
              { src: 'image2.jpg' },
              { src: 'image3.jpg' },
            ]}
            infinite={false}
          />,
        );
        driver.clickNext();
        expect(driver.getCurrentImageIndex()).toBe(1);
        jest.runOnlyPendingTimers();
        driver.clickNext();
        expect(driver.getCurrentImageIndex()).toBe(2);
        jest.runOnlyPendingTimers();
        driver.clickNext();
        expect(driver.getCurrentImageIndex()).toBe(2);
      });
    });
  });

  describe('autoplay', () => {
    it('should not change images when disabled', () => {
      const driver = render(
        <CarouselNew images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]} />,
      );
      expect(driver.getCurrentImageIndex()).toBe(0);
      jest.runOnlyPendingTimers();
      expect(driver.getCurrentImageIndex()).toBe(0);
    });

    it('should automaticaly change images when enabled', () => {
      const driver = render(
        <CarouselNew
          autoplay
          images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]}
        />,
      );

      expect(driver.getCurrentImageIndex()).toBe(0);
      jest.runOnlyPendingTimers();
      expect(driver.getCurrentImageIndex()).toBe(1);
    });

    it('should stop playing when mouse is on the image', () => {
      const driver = render(
        <CarouselNew
          autoplay
          images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]}
        />,
      );

      expect(driver.getCurrentImageIndex()).toBe(0);
      driver.mouseOver();
      jest.runOnlyPendingTimers();
      expect(driver.getCurrentImageIndex()).toBe(0);
    });

    it('should continue playing when mouse leaves the image', () => {
      const driver = render(
        <CarouselNew
          autoplay
          images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]}
        />,
      );

      expect(driver.getCurrentImageIndex()).toBe(0);
      driver.mouseOver();
      driver.mouseOut();
      jest.runOnlyPendingTimers();
      expect(driver.getCurrentImageIndex()).toBe(1);
    });
  });
});
