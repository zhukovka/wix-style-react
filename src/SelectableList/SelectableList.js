import React, { Children } from 'react';
import { generateID } from '../utils/generateId';

const mapChildrenToId = children =>
  Children.toArray(children).reduce(
    (a, c) => ({
      ...a,
      [generateID()]: c,
    }),
    {},
  );

/** A wrapper that makes a list clickable */
class SelectableList extends React.Component {
  static displayName = 'SelectableList';

  constructor(props) {
    super(props);
    this.state = {
      items: mapChildrenToId(props.children),
      selected: [],
    };
  }
  static defaultProps = {
    threshold: 1000,
  };
  _change = (event, key) => {
    const { selected, items } = this.state;
    const { threshold } = this.props;

    if (selected.includes(key) && selected.length < threshold) {
      this.setState(
        state => ({
          selected: state.selected.filter(value => value !== key),
        }),
        this.props.onDeselect(event, items[key]),
      );
    } else if (selected.length < threshold) {
      this.setState(
        state => ({
          selected: [...state.selected, key],
        }),
        this.props.onSelect(event, items[key]),
      );
    }
  };

  render() {
    const { dataHook } = this.props;
    const { items, selected } = this.state;
    return (
      <div data-hook={dataHook}>
        {Object.entries(items).map(([key, value]) =>
          React.cloneElement(value, {
            key,
            onChange: e => this._change(e, key),
            checked: selected.includes(key),
          }),
        )}
      </div>
    );
  }
}

export default SelectableList;
