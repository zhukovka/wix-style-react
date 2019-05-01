import React from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.scss';
import './Carousel.global.scss';
import ChevronLeftLarge from '../new-icons/ChevronLeftLarge';
import ChevronRightLarge from '../new-icons/ChevronRightLarge';
import Pagination from './Pagination';
import Loader from '../Loader';
import Proportion from '../Proportion';
import ArrowButton from './ArrowButton';
import Slider from 'react-slick';

const AUTOPLAY_SPEED = 2000;
const TRANSITION_SPEED = 600;
const dataHooks = {
  imagesContainer: 'images-container',
  carouselImage: 'carousel-img',
  loader: 'loader',
  prevButton: 'prev-button',
  nextButton: 'next-button',
};

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedImageCount: 0,
    };
  }

  componentWillMount() {
    this.sliderSettings = this._resolveSliderSettings(this.props);
  }

  _renderImages = images => {
    return images.map((image, index) => (
      <div key={index} data-hook={dataHooks.imagesContainer}>
        <img
          src={image.src}
          data-hook={dataHooks.carouselImage}
          className={styles.image}
          onLoad={() => this._onImageLoad()}
        />
      </div>
    ));
  };

  _onImageLoad() {
    this.setState(state => {
      const loadedImageCount = state.loadedImageCount + 1;
      return {
        loadedImageCount,
      };
    });
  }

  _isLoading() {
    return this.state.loadedImageCount < this.props.images.length;
  }

  _resolveSliderSettings = ({
    dots,
    infinite,
    autoplay,
    autoplaySpeed,
    speed,
    initialSlide,
    arrowSkin,
    arrowSize,
  }) => {
    const PrevButton = ArrowButton({
      icon: <ChevronLeftLarge />,
      dataHook: dataHooks.prevButton,
      arrowSkin,
      arrowSize,
    });

    const NextButton = ArrowButton({
      icon: <ChevronRightLarge />,
      dataHook: dataHooks.nextButton,
      arrowSkin,
      arrowSize,
    });

    return {
      infinite,
      autoplay,
      autoplaySpeed,
      speed,
      dots,
      initialSlide,
      lazyLoad: 'progressive',
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextButton />,
      prevArrow: <PrevButton />,
      appendDots: pages => <Pagination>{pages}</Pagination>,
      customPaging: i => (
        <div className={styles.dotNavigator} data-hook={`page-navigation-${i}`}>
          {i}
        </div>
      ),
    };
  };

  render() {
    const { dataHook, images } = this.props;

    return (
      <Proportion
        aspectRatio={Proportion.PREDEFINED_RATIOS.landscape}
        className={styles.imagesContainerLayout}
      >
        <div data-hook={dataHook}>
          <div
            className={styles.sliderContainer}
            data-is-loading={this._isLoading()}
          >
            <Slider {...this.sliderSettings}>
              {images ? this._renderImages(images) : null}
            </Slider>
          </div>
        </div>
        {this._isLoading() ? (
          <div className={styles.loader}>
            <Loader dataHook="loader" size="small" />
          </div>
        ) : null}
      </Proportion>
    );
  }
}

Carousel.propTypes = {
  dataHook: PropTypes.string,
  /** Array of strings where each string is a src of an image (in \<img src="your_src" /\>) */
  images: PropTypes.array.isRequired,
  /** Images loop endlessly */
  infinite: PropTypes.bool,
  /** Auto-playing of images */
  autoplay: PropTypes.bool,
  /** Show dot indicators */
  dots: PropTypes.bool,
  /** Index of the slide to start on */
  initialSlide: PropTypes.number,
  /** Arrows buttons skin */
  arrowSkin: PropTypes.oneOf(['standard', 'inverted', 'light']),
  /** Arrows buttons sizes */
  arrowSize: PropTypes.oneOf(['small', 'medium']),
};

Carousel.defaultProps = {
  images: [],
  infinite: true,
  autoplay: false,
  speed: TRANSITION_SPEED,
  autoplaySpeed: AUTOPLAY_SPEED,
  dots: true,
  initialSlide: 0,
  arrowSkin: 'standard',
  arrowSize: 'medium',
};
Carousel.displayName = 'Carousel';

export default Carousel;
