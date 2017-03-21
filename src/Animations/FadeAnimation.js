import React, {Component, PropTypes} from 'react';
import fade from './FadeAnimation.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
  animateAppear: PropTypes.bool,
  animateEnter: PropTypes.bool,
  animateLeave: PropTypes.bool,
  children: PropTypes.node
};

FadeAnimation.defaultProps = {
  animateAppear: true,
  animateEnter: true,
  animateLeave: true,
  children: null
};

export default FadeAnimation;
