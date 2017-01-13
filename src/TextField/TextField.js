import React, {Children} from 'react';
import {first, last} from 'lodash/fp';

import {children, optional, once} from '../Composite/CompositeValidation';
import Label from '../Label';
import Input from '../Input';

import styles from './TextField.scss';

export default function TextField(props) {
  const children = Children.toArray(props.children);
  return (
    <div data-hook={props.dataHook}>
      { children.length === 2 ?
        <div className={styles.textFieldLabel}>
          {first(children)}
        </div> : null
      }
      { last(children) }
    </div>
  );
}

TextField.displayName = 'TextField';

TextField.propTypes = {
  dataHook: React.PropTypes.string,
  children: children(optional(Label), once(Input))
};
