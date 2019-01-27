import Registry from '@ui-autotools/registry';
import Calendar from '../../Calendar';

const meta = Registry.getComponentMetadata(Calendar);

meta.addSim({
  title: 'Normal_example',
  props: {
    theme: 'page',
    title: 'Title!',
    onChange: () => {}
  }
});

meta.exportName = 'Calender'
meta.compiledComponent = {cssPath: '/dist/statics/App.css', compPath: '/src/Calendar'}
meta.nonEventListenerTestCompliant = true
