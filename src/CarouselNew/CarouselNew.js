import React from 'react';
import PropTypes from 'prop-types';
import Proportion from '../Proportion';

import styles from './CarouselNew.scss';
import Slider from 'react-slick';

/**
 * yet another carousel
 */
class CarouselNew extends React.PureComponent {
  static displayName = 'CarouselNew';

  static propTypes = {
    dataHook: PropTypes.string,

    /** Text for the button */
    buttonText: PropTypes.string,
  };

  static defaultProps = {
    buttonText: 'Click me!',
  };

  componentDidMount() {
    const script1 = document.createElement('link');
    script1.type = 'text/css';
    script1.rel = 'stylesheet';
    script1.href =
      'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css';
    document.head.appendChild(script1);
    const script2 = document.createElement('link');
    script2.type = 'text/css';
    script2.rel = 'stylesheet';
    script2.href =
      'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css';
    document.head.appendChild(script2);
  }

  _renderImage(image) {
    return (
      <div style={{ width: 100 }}>
        <img src={image.src} />
      </div>
    );
  }

  render() {
    const { dataHook, images } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div data-hook={dataHook}>
        <Slider {...settings}>{images && images.map(this._renderImage)}</Slider>
      </div>
    );
  }
}

export default CarouselNew;
