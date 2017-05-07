import React, {PropTypes, Component} from 'react';

import reactElementToJSXString from 'react-element-to-jsx-string';
import PopoverMenu from '../../../src/PopoverMenu';
import PopoverMenuItem from '../../../src/PopoverMenuItem';
import * as Icons from '../../../src/Icons/dist';

class PopoverMenuTemplate extends Component {

  static propTypes = {
    menuItems: PropTypes.array.isRequired,
    size: PopoverMenu.propTypes.size,
    placement: PopoverMenu.propTypes.placement,
    onChange: PropTypes.func
  };

  componentDidUpdate(props) {
    props.onChange(this.getExampleCode());
  }

  componentDidMount() {
    this.props.onChange(this.getExampleCode());
  }

  getExampleCode() {
    return reactElementToJSXString(this.getComponent(), {
      showDefaultProps: false
    });
  }

  getComponent() {
    return (
      <PopoverMenu size={this.props.size} placement={this.props.placement}>
        {
          this.props.menuItems.filter(menuItem => menuItem.iconName).map((menuItem, i) => (
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
  }

  render() {
    return this.getComponent();
  }
}

export default PopoverMenuTemplate;
