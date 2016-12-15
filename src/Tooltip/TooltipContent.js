import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import styles from './TooltipContent.scss';

class TooltipContent extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.oneOf(['light', 'dark']).isRequired,
    arrowPlacement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']).isRequired,
    arrowStyle: PropTypes.object,
    style: PropTypes.object,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    bounce: PropTypes.bool
  }

  static defaultProps = {
    theme: 'light',
    arrowPlacement: 'bottom',
    onMouseEnter: () => {},
    onMouseLeave: () => {}
  }

  render() {
    const {children, theme, arrowPlacement, arrowStyle, style, onMouseEnter, onMouseLeave} = this.props;
    const classNames = [styles.tooltip, styles[theme], styles[`flyin-on-${arrowPlacement}`]];
    if (this.props.bounce) {
      classNames.push(styles[`bounce-on-${arrowPlacement}`]);
    }
    return (
      <div className={classnames(classNames)} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div>{children}</div>
        <div className={classnames(styles.arrow, styles[arrowPlacement])} style={arrowStyle}/>
      </div>
    );
  }

}

export default TooltipContent;
