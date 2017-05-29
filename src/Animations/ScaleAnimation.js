import React, {Component} from 'react';
import {bool, node} from 'prop-types';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import scale from './ScaleAnimation.scss';

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
  animateAppear: bool,
  animateEnter: bool,
  animateLeave: bool,
  children: node
};

ScaleAnimation.defaultProps = {
  animateAppear: true,
  animateEnter: true,
  animateLeave: true,
  children: null
};

export default ScaleAnimation;
