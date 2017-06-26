import React, {PropTypes} from 'react';
import WixComponent from '../../BaseComponents/WixComponent';

export default class Divider extends WixComponent {

  static propTypes = {
    size: PropTypes.number,
    direction: PropTypes.string,
    length: PropTypes.string,
    color: PropTypes.string,
    opacity: PropTypes.number
  };

  static defaultProps = {
    size: 2,
    direction: 'horizontal',
    length: '100px',
    color: '#18D2DE',
    opacity: 20
  };

  render() {
    let {direction, length, size, color, opacity} = this.props;
    size = this.getMaxSize(size);
    opacity = this.getFormattedOpacity(opacity);
    color = this.getFormattedColor(color);
    length = this.getFormattedLength(length);
    const props = {
      style: {
        boxSizing: 'border-box',
        width: direction === 'horizontal' ? length : size + 'px',
        height: direction === 'horizontal' ? size + 'px' : length,
        border: 'solid ' + (size / 2).toString() + 'px ' + color,
        opacity
      }
    };

    return (
      <div {...props}/>
    );
  }

  getFormattedColor(color) {
    return color.charAt(0) === '#' ? color : '#' + color;
  }

  getFormattedLength(length) {
    return length.indexOf('px') === -1 && length.indexOf('%') === -1 ? length + 'px' : length;
  }

  getMaxSize(size) {
    if (size > 12) {
      size = 12;
    } else if (size < 0) {
      size = 2;
    }
    return size;
  }

  getFormattedOpacity(opacity) {
    if (opacity > 100) {
      opacity = 100;
    }
    return opacity = opacity > 0 ? opacity / 100 : 0;
  }
}
