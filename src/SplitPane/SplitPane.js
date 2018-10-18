import React from 'react';
import propTypes from 'prop-types';

import classNames from 'classnames';
import style from './SplitPane.st.css';

export const SplitPane = props => {
  const {split, children} = props;

  const classes = classNames(
    {
      [style.vertical]: split === 'vertical',
      [style.horizontal]: split === 'horizontal'
    },
    props.className
  );

  //TODO: Make border style from stylesheet and in inline
  return (
    <div
      {...style('root', {}, {...props, className: classes})}
      >
      <div style={{[props.split === 'vertical' ? 'borderRight' : 'borderBottom']: '1px solid black'}}>
        {React.Children.toArray(children)[0]}
      </div>
      <div>
        {React.Children.toArray(children)[1]}
      </div>
    </div>
  );
};
SplitPane.propTypes = {
  split: propTypes.oneOf(['horizontal', 'vertical']),
  className: propTypes.string,
  children: propTypes.any
};

export default SplitPane;
