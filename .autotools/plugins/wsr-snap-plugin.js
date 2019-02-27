const path = require('path');
const fs = require('fs');
const React = require('react');
const { createHtml } = require('@ui-autotools/snap');
const {renderToStaticMarkup} = require('react-dom/server');
const {wsrPluginMetaKey} = require('./wsr-plugin-meta-key');

class WsrSnapPlugin {
  /**
   * Sim hooks are run for every simulation. This is where we'll generate a snapshot per simulation.
   */
  simulationHook = (simInfo) => {
    const componentMetadata = simInfo.componentMetadata;
    const wsrPluginMetadata = componentMetadata.customFields[wsrPluginMetaKey];

    /**
     * We only want to create snapshots for components that have specified the correct info
     * in their metadata file.
     */
    console.log('wsrPluginMetadata:', wsrPluginMetadata)
    if (!wsrPluginMetadata) { return; }

    // Get the path to the compiled component
    const compPath = wsrPluginMetadata.compPath;
    const compName = componentMetadata.exportInfo.exportName;
    const simulationName = simInfo.simulation.title;
    const testName = `${compName}: ${simulationName}`;
    const comp = require(path.join(simInfo.projectPath, compPath)).default;
    const compRenderedToString = renderToStaticMarkup(React.createElement(comp, simInfo.simulation.props));

    const compStaticResources = componentMetadata.staticResources ? componentMetadata.staticResources : [];
    const simStaticResources = simInfo.simulation.staticResources ? simInfo.simulation.staticResources : [];
    const staticResources = [...compStaticResources, ...simStaticResources];
    const snapshotResources = [];
    const links = [];

    /**
     * Components may have resources, which we need to read from disk so that our snaphsot files can reference
     * the resources in tests.
     */
    if (staticResources) {
      for (const resource of staticResources) {
        snapshotResources.push({
          url: resource.url,
          mimeType: resource.mimeType,
          data: fs.readFileSync(path.join(simInfo.projectPath, resource.path))
        });

        if (resource.mimeType === 'text/css') {
          // Then we want to include a link in the head
          links.push(`<link rel="stylesheet" type="text/css" href="${encodeURI(resource.url)}">`);
        }
      }
    }

    const html = createHtml(compRenderedToString, links, simulationName);
    const snapshot = {html, testName, staticResources: snapshotResources};

    /**
     * Snap provides a method which we can call with one or more files. Snap stores these files,
     * and only sends them to Applitools after every component and simulation hook has run
     */
    simInfo.collectSnapshot(snapshot);
  }
}

module.exports = {
  WsrSnapPlugin
}
