import React, {Children} from 'react';
import {children, optional, once} from '../Composite/CompositeValidation';
import Label from '../Label';
import Input from '../Input';
import styles from './TextField.scss';
import {first, last} from 'lodash/fp';

export default function TextField(props) {
  const children = Children.toArray(props.children);
  const {dataHook} = props;

  return (
    <div className={styles.textField} data-hook={dataHook}>
      {children.length === 2 ? <div className={styles.labelWrapper}>{first(children)}</div> : null}
      {last(children)}
    </div>
  );
}

TextField.displayName = 'TextField';

TextField.propTypes = {
  dataHook: React.PropTypes.string,
  children: children(optional(Label), once(Input))
};
