import Registry from '@ui-autotools/registry';
import Input from '../../Input';
// import style from './EmptyState.scss'

  const meta = Registry.getComponentMetadata(Input);

  meta.addSim({
  title: 'Normal_example',
  props: {
    theme: 'normal',
    title: 'Title!'
  }
});

meta.compiledComponent = {cssPath: '/dist/statics/App', compPath: '/dist/src/Input'}

meta.exportedFrom({
    path: '.',
    exportName: 'Input',
    // baseStylePath: 'src/EmptyState/EmptyState.scss'
  });

// emptyStateMetadata.addStyle(style, {name: 'style', path: 'src/EmptyState/EmptyState.scss'});

meta.nonEventListenerTestCompliant = true 