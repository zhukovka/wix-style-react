import css from './SideBar.scss';
import React from 'react';
import BottomBar from './BottomBar';
import Menu from './Menu';
import WixComponent from '../WixComponent';

class SideBar extends WixComponent {

  static displayName: 'SideBar'

  render() {
    return (
      <div className={css.wrapper}>
        {this.props.children}
      </div>
    );
  }

  static propTypes = {
    children: React.PropTypes.any
  }
}

SideBar.Menu = Menu;
SideBar.BottomBar = BottomBar;

export default SideBar;
