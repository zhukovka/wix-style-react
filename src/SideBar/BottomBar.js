import css from './BottomBar.scss';
import React from 'react';
import Tooltip from '../Tooltip';

class BottomBar extends React.Component {

  render() {

    const {commands, onClick} = this.props;
    return (
      <div className={css.bottombar}>
        {commands.map(cmd => this._renderCommand(cmd, onClick))}
      </div>
    );
  }

  _renderCommand(cmd, onClick) {
    let node = null;
    if (cmd.tooltip) {
      node = (
        <Tooltip placement="top" alignment="center" content={cmd.tooltip} showTrigger="mouseenter" hideTrigger="mouseleave">
          <div>
            {cmd.node}
          </div>
        </Tooltip>
      );
    } else {
      node = cmd.node;
    }

    return (
      <div className={css.command} onClick={() => onClick(cmd.id)} key={cmd.id} >
        {node}
      </div>
    );
  }

  static propTypes = {
    commands: React.PropTypes.array.isRequired,
    onClick: React.PropTypes.func.isRequired
  }
}

export default BottomBar;
