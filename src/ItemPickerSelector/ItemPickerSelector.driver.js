import React from 'react';
import { emptyStateTestkitFactory, searchTestkitFactory } from '../../testkit';
import { dataHooks } from './ItemPickerSelectorDataHooks';
import tooltipDriverFactory from "../Tooltip/Tooltip.driver";
import { testkitFactoryCreator } from "wix-ui-test-utils/vanilla";

export const itemPickerSelectorDriverFactory = ({ element }) => {
  const tooltipTestkitFactory = testkitFactoryCreator(tooltipDriverFactory);

  const tooltipDriver = tooltipTestkitFactory({
    wrapper: element,
    dataHook: dataHooks.itemPicker,
  });

  return {
    tooltipShown: () => tooltipDriver.isShown(),
    clickTooltip: () => tooltipDriver.click(),
  };
};

export const itemPickerContentDriverFactory = ({ element }) => {
  const emptyStateTestkit = emptyStateTestkitFactory({
    wrapper: element,
    dataHook: dataHooks.emptyMessage,
  });

  const searchTestkit = searchTestkitFactory({
    wrapper: element,
    dataHook: dataHooks.search,
  });

  return {
    searchExists: () => searchTestkit.exists(),
    emptyMessageExists: () => emptyStateTestkit.exists(),
    searchFor: query => {
      searchTestkit.inputDriver.focus();
      searchTestkit.inputDriver.enterText(query);
    },
  };
};

