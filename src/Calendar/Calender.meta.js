import Registry from '@ui-autotools/registry';
import Calendar from '../../Calendar';
// import style from './EmptyState.scss'
  const meta = Registry.getComponentMetadata(Calendar);

  meta.addSim({
  title: 'Normal_example',
  props: {
    theme: 'page',
    title: 'Title!',
    onChange: () => {}
  }
});

meta.compiledComponent = {cssPath: '/dist/statics/App', compPath: '/src/Calendar'}

meta.exportedFrom({
    path: '.',
    exportName: 'Calendar',
    // baseStylePath: 'src/EmptyState/EmptyState.scss'
  });

// emptyStateMetadata.addStyle(style, {name: 'style', path: 'src/EmptyState/EmptyState.scss'});

meta.nonEventListenerTestCompliant = true 