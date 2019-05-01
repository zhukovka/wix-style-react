import {BaseUniDriver} from 'wix-ui-test-utils/base-driver';
import {BaseDriver} from 'wix-ui-test-utils/driver-factory';
import {ReactWrapper} from 'enzyme';
import {AvatarDriver} from '../src/Avatar/Avatar.driver';
import {AccordionDriver} from '../src/Accordion/Accordion.uni.driver';

declare namespace EnzymeTestkit {
  type EnzymeTestkitFactory<T extends BaseDriver> = (
    params: EnzymeTestkitParams
  ) => T;

  type EnzymeUniTestkitFactory<T extends BaseUniDriver> = (
    params: EnzymeTestkitParams
  ) => T;

  interface EnzymeTestkitParams {
    wrapper: ReactWrapper;
    dataHook: string;
  }

  export const accordionTestkitFactory: any;
  export const addItemTestkitFactory: any;
  export const autoCompleteTestkitFactory: any;
  export const autoCompleteCompositeTestkitFactory: any;
  export const avatarTestkitFactory: EnzymeUniTestkitFactory<AvatarDriver>;
  export const badgeTestkitFactory: any;
  export const badgeSelectTestkitFactory: any;
  export const boxTestkitFactory: any;
  export const breadcrumbsTestkitFactory: any;
  export const buttonTestkitFactory: any;
  export const calendarTestkitFactory: any;
  export const calendarPanelTestkitFactory: any;
  export const calendarPanelFooterTestkitFactory: any;
  export const cardGalleryItemTestkitFactory: any;
  export const carouselTestkitFactory: any;
  export const checkboxTestkitFactory: any;
  export const circularProgressBarTestkitFactory: any;
  export const closeButtonTestkitFactory: any;
  export const colorInputTestkitFactory: any;
  export const colorPickerTestkitFactory: any;
  export const contactItemBuilderTestkitFactory: any;
  export const counterBadgeTestkitFactory: any;
  export const dataTableTestkitFactory: any;
  export const dateInputTestkitFactory: any;
  export const datePickerTestkitFactory: any;
  export const dropdownTestkitFactory: any;
  export const dropdownBaseTestkitFactory: any;
  export const dropdownLayoutTestkitFactory: any;
  export const editableSelectorTestkitFactory: any;
  export const editableTitleTestkitFactory: any;
  export const emptyStateTestkitFactory: any;
  export const errorIndicatorTestkitFactory: any;
  export const filePickerTestkitFactory: any;
  export const floatingHelperTestkitFactory: any;
  export const floatingNotificationTestkitFactory: any;
  export const formFieldTestkitFactory: any;
  export const generatedTestComponentTestkitFactory: any;
  export const genericModalLayoutTestkitFactory: any;
  export const googleAddressInputWithLabelTestkitFactory: any;
  export const googlePreviewTestkitFactory: any;
  export const headingTestkitFactory: any;
  export const highlighterTestkitFactory: any;
  export const iconButtonTestkitFactory: any;
  export const imageViewerTestkitFactory: any;
  export const inputTestkitFactory: any;
  export const inputAreaTestkitFactory: any;
  export const inputWithOptionsTestkitFactory: any;
  export const labelTestkitFactory: any;
  export const linearProgressBarTestkitFactory: any;
  export const loaderTestkitFactory: any;
  export const modalTestkitFactory: any;
  export const modalSelectorLayoutTestkitFactory: any;
  export const multiSelectTestkitFactory: any;
  export const multiSelectCheckboxTestkitFactory: any;
  export const multiSelectCompositeTestkitFactory: any;
  export const noBorderInputTestkitFactory: any;
  export const notificationTestkitFactory: any;
  export const numberInputTestkitFactory: any;
  export const pageTestkitFactory: any;
  export const pageHeaderTestkitFactory: any;
  export const popoverTestkitFactory: any;
  export const popoverMenuTestkitFactory: any;
  export const proportionTestkitFactory: any;
  export const radioGroupTestkitFactory: any;
  export const rangeTestkitFactory: any;
  export const richTextAreaTestkitFactory: any;
  export const richTextAreaCompositeTestkitFactory: any;
  export const richTextInputAreaTestkitFactory: any;
  export const searchTestkitFactory: any;
  export const sectionHelperTestkitFactory: any;
  export const segmentedToggleTestkitFactory: any;
  export const selectorTestkitFactory: any;
  export const sideMenuTestkitFactory: any;
  export const sideMenuDrillTestkitFactory: any;
  export const skeletonTestkitFactory: any;
  export const sliderTestkitFactory: any;
  export const socialPreviewTestkitFactory: any;
  export const sortableListTestkitFactory: any;
  export const statsWidgetTestkitFactory: any;
  export const tableTestkitFactory: any;
  export const tableActionCellTestkitFactory: any;
  export const tabsTestkitFactory: any;
  export const tagTestkitFactory: any;
  export const textTestkitFactory: any;
  export const textButtonTestkitFactory: any;
  export const thumbnailTestkitFactory: any;
  export const timeInputTestkitFactory: any;
  export const toggleSwitchTestkitFactory: any;
  export const headerTestkitFactory: any;
  export const draggableTestkitFactory: any;
  export const editableRowTestkitFactory: any;
  export const fieldLabelAttributesTestkitFactory: any;
  export const fieldWithSelectionCompositeTestkitFactory: any;
  export const radioButtonTestkitFactory: any;
  export const messageBoxMarketerialLayoutTestkitFactory: any;
  export const messageBoxFunctionalLayoutTestkitFactory: any;
  export const tooltipTestkitFactory: any;
  export const TooltipTestkit: any;
}

export = EnzymeTestkit;
