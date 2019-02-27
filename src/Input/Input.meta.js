import Registry from '@ui-autotools/registry';
import Input from '../../Input';
import { wsrPluginMetaKey } from '../../.autotools/plugins/wsr-plugin-meta-key';

const meta = Registry.getComponentMetadata(Input);

meta.addSim({
  title: 'Normal_example',
  props: {
    theme: 'normal',
    title: 'Title!',
  },
});

meta.addCustomField(wsrPluginMetaKey, {
  compPath: 'dist/src/Input',
});

meta.staticResources = [
  {
    path: '/dist/statics/App.css',
    url: 'App.css',
    mimeType: 'text/css',
  },
];

meta.exportInfo = {
  exportName: 'Input',
};

meta.nonEventListenerTestCompliant = true;
