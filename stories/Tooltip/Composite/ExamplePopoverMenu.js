import React, {Component} from 'react';

import Template from './Template';
import RadioGroup from '../../../src/RadioGroup';
import Label from '../../../src/Label';
import * as Icons from '../../../src/Icons/dist';
import PopoverMenuBuilder from './PopoverMenuBuilder';
import PopoverMenu from '../../../src/PopoverMenu/PopoverMenu';
import PopoverMenuItem from '../../../src/PopoverMenuItem/PopoverMenuItem';

import styles from './Example.scss';

class ExamplePopoverMenu extends Component {

  state = {
    size: 'normal',
    placement: 'top',
    menuItems: [
      {iconName: 'PenOutline', text: 'Edit'},
      {iconName: 'VisibilityHidden', text: 'Hide'},
      {iconName: 'Trash3', text: 'Delete'}
    ]
  };

  addRow = () => {
    this.setState({menuItems: [...this.state.menuItems, {iconName: '', text: ''}]});
  };

  updateRowIcon = (iconName, i) => {
    this.setState({
      menuItems: [
        ...(this.state.menuItems.slice(0, i).map(obj => Object.assign({}, obj))),
        {iconName, text: this.state.menuItems[i].text},
        ...(this.state.menuItems.slice(i + 1).map(obj => Object.assign({}, obj)))
      ]
    });
  };

  updateRowText = (text, i) => {
    this.setState({
      menuItems: [
        ...(this.state.menuItems.slice(0, i).map(obj => Object.assign({}, obj))),
        {iconName: this.state.menuItems[i].iconName, text},
        ...(this.state.menuItems.slice(i + 1).map(obj => Object.assign({}, obj)))
      ]
    });
  };

  render() {
    const tooltipContent = (
      <PopoverMenu>
        {
          this.state.menuItems.filter(menuItem => menuItem.iconName).map((menuItem, i) => (
            <PopoverMenuItem
              key={i}
              icon={React.createElement(Icons[menuItem.iconName])}
              text={menuItem.text}
              onClick={() => console.log(`menu item ${i} clicked`)}
              />
          ))
        }
      </PopoverMenu>
    );

    return (
      <form className={styles.form}>
        <div className={styles.input}>

          <div className={styles.option}>
            <Label>Size</Label>
            <div className={styles.flex}>
              <RadioGroup
                display="horizontal"
                value={this.state.size}
                onChange={size => this.setState({size})}
                >
                <RadioGroup.Radio value="normal">Normal</RadioGroup.Radio>
                <RadioGroup.Radio value="large">Large</RadioGroup.Radio>
              </RadioGroup>
            </div>
          </div>

          <div className={styles.option}>
            <Label>Direction</Label>
            <div className={styles.flex}>
              <RadioGroup
                display="horizontal"
                value={this.state.placement}
                onChange={placement => this.setState({placement})}
                >
                <RadioGroup.Radio value="top">Top</RadioGroup.Radio>
                <RadioGroup.Radio value="right">Right</RadioGroup.Radio>
                <RadioGroup.Radio value="bottom">Bottom</RadioGroup.Radio>
                <RadioGroup.Radio value="left">Left</RadioGroup.Radio>
              </RadioGroup>
            </div>
          </div>

          <div className={styles.option}>
            <Label>Text</Label>
            <div className={styles.flex}>
              <PopoverMenuBuilder
                menuItems={this.state.menuItems}
                updateRowText={this.updateRowText}
                addRow={this.addRow}
                updateRowIcon={this.updateRowIcon}
              />
            </div>
          </div>
        </div>

        <div className={styles.output}>
          <div className={styles.exampleWrapper}>
            <Template
              theme="light"
              placement={this.state.placement}
              tooltipContent={tooltipContent}
              showTrigger="click"
              hideTrigger="click"
              type="popoverMenu"
              size={this.state.size}
              onChange={this.props.onChange}
              />
          </div>
        </div>
      </form>
    );
  }
}

export default ExamplePopoverMenu;
