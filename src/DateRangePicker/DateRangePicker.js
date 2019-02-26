import React from 'react';
import PropTypes from 'prop-types';
import styles from './DateRangePicker.scss';

class DateRangePicker extends React.PureComponent {
  static displayName = 'DateRangePicker';

  static propTypes = { dataHook: PropTypes.string };

  static defaultProps = {};

  render() {
    const { dataHook } = this.props;

    return <div className={styles.root} data-hook={dataHook} />;
  }
}

export default DateRangePicker;
