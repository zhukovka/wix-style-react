import React from 'react';
import PropTypes from 'prop-types';

import style from './Panel.st.css';

export const Panel = props => {

  return (
    <div {...style('root', {}, props)} >
      <div className={style.middlePartContainer}>
        {!!props.sidebar && <div className={style.sidebar}>{props.sidebar}</div>}
        <div className={style.body}>{props.body}</div>
      </div>
      {!!props.footer && <div className={style.footer}>{props.footer}</div>}
    </div>
  );
};

Panel.propTypes = {
  body: PropTypes.node.isRequired,
  sidebar: PropTypes.node,
  footer: PropTypes.node
};

export default Panel;
