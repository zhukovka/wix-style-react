import {BaseUniDriver} from 'wix-ui-test-utils/base-driver';
import {BaseDriver} from 'wix-ui-test-utils/driver-factory';
import {AvatarDriver} from '../src/Avatar/Avatar.driver';
import {BadgeDriver} from '../src/Badge/Badge.driver';
import {BadgeSelectDriver} from '../src/BadgeSelect/BadgeSelect.driver';
import {BoxDriver} from '../src/Box/Box.uni.driver';
import {TooltipDriver} from '../src/Tooltip/Tooltip.uni.driver';
import {ToggleSwitchDriver} from '../src/ToggleSwitch/ToggleSwitch.driver';
import {TimeInputDriver} from '../src/TimeInput/TimeInput.driver';
import {BreadcrumbsDriver} from '../src/Breadcrumbs/Breadcrumbs.driver';
import {ButtonDriver} from '../src/Button/Button.uni.driver';
import {CalendarDriver} from '../src/Calendar/Calendar.driver';
import {CalendarPanelDriver} from '../src/CalendarPanel/CalendarPanel.driver';
import {CalendarPanelFooterDriver} from '../src/CalendarPanelFooter/CalendarPanelFooter.uni.driver';
import {CardGalleryItemDriver} from '../src/CardGalleryItem/CardGalleryItem.uni.driver';
import {ThumbnailDriver} from '../src/Thumbnail/Thumbnail.uni.driver';
import {CheckboxDriver} from '../src/Checkbox/Checkbox.uni.driver';
import {TextButtonDriver} from '../src/TextButton/TextButton.uni.driver';
import {CircularProgressBarDriver} from '../src/CircularProgressBar/CircularProgressBar.driver';
import {CloseButtonDriver} from '../src/CloseButton/CloseButton.uni.driver';
import {TextDriver} from '../src/Text/Text.driver';
import {TagDriver} from '../src/Tag/Tag.driver';
import {ColorPickerDriver} from '../src/ColorPicker/ColorPicker.driver';
import {CounterBadgeDriver} from '../src/CounterBadge/CounterBadge.driver';

declare namespace VanillaTestkit {
  type VanillaTestkitFactory<T extends BaseDriver> = (
    params: VanillaTeskitParams
  ) => T;

  type VanillaUniTestkitFactory<T extends BaseUniDriver> = (
    params: VanillaTeskitParams
  ) => T;

  interface VanillaTeskitParams {
    wrapper: HTMLElement;
    dataHook: string;
  }

  export const avatarTestkitFactory: VanillaUniTestkitFactory<AvatarDriver>;
  export const badgeTestkitFactory: VanillaTestkitFactory<BadgeDriver>;
  export const badgeSelectTestkitFactory: VanillaTestkitFactory<BadgeSelectDriver>;
  export const boxTestkitFactory: VanillaUniTestkitFactory<BoxDriver>;
  export const breadcrumbsTestkitFactory: VanillaTestkitFactory<BreadcrumbsDriver>;
  export const buttonTestkitFactory: VanillaUniTestkitFactory<ButtonDriver>;
  export const calendarTestkitFactory: VanillaTestkitFactory<CalendarDriver>;
  export const calendarPanelTestkitFactory: VanillaTestkitFactory<CalendarPanelDriver>
  export const calendarPanelFooterTestkitFactory: VanillaUniTestkitFactory<CalendarPanelFooterDriver>;
  export const cardGalleryItemTestkitFactory: VanillaUniTestkitFactory<CardGalleryItemDriver>
  export const checkboxTestkitFactory: VanillaUniTestkitFactory<CheckboxDriver>;
  export const circularProgressBarTestkitFactory: VanillaTestkitFactory<CircularProgressBarDriver>
  export const closeButtonTestkitFactory: VanillaUniTestkitFactory<CloseButtonDriver>;
  export const colorPickerTestkitFactory: VanillaTestkitFactory<ColorPickerDriver>;
  export const counterBadgeTestkitFactory: VanillaTestkitFactory<CounterBadgeDriver>;

  export const tagTestkitFactory: VanillaTestkitFactory<TagDriver>;
  export const textTestkitFactory: VanillaTestkitFactory<TextDriver>;
  export const textButtonTestkitFactory: VanillaUniTestkitFactory<TextButtonDriver>;
  export const thumbnailTestkitFactory: VanillaUniTestkitFactory<ThumbnailDriver>;
  export const timeInputTestkitFactory: VanillaTestkitFactory<TimeInputDriver>;
  export const toggleSwitchTestkitFactory: VanillaTestkitFactory<ToggleSwitchDriver>;
  export const tooltipTestkitFactory: VanillaUniTestkitFactory<TooltipDriver>;
}

export = VanillaTestkit;
