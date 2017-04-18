import React, {Component} from 'react';
import {bool, node} from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import fade from './FadeAnimation.scss';

class FadeAnimation extends Component {
  render() {
    const {animateAppear, animateEnter, animateLeave, children} = this.props;
    const animationDuration = 600; // Synced with FadeAnimation.scss file
    return (
      <ReactCSSTransitionGroup
        transitionAppear={animateAppear}
        transitionLeave={animateLeave}
        transitionAppearTimeout={animateAppear ? animationDuration : 0}
        transitionEnterTimeout={animateEnter ? animationDuration : 0}
        transitionLeaveTimeout={animateLeave ? animationDuration : 0}
        transitionName={fade}
        >
        {children}
      </ReactCSSTransitionGroup>
    );
  }
}

FadeAnimation.propTypes = {
  animateAppear: bool,
  animateEnter: bool,
  animateLeave: bool,
  children: node
};

FadeAnimation.defaultProps = {
  animateAppear: true,
  animateEnter: true,
  animateLeave: true,
  children: null
};

export default FadeAnimation;
