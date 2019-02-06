import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import throttle_ from 'lodash/throttle';

import styles from './Carousel.scss';
import ChevronLeftLarge from '../new-icons/ChevronLeftLarge';
import ChevronRightLarge from '../new-icons/ChevronRightLarge';
import IconButton from '../IconButton/IconButton';
import Pagination from './Pagination';
import Proportion from '../Proportion';

import Item from './Item';

const RESIZE_REPAINT_SPEED = 200;
const AUTOPLAY_SPEED = 2000;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      loadedImageCount: 0,
      itemsQuantity: props.images.length || props.items.length,
    };
    this._slideTo = this._slideTo.bind(this);
    this._getItem = this._getItem.bind(this);
    this._updateWidth = throttle_(
      this._updateWidth.bind(this),
      RESIZE_REPAINT_SPEED,
      {
        leading: true,
        trailing: true,
      },
    );
  }

  componentDidMount() {
    window.addEventListener('resize', this._updateWidth);
    window.requestAnimationFrame(this._updateWidth);
    if (this.props.autoplay) {
      this._autoplay();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._updateWidth);
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

  _updateWidth() {
    const element = ReactDOM.findDOMNode(this.itemsContainerRef);
    const width = element.getBoundingClientRect().width;

    this.setState({ width });
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
    return this.state.activeIndex === 0;
  }

  _isLastImage() {
    return this.state.activeIndex === this.state.itemsQuantity - 1;
  }

  _slideTo(index) {
    if (index !== this.state.activeIndex) {
      this.setState({
        activeIndex: index,
      });
    }
  }

  _prev() {
    this._slideTo(this._getPrevIndex());
  }

  _next() {
    this._slideTo(this._getNextIndex());
  }

  _getNextIndex() {
    const { activeIndex } = this.state;
    if (this._isLastImage()) {
      return this.props.infinite ? 0 : activeIndex;
    } else {
      return activeIndex + 1;
    }
  }

  _getPrevIndex() {
    const { activeIndex, itemsQuantity } = this.state;
    if (this._isFirstImage()) {
      return this.props.infinite ? itemsQuantity - 1 : 0;
    } else {
      return activeIndex - 1;
    }
  }

  _getItem(item, index) {
    const props = {
      key: index,
      width: this.state.width,
      autopreloader: this.props.autopreloader,
    };

    if (this._shouldRenderImages()) {
      props.imageUrl = item.src;
    } else {
      props.getItem = item;
    }

    return <Item {...props} />;
  }

  render() {
    const prevButton = (
      <div className={styles.buttonContainer}>
        <IconButton
          dataHook="prev-button"
          priority="secondary"
          onClick={() => this._prev()}
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
          onClick={() => this._next()}
        >
          <ChevronRightLarge />
        </IconButton>
      </div>
    );

    const { activeIndex, width, itemsQuantity } = this.state;
    const { images, items, autopreloader } = this.props;

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
            <div
              data-hook="images-container"
              ref={ref => (this.itemsContainerRef = ref)}
              className={styles.imagesContainer}
              style={{
                transform: `translate3d(${activeIndex * width * -1}px, 0, 0)`,
              }}
            >
              {this._shouldRenderImages()
                ? images.map(this._getItem)
                : items.map(this._getItem)}
            </div>
          </Proportion>
          {nextButton}
        </div>
        <Pagination
          className={styles.paginationLayout}
          totalPages={itemsQuantity}
          currentPage={this.state.activeIndex}
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
  autopreloader: Proportion.bool,
};

Carousel.defaultProps = {
  infinite: true,
  images: [],
};
Carousel.displayName = 'Carousel';

export default Carousel;
