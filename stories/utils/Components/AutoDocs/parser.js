import {parse} from 'react-docgen';

import ComponentResolver from './component-resolver';

export default (source = '') =>
  ({
    props: {}, // in case no of propTypes or only spreaded
    ...parse(source, ComponentResolver)
  });
