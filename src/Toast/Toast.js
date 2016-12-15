import React, {PropTypes} from 'react';
import classnames from 'classnames';
import SvgX from '../svg/X.js';

import styles from './Toast.scss';

class Toast extends React.Component {

  constructor(params) {
    super(params);

    this.state = { leaving: false };
  }

  render() {

    const {
      show,
      type,
      theme,
      onClose
    } = this.props;

    if ((!show) && (!this.state.leaving)) return null;

    const className = classnames({
      [styles.toast]: true,
      [styles[type]]: true,
      [styles[theme]]: true,
      [styles.enter]: !this.state.leaving,
      [styles.leave]: this.state.leaving
    });

    return (

      <div className={className}>

        <div className={styles.children}>
          {this.props.children}
        </div>

        <button onClick={onClose} className={styles.close}><SvgX width={9} height={9} thickness={1}/></button>
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {

    if ((!nextProps.show) && (this.props.show)) {
      this.setState({leaving: true}, () => {

        if (this.leaveInterval) {
          clearInterval(this.leaveInterval);
        }

        if (this.timeoutInterval) {
          clearInterval(this.timeoutInterval);
        }

        this.leaveInterval = setTimeout(() => this.setState({leaving: false}), 1000);
      });
    }

    if ((nextProps.show) && (!this.props.show)) {

      if (this.timeoutInterval) {
        clearInterval(this.timeoutInterval);
      }

      if (nextProps.timeout) {

        this.timeoutInterval = setTimeout(() => {
          if ((this.props.show) && (this.props.onClose)) {
            this.props.onClose();
          }
        }, nextProps.timeout);
      }
    }

    if ((nextProps.show) && (this.props.show)) {
      if (this.leaveInterval) {
        clearInterval(this.leaveInterval);
      }
      this.setState({leaving: false});
    }
  }
}

Toast.propTypes = {
  show: PropTypes.bool,
  type: PropTypes.oneOf(['topbar']).isRequired,
  theme: PropTypes.oneOf(['red', 'blue', 'purple', 'green']).isRequired,
  timeout: PropTypes.number,
  onClose: PropTypes.func
}

export default Toast;

