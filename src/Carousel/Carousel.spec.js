import React from 'react';
import carouselDriverFactory from './Carousel.private.driver';
import Carousel from './Carousel';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';

describe('Carousel', () => {
  const createDriver = createDriverFactory(carouselDriverFactory);

  it('should be rendered', () => {
    const driver = createDriver(<Carousel images={[]} />);
    expect(driver.exists()).toBeTruthy();
  });

  describe('loader', () => {
    it('should show only the loader when loading', () => {
      const driver = createDriver(
        <Carousel images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]} />,
      );
      expect(driver.isLoading()).toBeTruthy();
    });

    it('should hide the loader when images are loaded', () => {
      const driver = createDriver(
        <Carousel images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]} />,
      );
      driver.loadImages();
      expect(driver.isLoading()).toBeFalsy();
    });
  });

  describe('basic behaviour', () => {
    it('should show the first image', () => {
      const driver = createDriver(
        <Carousel images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]} />,
      );
      expect(driver.getCurrentImageIndex()).toBe(0);
    });

    it('should switch to the next image when clicking next', () => {
      const driver = createDriver(
        <Carousel images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]} />,
      );
      driver.clickNext();
      expect(driver.getCurrentImageIndex()).toBe(1);
    });

    it('should switch to the previous image when clicking prev', () => {
      const driver = createDriver(
        <Carousel images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]} />,
      );

      driver.clickNext();
      expect(driver.getCurrentImageIndex()).toBe(1);
      setTimeout(() => {
        driver.clickPrevious();
        expect(driver.getCurrentImageIndex()).toBe(0);
      }, 0);
    });
  });

  describe('infinite functionality', () => {
    describe('default behaviour', () => {
      it('should show the last image when clicking `prev`', () => {
        const driver = createDriver(
          <Carousel
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

      it('should show the first image when clicking `next` on the last image', () => {
        const driver = createDriver(
          <Carousel
            images={[
              { src: 'image1.jpg' },
              { src: 'image2.jpg' },
              { src: 'image3.jpg' },
            ]}
          />,
        );
        driver.clickNext();
        expect(driver.getCurrentImageIndex()).toBe(1);
        setTimeout(() => {
          driver.clickNext();
          expect(driver.getCurrentImageIndex()).toBe(2);
          setTimeout(() => {
            driver.clickNext();
            expect(driver.getCurrentImageIndex()).toBe(0);
          }, 0);
        }, 0);
      });
    });

    describe('when `infinite` is false', () => {
      it('should stay on the same image when clicking `prev`', () => {
        const driver = createDriver(
          <Carousel
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

      it('should stay on the last image when clicking `next` on the last image', async () => {
        const driver = createDriver(
          <Carousel
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
        setTimeout(() => {
          driver.clickNext();
          expect(driver.getCurrentImageIndex()).toBe(2);
          setTimeout(() => {
            driver.clickNext();
            expect(driver.getCurrentImageIndex()).toBe(2);
          }, 0);
        });
      });
    });
  });

  describe('autoplay', () => {
    it('should not change images when disabled', () => {
      const driver = createDriver(
        <Carousel images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]} />,
      );
      expect(driver.getCurrentImageIndex()).toBe(0);
      jest.runOnlyPendingTimers();
      expect(driver.getCurrentImageIndex()).toBe(0);
    });

    it('should automaticaly change images when enabled', () => {
      const driver = createDriver(
        <Carousel
          autoplay
          autoplaySpeed={100}
          images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]}
        />,
      );

      expect(driver.getCurrentImageIndex()).toBe(0);
      setTimeout(() => {
        expect(driver.getCurrentImageIndex()).toBe(1);
      }, 1500);
    });

    it('should stop playing when mouse is on the image', () => {
      const driver = createDriver(
        <Carousel
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
      const driver = createDriver(
        <Carousel
          autoplay
          images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]}
        />,
      );

      expect(driver.getCurrentImageIndex()).toBe(0);
      driver.mouseOver();
      setTimeout(() => {
        driver.mouseOut();
        expect(driver.getCurrentImageIndex()).toBe(1);
      }, 0);
    });
  });
  describe('dots pagination functionality', () => {
    it('should show the second image when clicking the second dots', () => {
      const driver = createDriver(
        <Carousel images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]} />,
      );
      driver.clickPageNavigationDot(1);
      expect(driver.getCurrentImageIndex()).toBe(1);
    });

    it('should show the initial image when clicking the second dots and then the first one', () => {
      const driver = createDriver(
        <Carousel images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]} />,
      );
      driver.clickPageNavigationDot(1);
      expect(driver.getCurrentImageIndex()).toBe(1);
      setTimeout(() => {
        driver.clickPageNavigationDot(0);
        expect(driver.getCurrentImageIndex()).toBe(0);
      }, 0);
    });

    it('should switch to the last image when clicking last dot', () => {
      const driver = createDriver(
        <Carousel
          images={[
            { src: 'image1.jpg' },
            { src: 'image2.jpg' },
            { src: 'image3.jpg' },
          ]}
        />,
      );
      driver.clickPageNavigationDot(2);
      expect(driver.getCurrentImageIndex()).toBe(2);
    });
  });
});
