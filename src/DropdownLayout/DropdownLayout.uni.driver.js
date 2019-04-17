import { baseUniDriverFactory, ReactBase } from '../../test/utils/unidriver';
import styles from './DropdownLayout.scss';

export const dropdownLayoutDriverFactory = base => {
  const byDataHook = dataHook => base.$(`[data-hook="${dataHook}"]`);
  const reactBase = ReactBase(base);
  const contentContainer = async () => (await reactBase.children())[0];

  const optionsElement = byDataHook('dropdown-layout-options');
  const optionElementAt = async position =>
    (await ReactBase(optionsElement).children())[position];

  const optionsLength = async () =>
    (await ReactBase(optionsElement).children()).length;
  const doIfOptionExists = (position, onSuccess) => {
    if (optionsLength() <= position) {
      throw new Error(
        `index out of bounds, try to get option ${position} while only ${optionsLength()} options exists`,
      );
    }
    return onSuccess();
  };
  const getOptionDriver = position =>
    doIfOptionExists(position, async () =>
      createOptionDriver(await optionElementAt(position)),
    );
  return {
    ...baseUniDriverFactory(base),
    /** @deprecated should be private */
    classes: () => ReactBase(optionsElement).prop('className'),
    clickAtOption: async index =>
      ReactBase(await optionElementAt(index)).click(),
    clickAtOptionWithValue: async value => {
      const children = await ReactBase(optionsElement).children();
      for (const _option of children) {
        if ((await ReactBase(_option).innerHtml()) === value) {
          return ReactBase(_option).click();
        }
      }
    },
    hasTheme: theme => base.hasClass(styles[`theme-${theme}`]),
    hasTopArrow: () => base.$(`.${styles.arrow}`).exists(),
    isDown: async () => (await contentContainer()).hasClass(styles.down),
    isLinkOption: async position => {
      const option = ReactBase(await optionElementAt(position));
      return (await option.tagName()).toLowerCase() === 'a';
    },
    isOptionADivider: position =>
      doIfOptionExists(position, async () =>
        (await optionElementAt(position)).hasClass(styles.divider),
      ),
    isOptionExists: async optionText => {
      const children = await ReactBase(optionsElement).children();
      for (const _option of children) {
        if ((await _option.text()) === optionText) {
          return true;
        }
      }
      return false;
    },
    isOptionHovered: async index => {
      const option = await optionElementAt(index);
      return await option.hasClass('hovered');
    },
    isOptionSelected: async index => {
      const option = await optionElementAt(index);
      return await option.hasClass('selected');
    },
    isOptionSelectedWithGlobalClassName: position =>
      doIfOptionExists(position, async () =>
        (await optionElementAt(position)).hasClass('wixstylereactSelected'),
      ),
    isOptionHoveredWithGlobalClassName: position =>
      doIfOptionExists(position, async () =>
        (await optionElementAt(position)).hasClass('wixstylereactHovered'),
      ),
    isOptionHeightSmall: position =>
      doIfOptionExists(position, async () =>
        (await optionElementAt(position)).hasClass(styles.smallHeight),
      ),
    isOptionHeightBig: position =>
      doIfOptionExists(position, async () =>
        (await optionElementAt(position)).hasClass(styles.bigHeight),
      ),
    isShown: async () => (await contentContainer()).hasClass(styles.shown),
    isUp: async () => (await contentContainer()).hasClass(styles.up),
    mouseEnter: () => base.hover(),
    mouseEnterAtOption: position =>
      doIfOptionExists(position, async () =>
        (await optionElementAt(position)).hover(),
      ),
    mouseLeave: () => reactBase.mouseLeave(),
    mouseClickOutside: () => ReactBase.clickBody(),
    mouseLeaveAtOption: position =>
      doIfOptionExists(position, async () =>
        ReactBase(await optionElementAt(position)).mouseLeave(),
      ),
    /** @deprecated Use optionDriver*/
    optionAt: () => optionElementAt.getNative(), // eslint-disable-line no-restricted-properties
    /** @deprecated This should be a private method since the hook include internal parts ('dropdown-divider-{id}, dropdown-item-{id})') */
    optionByHook: async hook => {
      const option = optionsElement.$(`[data-hook=${hook}]`);
      if (!(await option.exists())) {
        throw new Error(`an option with data-hook ${hook} was not found`);
      }

      return createOptionDriver(option);
    },
    /**
     * Get Option by id
     * @returns {Promise<any>}
     */
    optionById(optionId) {
      return this.optionByHook(`dropdown-item-${optionId}`);
    },
    optionContentAt: position =>
      doIfOptionExists(position, async () =>
        (await optionElementAt(position)).text(),
      ),
    optionDriver: createOptionDriver,
    options: async () => {
      const drivers = [];
      for (let position = 0; position < optionsLength(); position++) {
        drivers.push(await getOptionDriver(position));
      }
      return drivers;
    },
    optionsContent: async () => {
      const textArray = [];
      for (const option of await ReactBase(optionsElement).children()) {
        textArray.push(await option.text());
      }
      return textArray;
    },
    optionsLength,
    /** @deprecated should be private */
    optionsScrollTop: () => ReactBase(optionsElement).prop('scrollTop'),
    pressDownKey: () => reactBase.pressKey('ArrowDown'),
    pressUpKey: () => reactBase.pressKey('ArrowUp'),
    pressEnterKey: () => reactBase.pressKey('Enter'),
    pressSpaceKey: () => reactBase.pressKey(' '),
    pressTabKey: () => reactBase.pressKey('Tab'),
    pressEscKey: () => reactBase.pressKey('Escape'),
    tabIndex: () => reactBase.tabIndex(),
  };
};

const createOptionDriver = option => ({
  element: () => option,
  mouseEnter: () => option.hover(),
  mouseLeave: () => ReactBase(option).mouseLeave(),
  isHovered: () => option.hasClass(styles.hovered),
  isSelected: () => option.hasClass(styles.selected),
  isHoveredWithGlobalClassName: () => option.hasClass('wixstylereactHovered'),
  isSelectedWithGlobalClassName: () => option.hasClass('wixstylereactSelected'),
  content: () => option.text(),
  click: () => ReactBase(option).click(),
  isDivider: () => option.hasClass(styles.divider),
  isDisabled: () => option.hasClass(styles.disabled),
});
