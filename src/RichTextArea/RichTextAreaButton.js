import React, {Component, PropTypes} from 'react';
import {Bold, Italic, Underline, UnorderedList, OrderedList} from '../Icons';
import styles from './RichTextAreaButton.scss';

const icons = {
  bold: {
    component: Bold,
    tooltipText: 'Bold',
    width: 11,
    height: 14,
  },
  italic: {
    component: Italic,
    tooltipText: 'Italic',
    width: 8,
    height: 14,
  },
  underline: {
    component: Underline,
    tooltipText: 'Underline',
    width: 15,
    height: 15,
  },
  'unordered-list': {
    component: UnorderedList,
    tooltipText: 'Bulletted list',
    width: 15,
    height: 15,
  },
  'ordered-list': {
    component: OrderedList,
    tooltipText: 'Numbered list',
    width: 15,
    height: 16,
  },
};

class RichTextAreaButton extends Component {
  handleMouseDown = event => {
    event.preventDefault();
    this.props.onClick();
  };

  render() {
    return (
      <button
        className={styles.button}
        onMouseDown={this.handleMouseDown}
        data-hook={`rich-text-area-button-${this.props.type}`}
        >
        {this.renderIcon()}
      </button>
    );
  }

  renderIcon() {
    const {component: Icon, width, height} = icons[this.props.type];
    return <Icon width={`${width}px`} height={`${height}px`}/>;
  }
}

RichTextAreaButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RichTextAreaButton;
