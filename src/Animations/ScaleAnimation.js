import React, {Component, PropTypes} from 'react';
import scale from './ScaleAnimation.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ScaleAnimation extends Component {

  render() {
    const {animateAppear, animateEnter, animateLeave, children} = this.props;
    const animationDuration = 600; // Synced with ScaleAnimation.scss file
    return (
      <ReactCSSTransitionGroup
        transitionAppear={animateAppear}
        transitionLeave={animateLeave}
        transitionAppearTimeout={animateAppear ? animationDuration : 0}
        transitionEnterTimeout={animateEnter ? animationDuration : 0}
        transitionLeaveTimeout={animateLeave ? animationDuration : 0}
        transitionName={scale}
        >
        {children}
      </ReactCSSTransitionGroup>
    );
  }
}

ScaleAnimation.propTypes = {
  animateAppear: PropTypes.bool,
  animateEnter: PropTypes.bool,
  animateLeave: PropTypes.bool,
  children: PropTypes.node
};

ScaleAnimation.defaultProps = {
  animateAppear: true,
  animateEnter: true,
  animateLeave: true,
  children: null
};

export default ScaleAnimation;
