import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';

import { tooltipDataHook } from './ErrorIndicator';
import { teskitTooltip as tooltipDriverFactory } from '../Tooltip/Tooltip.uni.driver';

const tooltipUniTestkitFactory = uniTestkitFactoryCreator(tooltipDriverFactory);

export const errorIndicatorDriverFactory = (base, body) => {
  const tooltipDriver = async () =>
    tooltipUniTestkitFactory({
      wrapper: await base.getNative(), // eslint-disable-line no-restricted-properties
      dataHook: tooltipDataHook,
    });

  return {
    ...baseUniDriverFactory(base, body),
    getErrorMessage: async () => {
      return (await tooltipDriver()).hoverAndGetContent();
    },
  };
};
