import React from 'react';
import PropTypes from 'prop-types';

export default function X(props) {

  const {width, height, color, shapeRendering, thickness} = props;

  let path = '';
  let i;

  for (i = 0; i <= thickness / 2; ++i) {
    path += `M${i} 0 L${width} ${height - i} `;
    path += `M${width - i} 0 L0 ${height - i} `;
  }

  for (i = 1; i <= thickness / 2; ++i) {
    path += `M0 ${i} L${width - i} ${height} `;
    path += `M${width} ${i} L${i} ${height} `;
  }

  const style = {stroke: color, strokeWidth: '1px'};

  return (
    <svg width={width} height={height} style={{shapeRendering}}>
      <path d={path} style={style}/>
    </svg>
  );
}

X.displayName = 'X';

X.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  thickness: PropTypes.number.isRequired,
  color: PropTypes.string,
  shapeRendering: PropTypes.string.isRequired
};

X.defaultProps = {
  shapeRendering: 'crispEdges',
  thickness: 1
};
