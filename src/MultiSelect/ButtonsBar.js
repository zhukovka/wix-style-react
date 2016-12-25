import React from 'react';

class ButtonsBar extends React.Component {
  static propTypes = {
    theme: React.PropTypes.object,
    onDone: React.PropTypes.func,
    onCancel: React.PropTypes.func,
  };
  render() {
    const {onCancel, onDone, theme} = this.props;
    return (
      <div className={theme.buttonsContainer}>
        <button className={theme.cancelButton} onClick={onCancel}>Cancel</button>
        <button className={theme.doneButton} data-hook="done-button" onClick={onDone}>Done</button>
      </div>
    );
  }
}

export default ButtonsBar;
