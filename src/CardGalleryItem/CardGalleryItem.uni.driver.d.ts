import {BaseUniDriver} from "wix-ui-test-utils/unidriver";

export interface CardGalleryItemDriver extends BaseUniDriver {
    getTitle: () => Promise<string>,
    getSubtitle: () => Promise<string>,
    getBackgroundImageUrl: () => Promise<RegExpMatchArray | null>
    getPrimaryActionLabel: () => Promise<string>,
    clickOnPrimaryAction: () => Promise<void>,
    getSecondaryActionLabel: () => Promise<String>,
    clickOnSecondaryAction: () => Promise<void>,
    getHoverComponent: () => Promise<any>,
    getHoveredContent: () => Promise<any>
}