import React, {Children} from 'react';
import {any, bool} from 'prop-types';
import head from 'lodash.head';
import last from 'lodash.last';
import WixComponent from '../../WixComponent';
import styles from './InputAreaWithLabelComposite.scss';

class InputAreaWithLabelComposite extends WixComponent {
  render() {
    const children = Children.toArray(this.props.children);
    return (
      <div className={this.props.required ? styles.required : ''}>
        { children.length === 2 ?
          <div className={styles.label}>
            {head(children)}
          </div> : null
        }
        { last(children) }
      </div>
    );
  }
}

InputAreaWithLabelComposite.propTypes = {
  children: any,
  required: bool
};

InputAreaWithLabelComposite.displayName = 'InputAreaWithLabelComposite';

export default InputAreaWithLabelComposite;
