import React, { Component } from 'react';
import pure from 'recompose/pure';
import compose from 'recompose/compose';
import { DragLayer } from 'react-dnd';
import itemTypes from './itemTypes';

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
};

function getItemStyles(props, clientRect, handleOffset) {
  const { initialOffset, currentOffset } = props;
  // const { initialOffset, currentOffset, offsetOfHandle } = props;
  if (!initialOffset || !currentOffset) {
    return { display: 'none' };
  }

  const x = currentOffset.x - handleOffset.x;
  const y = currentOffset.y - handleOffset.y;
  const { width, height } = clientRect;
  const transform = `translate(${x}px, ${y}px)`;

  return {
    transform: transform,
    WebkitTransform: transform,
    width,
    height,
  };
}

const noopConnectDragSource = el => el;

class CustomDragLayer extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.isPlaceholder !== nextProps.isPlaceholder) {
      document.body.classList.toggle('dnd-dragging');
    }
  }

  getChildren = (items, depth) => {
    const { renderItem, childrenProperty, childrenStyle } = this.props;

    if (!items || !items.length) {
      return null;
    }

    return (
      <ul style={childrenStyle}>
        {items.map((item, i) => (
          <li data-hook="dragging-nestable-item" key={i}>
            {renderItem({
              item,
              isPlaceholder: false,
              isPreview: true,
              depth,
              connectDragSource: noopConnectDragSource,
            })}
            {this.getChildren(item[childrenProperty], depth + 1)}
          </li>
        ))}
      </ul>
    );
  };

  render() {
    const {
      item,
      itemType,
      renderItem,
      isPlaceholder,
      childrenProperty,
    } = this.props;

    if (!isPlaceholder || itemType !== itemTypes.nestedItem) {
      return null;
    }

    return (
      <div style={layerStyles}>
        <div
          style={getItemStyles(this.props, item.clientRect, item.handleOffset)}
        >
          {renderItem({
            item: item.data,
            isPlaceholder: false,
            isPreview: true,
            depth: 1,
            connectDragSource: noopConnectDragSource,
          })}
          {this.getChildren(item.data[childrenProperty], 2)}
        </div>
      </div>
    );
  }
}

export default compose(
  DragLayer(monitor => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isPlaceholder: monitor.isDragging(),
  })),
  pure,
)(CustomDragLayer);
