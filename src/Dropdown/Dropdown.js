import styles from './Dropdown.scss';
import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {hovered: null};
    this._onSelect = this._onSelect.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onClose = this._onClose.bind(this);
  }

  _onSelect(index) {
    const value = this.props.options[index].value;
    if (value !== this.props.value && this.props.onSelect) {
      this.props.onSelect(value);
    }
  }

  _onMouseEnter(index) {
    this.setState({hovered: index});
  }

  _onMouseLeave() {
    this.setState({hovered: this.props.options.findIndex(item => {
      return item.value === this.props.value;
    })});
  }

  hoverNextState(step) {
    step %= this.props.options.length;
    const validOption = this.props.options.find(item => {
      return item.options !== '-';
    });

    if (!validOption) {
      return;
    }

    let newHovered;
    let oldHovered = this.state.hovered;
    do {
      newHovered = (oldHovered === null ? 0 : oldHovered) + step;
      if (newHovered >= this.props.options.length) {
        newHovered -= this.props.options.length;
      } else if (newHovered < 0) {
        newHovered += this.props.options.length;
      }
      oldHovered = newHovered;
    } while (this.props.options[newHovered].text === '-');

    this.setState({hovered: newHovered});
    this.refs.options.scrollTop = (newHovered - 2) * parseInt(styles.option_height);
  }

  _onKeyDown(event) {
    if (event.key === 'ArrowDown') {
      this.hoverNextState(1);
    } else if (event.key === 'ArrowUp') {
      this.hoverNextState(-1);
    } else if (event.key === 'Enter') {
      this._onSelect(this.state.hovered || 0);
    } else if (event.key === 'Escape') {
      this._onClose();
    } else {
      return true;
    }
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  _onClose() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {

    const {options, id, visible, dropDirectionUp, value, tabIndex} = this.props;

    return (
      <div tabIndex={tabIndex} className={styles.wrapper} onKeyDown={this._onKeyDown} onBlur={this._onClose} id={id}>
        <div className={`${styles.options} ${visible ? styles.shown : ''} ${dropDirectionUp ? styles.up : styles.down}`} ref="options">
          {options.map((option, idx) => (
            option.text === '-' ? (this.renderDivider(idx)) : (this.renderItem({option, idx, selected: option.value === value, hovered: idx === this.state.hovered}))
          ))}
        </div>
      </div>
    );
  }

  renderDivider(idx) {
    return (<div key={idx} className={styles.divider}/>);
  }

  renderItem({option, idx, selected, hovered}) {
    return (
      <div
        className={`${styles.option} ${selected ? styles.selected : ''} ${hovered ? styles.hovered : ''}`}
        onClick={() => this._onSelect(idx)}
        key={idx}
        onMouseEnter={() => this._onMouseEnter(idx)}
        onMouseLeave={() => this._onMouseLeave(idx)}
        >
        {option.text}
      </div>
    );
  }
}

Dropdown.propTypes = {
  dropDirectionUp: React.PropTypes.bool,
  onClose: React.PropTypes.func,
  onSelect: React.PropTypes.func,
  visible: React.PropTypes.bool,
  id: React.PropTypes.string,
  options: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.node.isRequired,
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]).isRequired
  })),
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  tabIndex: React.PropTypes.number
};

Dropdown.defaultProps = {
  dropDirectionUp: false,
  options: [],
  visible: true,
  tabIndex: 1,
};

export default Dropdown;
