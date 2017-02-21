import React, { Component, PropTypes } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Tabs from '../../src/Tabs';

const items = [{id: 1, title: 'First item'}, {id: 2, title: 'Second item'}, {id: 3, title: 'Third item'}];

class TabsTemplate extends Component {
  state = {
    activeId: items[0].id,
  };

  componentDidUpdate(props) {
    props.onChange(getExampleCode(this.getComponent()));
  }

  componentDidMount() {
    this.props.onChange(getExampleCode(this.getComponent()));
  }

  getComponent() {
    const {activeId} = this.state;
    const {type} = this.props;
    const props = {items, activeId};

    if (type) {
      props.type = type;
    }

    return <Tabs onClick={({ id }) => this.setState({ activeId: id })} {...props}/>;
  }

  render() {
    return this.getComponent();
  }
}

TabsTemplate.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(Tabs.tabTypes)
};

function getExampleCode(element) {
  return reactElementToJSXString(element, {
    filterProps: ['onClick'],
  });
}

export default TabsTemplate;
