import { createStoryUrl } from 'wix-ui-test-utils/protractor';
import { storySettings } from '../../stories/EmptyState/storySettings';
import { browser } from 'protractor';
import { JSDOM } from 'jsdom';

const { makeVisualGridClient } = require('@applitools/visual-grid-client');
const { getProcessPageAndSerializeScript } = require('@applitools/dom-capture');

import domNodesToCdt from '@applitools/dom-capture/src/browser/visual-grid/domNodesToCdt';

const PROJECT_NAME = 'wix-style-react';
const BRANCH_NAME = 'wix/wix-style-react/eyes/visual_grid/experiment_1';

fdescribe('EmptyState', () => {
  const storyUrl = createStoryUrl({
    kind: storySettings.kind,
    story: storySettings.storyName,
    withExamples: false,
  });

  let visualGridClient;
  const closePromises = [];
  let processPage;

  beforeAll(async () => {
    visualGridClient = makeVisualGridClient({
      showLogs: true,
      renderStatusTimeout: 60000,
      renderStatusInterval: 1000,
      ...getGridClientConfig(PROJECT_NAME, BRANCH_NAME),
    });

    processPage = `
    var callback = arguments[arguments.length - 1];
    (${await getProcessPageAndSerializeScript()})()
    .then(function(cdt){callback(cdt);});
    `;
  });

  afterAll(async () => {
    await Promise.all(closePromises);
  });

  let checkWindow, close;
  beforeEach(async () => {
    ({ checkWindow, close } = await visualGridClient.openEyes({
      appName: 'visual grid client with a cat',
      testName: 'visual-grid-client test',
    }));
  });

  afterEach(() => closePromises.push(close()));

  fit(`should render`, async () => {
    await browser.get(storyUrl);

    // TODO: consider NOT using processPage at all, and specifying resources manually.
    const {
      url,
      resourceUrls,
      blobs,
      frames,
    } = await browser.executeAsyncScript(processPage);

    // Get HTML and turn it to CDT
    // NOTE: We can not use the cdt returned from processPage since it includes Protractor wrappers. And we get Circular JSON error.
    const html = await browser.getPageSource();
    const dom = new JSDOM(html).window.document;
    const cdt = domNodesToCdt(dom);

    const resourceContents = blobs.map(({ resourceUrl, type, value }) => ({
      url: resourceUrl,
      type,
      value: Buffer.from(value, 'base64'),
    }));

    checkWindow({
      tag: 'first test',
      sizeMode: 'viewport',
      url,
      cdt,
      resourceUrls,
      resourceContents,
      frames,
    });
  });
});

// From autotools snap (with modifications)
function getGridClientConfig(projectName, branchName) {
  if (!projectName) {
    throw new Error(
      'The project should have a package.json file with a "name" field.',
    );
  }

  const viewportWidth = 1050;
  const viewportHeight = 1075;

  return {
    appName: projectName,
    apiKey: process.env.APPLITOOLS_API_KEY || process.env.EYES_API_KEY,
    batchName: projectName,
    branchName: branchName,
    browser: {
      name: 'chrome',
      width: viewportWidth,
      height: viewportHeight,
    },
  };
}
