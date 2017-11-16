import React from 'react';
import s from './StickyPage.scss';
import classNames from 'classnames';

export default p => (
  <div className={classNames(s.title, {minimized: p.minimized})} style={{color: p.minimized ? 'red' : 'green'}}>
    This is a title
  </div>);
