import Registry from '@ui-autotools/registry';
import EmptyState from './EmptyState';
import { wsrPluginMetaKey } from '../../.autotools/plugins/wsr-plugin-meta-key';

const meta = Registry.getComponentMetadata(EmptyState);
meta.addSim({
  title: 'Normal_example',
  props: {
    theme: 'page',
    title: 'Title!',
  },
});

meta.addCustomField(wsrPluginMetaKey, {
  compPath: 'src/EmptyState',
});

meta.staticResources = [
  {
    path: 'dist/statics/App.css',
    url: 'App.css',
    mimeType: 'text/css',
  },
];

meta.exportInfo = {
  exportName: 'EmptyState',
};

meta.nonEventListenerTestCompliant = true;
