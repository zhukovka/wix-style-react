import { StylableUnidriverUtil } from 'wix-ui-test-utils/unidriver';
import { colorInputDriverFactory as publicDriverFactory } from './ColorInput.uni.driver';
import hashStyles from './components/Hash.st.css';
import viewerStyles from './components/ColorViewer.st.css';

export const colorInputPrivateDriverFactory = base => {
  const viewerStylableUtil = new StylableUnidriverUtil(viewerStyles);
  const hashStylableUtil = new StylableUnidriverUtil(hashStyles);

  const isHashDisabled = async () =>
    (await hashStylableUtil.getStyleState(
      base.$('[data-hook="colorinput-hash"]'),
      'disabled',
    )) === 'true';

  const getViewerSize = async () =>
    await viewerStylableUtil.getStyleState(
      base.$('[data-hook="colorinput-viewer"]'),
      'size',
    );
  return {
    ...publicDriverFactory(base),
    isHashDisabled,
    isViewerNull: async () =>
      await base.$('[data-hook="colorinput-viewer-line"]').exists(),
    getViewerSize,
  };
};
