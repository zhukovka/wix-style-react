import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

const getTitle = base => base.$('[data-hook="title"]');
const getPrimaryAction = base => base.$('[data-hook="primary-action"]');
const getSecondaryAction = base => base.$('[data-hook="secondary-action"]');
const getHoverComponent = base => base.$('[data-hook="hover-component"]');

const cardGalleryItemDriverFactory = base => ({
  ...baseUniDriverFactory(base),
  getTitle: () => getTitle(base).text(),
  getSubtitle: () => base.$('[data-hook="subtitle"]').text(),
  getBackgroundImageUrl: async () => {
    const style = await base.$('[data-hook="background-image"]').attr('style');

    return style.match(/url\("?([^"]*)"?\)/)[1];
  },
  click: () => getHoverComponent(base).click(),
  getPrimaryActionLabel: () => getPrimaryAction(base).text(),
  clickOnPrimaryAction: () => getPrimaryAction(base).click(),
  getSecondaryActionLabel: () => getSecondaryAction(base).text(),
  clickOnSecondaryAction: () => getSecondaryAction(base).click(),
  getHoverComponent: () => getHoverComponent(base),
  getHoveredContent: () => base.$('[data-hook="hovered-content"]'),
});

export default cardGalleryItemDriverFactory;
