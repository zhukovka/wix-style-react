import React from 'react';
import PropTypes from 'prop-types';

import styles from './Accordion.st.css';
import AccordionItem from './AccordionItem';
import { buttonTypes } from './constants';

class Accordion extends React.Component {
  static displayName = 'Accordion';

  static propTypes = {
    dataHook: PropTypes.string,

    /** allow multiple rows to be opened simultaneously */
    multiple: PropTypes.bool,

    /** accordion items nodes */
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.node,
        icon: PropTypes.node,
        content: PropTypes.node,
        expandLabel: PropTypes.node,
        collapseLabel: PropTypes.node,
        buttonType: PropTypes.oneOf(Object.values(buttonTypes)),
      }),
    ),
  };

  static defaultProps = {
    items: [],
    multiple: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      openIndexes: this.props.items
        .filter(({ open }) => open)
        .map((item, index) => index),
    };
  }

  _toggle = index => () =>
    this.setState(({ openIndexes }) => ({
      openIndexes: openIndexes.includes(index)
        ? openIndexes.filter(i => i !== index)
        : this.props.multiple
        ? [...openIndexes, index]
        : [index],
    }));

  render() {
    const { openIndexes } = this.state;
    const { dataHook, items } = this.props;

    return (
      <div data-hook={dataHook}>
        {items.map((item, index, allItems) => (
          <AccordionItem
            {...styles(
              'item',
              { last: index === allItems.length - 1 },
              this.props,
            )}
            key={index}
            onToggle={this._toggle(index)}
            {...item}
            open={openIndexes.includes(index)}
          />
        ))}
      </div>
    );
  }
}

export default Accordion;
