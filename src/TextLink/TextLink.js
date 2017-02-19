import React, {PropTypes} from 'react';
import WixComponent from '../../src/WixComponent';
import typography from '../../src/Typography';

export default class TextLink extends WixComponent {

  static propTypes = {
    link: PropTypes.string.isRequired,
    children: PropTypes.node,
    forceUnderline: PropTypes.bool,
    darkBackground: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium'])
  };

  static defaultProps = {
    forceUnderline: false,
    darkBackground: false,
    size: 'medium'
  };

  constructor(props) {
    super(props);
    this.state = {
      isHover: false
    };

    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({
      isHover: !this.state.isHover
    });
  }

  render() {
    const color = this.props.darkBackground ? (this.state.isHover ? '#F0F4F7' : '#FFFFFF') : (this.state.isHover ? '#4EB7F5' : '#3899EC');

    const style = {
      color,
      outline: 'none',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      textDecoration: this.props.forceUnderline || this.state.isHover ? 'underline' : 'none'
    };

    const className = this.props.size === 'medium' ? typography.t1_3 : typography.t3_3;

    return (
      <a className={className} href={`${this.props.link}`} onMouseLeave={this.toggleHover} onMouseEnter={this.toggleHover} style={style}>
        {this.props.children}
      </a>
    );
  }
}
