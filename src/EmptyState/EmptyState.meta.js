import Registry from '@ui-autotools/registry';
import EmptyState from '../../EmptyState';
// import style from './EmptyState.scss'

  const emptyStateMetadata = Registry.getComponentMetadata(EmptyState);

  emptyStateMetadata.addSim({
  title: 'Normal_example',
  props: {
    theme: 'page',
    title: 'Title!'
  }
});

emptyStateMetadata.compiledComponent = {cssPath: '/dist/statics/App.css', compPath: '/src/EmptyState'}

emptyStateMetadata.exportedFrom({
    path: '.',
    exportName: 'EmptyState',
    // baseStylePath: 'src/EmptyState/EmptyState.scss'
  });

// emptyStateMetadata.addStyle(style, {name: 'style', path: 'src/EmptyState/EmptyState.scss'});

emptyStateMetadata.nonEventListenerTestCompliant = true 