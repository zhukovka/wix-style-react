import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import ChevronLeftLarge from '../new-icons/ChevronLeftLarge';
import ChevronRightLarge from '../new-icons/ChevronRightLarge';
import IconButton from '../IconButton/IconButton';
import './CarouselNew.global.scss';

class CarouselNew extends React.PureComponent {
  _actionArrow = ({ dataHook, icon }) => {
    return (
      <div style={{ display: 'block' }}>
        <IconButton priority="secondary" dataHook={dataHook}>
          {icon}
        </IconButton>
      </div>
    );
  };

  render() {
    const { dataHook, infinite, autoplay, dots } = this.props;

    const settings = {
      dots,
      infinite,
      autoplay,
      slidesToShow: 1,
      slidesToScroll: 1,
      // nextArrow: this._actionArrow({
      //   dataHook: 'next-button',
      //   icon: <ChevronRightLarge />,
      // }),
      // prevArrow: this._actionArrow({
      //   dataHook: 'prev-button',
      //   icon: <ChevronLeftLarge />,
      // }),
    };

    return (
      <div data-hook={dataHook}>
        <Slider {...settings}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </Slider>
      </div>
    );
  }
}

CarouselNew.displayName = 'CarouselNew';

CarouselNew.propTypes = {
  /** Array of strings where each string is a src of an image (in \<img src="your_src" /\>) */
  images: PropTypes.array,
  /** Images loop endlessly */
  infinite: PropTypes.bool,
  /** Auto-playing of images */
  autoplay: PropTypes.bool,
  /** Slide/Fade animation speeds */
  speed: PropTypes.number,
  /** Number of slides to show */
  slidesToShow: PropTypes.number,
  /** Number of slides to scroll */
  slidesToScroll: PropTypes.number,
  /** Show dot indicators */
  dots: PropTypes.bool,
};

CarouselNew.defaultProps = {
  infinite: true,
  autoplay: true,
  speed: 500,
  images: [],
  dots: true,
};

export default CarouselNew;
