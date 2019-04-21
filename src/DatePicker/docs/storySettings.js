import { Category } from '../../../stories/storiesHierarchy';

export const storySettings = {
  category: Category.INPUTS,
  storyName: '3.6 DatePicker',
  dataHook: 'storybook-datepicker',
};

export const testStories = {
  propsChangeEffectOnCalendarRendering:
    '1. Props change effect on Calendar rendering when isOpen set to true',
};
