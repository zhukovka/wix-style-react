import React from 'react';
import WixComponent from '../WixComponent';
import styles from './PopoverMenu.scss';

class PopoverMenu extends WixComponent {
  render() {
    return (
      <ul className={styles.menu}>
        {this.props.children}
      </ul>
    );
  }
}

export default PopoverMenu;
