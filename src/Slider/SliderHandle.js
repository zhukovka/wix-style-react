import React, {Component} from 'react';
import './SliderHandle.scss';

export default class SliderHandle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTooltip: false,
      dragging: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseUp() {
    this.toggleTooltip(false);
    this.setState({dragging: false});
  }

  handleMouseDown() {
    this.toggleTooltip(true);
    this.setState({dragging: true});
  }

  handleMouseEnter() {
    this.toggleTooltip(true);
  }

  handleMouseLeave() {
    if (!this.state.dragging) {
      this.toggleTooltip(false);
    }
  }

  toggleTooltip(showTooltip) {
    this.setState({showTooltip});
  }

  render() {
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        className="slider-handle"
        style={{left: `${this.props.offset}%`}}
        >
        {this.state.showTooltip &&
          <div className="slider-tooltip">
            {this.props.value}
          </div>}
        <div className="slider-handle-inner"/>
      </div>
    );
  }
}

const {PropTypes} = React;

SliderHandle.propTypes = {
  offset: PropTypes.number,
  value: PropTypes.number
};
