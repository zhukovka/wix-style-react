import React from 'react';
import s from './BusinessManagerMock.scss';

export const BusinessManagerMock = ({ children }) => (
  <div className={s.root}>
    <div className={s.header} />
    <div className={s.body}>
      <div className={s.sideBar}>SideBar</div>
      <div className={s.pageContainer}>{children}</div>
    </div>
  </div>
);
