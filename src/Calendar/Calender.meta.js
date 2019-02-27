import Registry from '@ui-autotools/registry';
import Calendar from '../../Calendar';
import { wsrPluginMetaKey } from '../../.autotools/plugins/wsr-plugin-meta-key';

const meta = Registry.getComponentMetadata(Calendar);

meta.addSim({
  title: 'Normal_example',
  props: {
    theme: 'page',
    title: 'Title!',
    onChange: () => {},
    value: new Date(1, 1, 1),
  },
});

meta.addCustomField(wsrPluginMetaKey, {
  compPath: 'src/Calendar',
});

meta.staticResources = [
  {
    path: 'dist/statics/App.css',
    url: 'App.css',
    mimeType: 'text/css',
  },
];

meta.exportInfo = {
  exportName: 'Calender',
};

meta.nonEventListenerTestCompliant = true;
