import React from 'react';

import LiveCodeExample from 'wix-storybook-utils/dist/src/LiveCodeExample';

const defaultLiveCodeProps = {
  compact: false,
  autoRender: false,
  previewProps: {
    // className: styles.livePreview,
  },
};

function createExampleRender() {
  return `
render(<Example/>);
`;
}

/**
 * Strips imports and exports
 *
 */
function processLive(code, ComponentName, label) {
  const filteredCode = code
    .split('\n')
    .map(line => {
      if (line.startsWith('import')) {
        return '// ' + line;
      } else {
        return line;
      }
    })
    .filter(
      line =>
        !line.startsWith('export') &&
        !(line === '/* eslint-disable no-console */'),
    )
    .join('\n');

  return filteredCode + '\n' + createExampleRender();
}

export const LiveCode = ({ title, initialCode, scope }) => (
  <LiveCodeExample
    {...defaultLiveCodeProps}
    title={title}
    initialCode={processLive(initialCode)}
    scope={scope}
  />
);
