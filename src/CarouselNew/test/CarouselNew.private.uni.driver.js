import { carouselNewDriverFactory as publicDriverFactory } from '../CarouselNew.uni.driver';

export const carouselNewPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
