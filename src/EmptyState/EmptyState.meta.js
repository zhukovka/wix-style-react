import Registry from '@ui-autotools/registry';
import EmptyState from '../../EmptyState';

const meta = Registry.getComponentMetadata(EmptyState);
meta.addSim({
  title: 'Normal_example',
  props: {
    theme: 'page',
    title: 'Title!',
  },
});

meta.exportInfo = {
  exportName: 'EmptyState',
  cssPath: '/dist/statics/App.css',
  compPath: '/src/EmptyState',
};
meta.nonEventListenerTestCompliant = true;
