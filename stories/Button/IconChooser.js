import React, {Component, PropTypes} from 'react';

import Dropdown from '../../src/Dropdown';
import * as Icons from '../../src/Icons/dist';

class IconChooser extends Component {
  render() {
    const options = Object.keys(Icons).map(name => {
      return {id: name, value: <div style={{paddingLeft: "10px"}}>{React.createElement(Icons[name])} - {name}</div>};
    });
    return (
      <Dropdown
        options={options}
        onSelect={this.props.onSelect}
        placeholder={'Choose an icon'}
        valueParser={value => value.id}
      />
    );
  }
}

IconChooser.propTypes = {
  onSelect: PropTypes.func.isRequired
};

export default IconChooser;
