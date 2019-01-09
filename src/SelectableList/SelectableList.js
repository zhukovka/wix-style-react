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

  _onChange = (event, key) => {
    const { selected, items } = this.state;
    const { limit, onDeselect, onSelect } = this.props;
    const limitation = limit && selected.length >= limit;
    if (selected.includes(key)) {
      const selectedFiltered = selected.filter(vl => vl !== key);
      this.setState(
        { selected: selectedFiltered },
        onDeselect ? onDeselect(event, items[key]) : undefined,
      );
    } else if (!limitation) {
      this.setState(
        { selected: [...selected, key] },
        onSelect ? onSelect(event, items[key]) : undefined,
      );
    }
  };

  render() {
    const { dataHook } = this.props;
    const { items, selected, trigger } = this.state;
    return (
      <div data-hook={dataHook}>
        {Object.entries(items).map(([key, value]) =>
          React.cloneElement(value, {
            key,
            onChange: e => this._onChange(e, key),
            [trigger]: selected.includes(key),
          }),
        )}
      </div>
    );
  }
}

export default SelectableList;
