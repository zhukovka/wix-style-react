import { baseUniDriverFactory } from 'wix-ui-test-utils/unidriver';

export const carouselNewDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),

    /** Get the current count */
    getCountText: async () => base.$('[data-hook="carouselNew-count"]').text(),

    /** Click the button */
    clickButton: async () => base.$('[data-hook="carouselNew-button"]').click(),

    /** Get the button's text */
    getButtonText: async () =>
      base.$('[data-hook="carouselNew-button"]').text(),

    isLoading: () => {
      base.$('[data-hook="loader"]').exists();
    },

    // getImages: () => {
    //   return element
    //     .querySelectorAll('[data-hook="carousel-img"]')
    //     .map(img => img.src);
    // },
  };
};
