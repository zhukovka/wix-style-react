import Registry from '@ui-autotools/registry';
import Calendar from '../../Calendar';

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

meta.exportInfo = {
  exportName: 'Calender',
  cssPath: '/dist/statics/App.css',
  compPath: '/src/Calendar',
};

meta.nonEventListenerTestCompliant = true;
