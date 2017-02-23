import React, {PropTypes} from 'react';
import WixComponent from '../WixComponent';

class RichTextAreaToolbar extends WixComponent {
  getMouseDownHandler(type) {
    return event => {
      const {onClick} = this.props;
      event.preventDefault();
      onClick && onClick(type);
    };
  }

  render() {
    return (
      <div>
        <button data-hook="rich-text-area-button-bold" onMouseDown={this.getMouseDownHandler('bold')}>B</button>
        <button data-hook="rich-text-area-button-italic" onMouseDown={this.getMouseDownHandler('italic')}>I</button>
        <button data-hook="rich-text-area-button-underline" onMouseDown={this.getMouseDownHandler('underline')}>U</button>
      </div>
    );
  }
}

RichTextAreaToolbar.propTypes = {
  onClick: PropTypes.func,
};

export default RichTextAreaToolbar;
