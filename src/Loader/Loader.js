import React, {PropTypes} from 'react';
import classnames from 'classnames';
import WixComponent from '../WixComponent';

import styles from './Loader.scss';

class Loader extends WixComponent {
  render() {
    const {size, text} = this.props;
    const className = classnames(styles.loader, styles[size]);
    return (
      <div className={className}>
        <div className={styles.wheel}/>
        { text && <div className={styles.text}>{text}</div> }
      </div>
    );
  }
}

Loader.defaultProps = {
  size: 'medium'
};

Loader.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  text: PropTypes.string
};

export default Loader;
