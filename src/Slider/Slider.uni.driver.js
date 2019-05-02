import { baseUniDriverFactory, ReactBase } from '../../test/utils/unidriver';

export const sliderUniDriverFactory = base => {
  const $sliderHandles = () => base.$$('[data-hook="slider-handle"]');
  const $sliderDots = () => base.$$('.rc-slider-dot');

  return {
    ...baseUniDriverFactory(base),
    /** returns true if slider grade is selected */
    isDotSelected: number =>
      $sliderDots()
        .get(number - 1)
        .hasClass('rc-slider-dot-active'),
    /** returns number of slider grades */
    numOfSliderDots: () => $sliderDots().count(),
    /** returns number of slider handles */
    numOfSliderHandles: () => $sliderHandles().count(),
    /** returns slider tooltip value */
    getToolTipValue: async () => {
      const tooltip = base.$('[data-hook="slider-tooltip"]');
      const exists = await tooltip.exists();
      return exists && tooltip.text();
    },
    /** hovers on slider handle */
    hoverHandle: ({ handleIndex }) => {
      const handle = $sliderHandles().get(handleIndex);
      return handle.hover();
    },
    /** mouse leaves slider handle */
    unHoverHandle: ({ handleIndex }) => {
      const handle = $sliderHandles().get(handleIndex);
      ReactBase(handle).mouseLeave();
    },
  };
};
