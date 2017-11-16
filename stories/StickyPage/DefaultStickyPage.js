import React from 'react';
import StickyPage from 'wix-style-react/StickyPage';
import s from './StickyPage.scss';
import Content from './Content';
import Header from './Header';

export default () => (
  <div className={s.container}>
    <StickyPage dataHook="story-stickyPage">
      <StickyPage.Header>
        <Header/>
      </StickyPage.Header>
      <StickyPage.Content>
        <Content/>
      </StickyPage.Content>
    </StickyPage>
  </div>
);
