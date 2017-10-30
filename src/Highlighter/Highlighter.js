import React from 'react';
import WixComponent from '../BaseComponents/WixComponent';
import HighlightedItem from './HighlightedItem';
import PropTypes from 'prop-types';

/**
 * Highlighter
 *
 * It highlights string type children by wrapping match
 * with strong dom element.
 * It remains children element structure.
 */
class Highlighter extends WixComponent {
  static propTypes = {
    /** match to highlight */
    match: PropTypes.string
  };

  _reactKey = 0;
  _CHILD_TYPES = {
    STRING: 'string',
    ARRAY: 'array',
    REACT_ELEMENT: 'React_element'
  };

  _isReactElement(element) {
    return element.props !== undefined;
  }

  _renderHighlightItem(element, reactKey) {
    return (
      <HighlightedItem
        match={this.props.match}
        key={`highlighted-child${reactKey}`}
        >
        { element }
      </HighlightedItem>
    );
  }

  _renderArrayOfChildren(element, parent) {
    return element.map(child => {
      this._reactKey += 1;

      if (this._isReactElement(child)) {
        return this._highlight(child.props.children, child);
      }

      return this._highlight(child, parent);
    });
  }

  _getElementType(element) {
    let type = '';

    if (Array.isArray(element)) {
      type = this._CHILD_TYPES.ARRAY;
    } else if (this._isReactElement(element)) {
      type = this._CHILD_TYPES.REACT_ELEMENT;
    } else if (typeof element === 'string') {
      type = this._CHILD_TYPES.STRING;
    }

    return type;
  }

  _highlight(element, parent) {
    switch (this._getElementType(element)) {
      case this._CHILD_TYPES.STRING: {
        this._reactKey += 1;

        if (parent) {
          return React.cloneElement(
            parent,
            Object.assign({}, parent.props),
            this._renderHighlightItem(element, this._reactKey)
          );
        }

        return this._renderHighlightItem(element, this._reactKey);
      }
      case this._CHILD_TYPES.REACT_ELEMENT: {
        if (parent) {
          return React.cloneElement(
            parent,
            Object.assign({}, {key: `highlighted-child${this._reactKey}`}, parent.props),
            this._highlight(element.props.children, element)
          );
        }

        return this._highlight(element.props.children, element);
      }
      case this._CHILD_TYPES.ARRAY:
        return this._renderArrayOfChildren(element, parent);
      default:
        return;
    }
  }

  render() {
    return (
      <span>
        {this.props.children && this._highlight(this.props.children)}
      </span>
    );
  }
}

Highlighter.displayName = 'Highlighter';

export default Highlighter;
