import React from 'react';
import WixComponent from '../WixComponent';
import styles from './PopoverMenu.scss';
import Tooltip from '../Tooltip';
import Button from '../Button';
import {Dots} from '../Icons/dist';
import PopoverMenuItem from '../PopoverMenuItem';

class PopoverMenu extends WixComponent {

  static propTypes = {
    size: Tooltip.propTypes.size,
    placement: Tooltip.propTypes.placement
  };

  static defaultProps = {
    size: 'normal',
    placement: 'top'
  };

  render() {
    const menuItems = this.props.children.map((child, i) => {
      const {onClick, ...passThroughProps} = child.props;
      const onClickWithHide = () => {
        this.tooltip.hide();
        onClick();
      };
      return <PopoverMenuItem {...passThroughProps} onClick={onClickWithHide} key={i}/>;
    });


    const tooltipContent = (
      <ul className={styles.menu}>
        {menuItems}
      </ul>
    );

    return (
      <Tooltip
        ref={tooltip => {
          this.tooltip = tooltip;
        }}
        placement={this.props.placement}
        alignment="center"
        content={tooltipContent}
        showTrigger="click"
        hideTrigger="click"
        theme="light"
        size={this.props.size}
        shouldCloseOnClickOutside
        >
        <Button
          type="button"
          height="medium"
          theme="icon-greybackground"
          >
          <Dots size="12px"/>
        </Button>
      </Tooltip>
    );
  }
}

export default PopoverMenu;
