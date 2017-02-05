import React, {Children} from 'react';
import {first, last} from 'lodash/fp';
import WixComponent from '../../WixComponent';
import styles from './InputAreaWithLabelComposite.scss';

class InputAreaWithLabelComposite extends WixComponent {
  render() {
    const children = Children.toArray(this.props.children);
    return (
      <div>
        { children.length === 2 ?
          <div className={styles.label}>
            {first(children)}
          </div> : null
        }
        { last(children) }
      </div>
    );
  }
}

InputAreaWithLabelComposite.propTypes = {
  children: React.PropTypes.any
};

InputAreaWithLabelComposite.displayName = 'InputAreaWithLabelComposite';

export default InputAreaWithLabelComposite;
