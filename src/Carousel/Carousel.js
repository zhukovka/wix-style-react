import React from 'react';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';

import styles from './Carousel.scss';
import ChevronLeftLarge from '../new-icons/ChevronLeftLarge';
import ChevronRightLarge from '../new-icons/ChevronRightLarge';
import IconButton from '../IconButton/IconButton';
import Proportion from '../Proportion';

import Pagination from './Pagination';
import Item from './Item';

const AUTOPLAY_SPEED = 2000;
const ANIMATION = {
  PREV: 'PREV',
  NEXT: 'NEXT',
};

const getItemStylesForAnimation = (direction, state, itemIsCurrent) => {
  const itemStyles = {};
  if (!itemIsCurrent) return itemStyles;
  if (direction) {
    itemStyles.transition = '600ms cubic-bezier(0.77, 0, 0.175, 1)';
  }
  if (state === 'entering') {
    itemStyles[
      `margin${direction === ANIMATION.NEXT ? 'Left' : 'Right'}`
    ] = `${-100}%`;
  }
  return itemStyles;
};

const getContainerStylesForAnimation = direction => ({
  flexDirection: direction === ANIMATION.PREV ? 'row-reverse' : 'row',
});

class Carousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      nextIndex: 0,
      itemsQuantity: props.images.length || props.items.length,
      animationDirection: null,
    };
    this._slideTo = this._slideTo.bind(this);
    this._getItem = this._getItem.bind(this);
    this._setCurrentIndex = this._setCurrentIndex.bind(this);
    this._prev = this._prev.bind(this);
    this._next = this._next.bind(this);
  }

  componentDidMount() {
    if (this.props.autoplay) {
      this._autoplay();
    }
  }

  componentWillUnmount() {
    if (this.props.autoplay) {
      this._haltAutoplay();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.autoplay && !this.props.autoplay) {
      this._haltAutoplay();
    }

    if (!prevProps.autoplay && this.props.autoplay) {
      this._autoplay();
    }
  }

  _shouldRenderImages() {
    return Boolean(this.props.images.length);
  }

  _autoplay() {
    const intervalToken = setInterval(() => this._next(), AUTOPLAY_SPEED);
    this._haltAutoplay = () => clearInterval(intervalToken);
  }

  _stopSlideshow() {
    this.props.autoplay && this._haltAutoplay();
  }

  _continueSlideshow() {
    this.props.autoplay && this._autoplay();
  }

  _isFirstImage() {
    return this.state.currentIndex === 0;
  }

  _isLastImage() {
    return this.state.currentIndex === this.state.itemsQuantity - 1;
  }

  _slideTo(nextIndex, direction) {
    const { currentIndex } = this.state;

    if (nextIndex !== currentIndex) {
      const animationDirection =
        direction ||
        (nextIndex > currentIndex ? ANIMATION.NEXT : ANIMATION.PREV);
      this.setState({
        nextIndex,
        animationDirection,
      });
    }
  }

  _prev() {
    this._slideTo(this._getPrevIndex(), ANIMATION.PREV);
  }

  _next() {
    this._slideTo(this._getNextIndex(), ANIMATION.NEXT);
  }

  _getNextIndex() {
    const { currentIndex } = this.state;
    if (this._isLastImage()) {
      return this.props.infinite ? 0 : currentIndex;
    } else {
      return currentIndex + 1;
    }
  }

  _getPrevIndex() {
    const { currentIndex, itemsQuantity } = this.state;
    if (this._isFirstImage()) {
      return this.props.infinite ? itemsQuantity - 1 : 0;
    } else {
      return currentIndex - 1;
    }
  }

  _getItem(item, index, animation) {
    const props = {
      key: index,
      autopreloader: this.props.autopreloader,
      animationStyles: animation,
    };

    if (this._shouldRenderImages()) {
      props.imageUrl = item.src;
    } else {
      props.getItem = item;
    }

    return <Item {...props} />;
  }

  _getActiveItems(animationState) {
    const { images, items } = this.props;
    const { animationDirection, currentIndex, nextIndex } = this.state;
    const collection = this._shouldRenderImages() ? images : items;
    const currentItem = this._getItem(
      collection[currentIndex],
      currentIndex,
      getItemStylesForAnimation(animationDirection, animationState, true),
    );

    if (nextIndex !== currentIndex) {
      const nextItem = this._getItem(
        collection[nextIndex],
        nextIndex,
        getItemStylesForAnimation(animationDirection, animationState),
      );
      return [currentItem, nextItem];
    } else {
      return [currentItem];
    }
  }

  _setCurrentIndex() {
    this.setState({
      currentIndex: this.state.nextIndex,
      animationDirection: null,
    });
  }

  _isAnimationActive() {
    return Boolean(this.state.animationDirection);
  }

  render() {
    const prevButton = (
      <div className={styles.buttonContainer}>
        <IconButton
          dataHook="prev-button"
          priority="secondary"
          onClick={this._prev}
        >
          <ChevronLeftLarge />
        </IconButton>
      </div>
    );

    const nextButton = (
      <div className={styles.buttonContainer}>
        <IconButton
          dataHook="next-button"
          priority="secondary"
          onClick={this._next}
        >
          <ChevronRightLarge />
        </IconButton>
      </div>
    );

    const { currentIndex, itemsQuantity, animationDirection } = this.state;

    return (
      <div
        className={styles.carousel}
        data-hook={this.props.dataHook}
        onMouseOver={() => this._stopSlideshow()}
        onMouseOut={() => this._continueSlideshow()}
      >
        <div className={styles.gallery}>
          {prevButton}
          <Proportion
            aspectRatio={Proportion.PREDEFINED_RATIOS.landscape}
            className={styles.imagesContainerLayout}
          >
            <Transition
              in={this._isAnimationActive()}
              timeout={600}
              exit={false}
              enter
              onEntered={this._setCurrentIndex}
            >
              {state => (
                <div
                  data-hook="images-container"
                  style={getContainerStylesForAnimation(animationDirection)}
                  className={styles.imagesContainer}
                >
                  {this._getActiveItems(state)}
                </div>
              )}
            </Transition>
          </Proportion>
          {nextButton}
        </div>
        <Pagination
          className={styles.paginationLayout}
          totalPages={itemsQuantity}
          currentPage={currentIndex}
          onClick={this._slideTo}
        />
      </div>
    );
  }
}

//update images on imageUpdate
Carousel.propTypes = {
  dataHook: PropTypes.string,
  /** Array of strings where each string is a src of an image (in \<img src="your_src" /\>) */
  images: PropTypes.array,
  /** Array of nodes */
  items: PropTypes.array,
  /** Images loop endlessly */
  infinite: PropTypes.bool,
  /** Auto-playing of images */
  autoplay: PropTypes.bool,
  /** Auto-preloader */
  autopreloader: PropTypes.bool,
};

Carousel.defaultProps = {
  infinite: true,
  autoplay: false,
  images: [],
  items: [],
};
Carousel.displayName = 'Carousel';

export default Carousel;
