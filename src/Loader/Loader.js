import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import WixComponent from '../WixComponent';

import styles from './Loader.scss';

class Loader extends WixComponent {
  render() {
    const {size, color, text} = this.props;
    const className = classnames(styles.loader, styles[size], styles[color]);
    return (
      <div className={className}>
        <div className={styles.wheel}/>
        { text && <div className={styles.text}>{text}</div> }
      </div>
    );
  }
}

Loader.defaultProps = {
  size: 'medium',
  color: 'blue',
};

Loader.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  color: PropTypes.oneOf(['blue', 'white']).isRequired,
  text: PropTypes.string
};

export default Loader;
