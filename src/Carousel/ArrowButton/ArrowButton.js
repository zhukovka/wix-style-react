import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../../IconButton/IconButton';

const ArrowButton = props => {
  const { dataHook, arrowSkin, arrowSize, icon } = props;
  return arrowProps => {
    // Disregard unnecessary slick arrow props
    const { currentSlide, slideCount, ...remainingProps } = arrowProps;

    return (
      <div {...remainingProps}>
        <IconButton
          skin={arrowSkin}
          size={arrowSize}
          dataHook={dataHook}
          priority="secondary"
        >
          {icon}
        </IconButton>
      </div>
    );
  };
};

ArrowButton.propTypes = {
  dataHook: PropTypes.string,
  icon: PropTypes.element.isRequired,
};

export default ArrowButton;
