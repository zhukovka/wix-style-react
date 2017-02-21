import React, {PropTypes} from 'react';
import classNames from 'classnames';
import WixComponent from '../WixComponent';
import styles from './Tabs.scss';

class Tabs extends WixComponent {
  render() {
    const {items, onClick, activeId, type} = this.props;
    const tabs = items.map(item => {
      const className = classNames(styles.tab, {
        [styles.active]: item.id === activeId
      });
      return (
        <li key={item.id} onClick={() => onClick(item)} className={className}>
          {item.title}
        </li>
      );
    });

    return (
      <div className={styles[type]}>
        <ul className={styles.container}>{tabs}</ul>
      </div>
    );
  }
}

Tabs.tabTypes = ['compact', 'uniformSide', 'uniformFull'];

Tabs.propTypes = {
  items: PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    title: React.PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func,
  activeId: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  type: PropTypes.oneOf(Tabs.tabTypes)
};

export default Tabs;
