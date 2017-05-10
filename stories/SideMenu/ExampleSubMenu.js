import React from 'react';
import {
  SideMenu,
  Button
} from 'wix-style-react';
import HelpIcon from '../../src/Icons/dist/components/Help';
import ChatIcon from '../../src/Icons/dist/components/Chat';
import TrashIcon from '../../src/Icons/dist/components/Trash3';

export default () =>
  <div style={{width: 220, height: 700}}>
    <SideMenu>
      <SideMenu.Header>
        <TrashIcon size="5em"/>
        <h2>My Application</h2>
      </SideMenu.Header>
      <SideMenu.NavigationBackLink>
        Back
      </SideMenu.NavigationBackLink>
      <SideMenu.Navigation>
        <SideMenu.NavigationLink isActive onClick={() => console.log('#1 clicked')}>
          Link #1
        </SideMenu.NavigationLink>
        <SideMenu.NavigationLink onClick={() => console.log('#2 clicked')}>
          Link #2
        </SideMenu.NavigationLink>
      </SideMenu.Navigation>
      <SideMenu.Footer>
        <SideMenu.FooterLink
          href="https://support.wix.com/"
          target="_blank"
          icon={<HelpIcon size="1em"/>}
        >
          Help Me!
        </SideMenu.FooterLink>

        <SideMenu.FooterTinyLink
          href="https://support.wix.com/en/article/wix-seo-wiz-suggestions-and-feedback"
          target="_blank"
          icon={<div style={{marginTop: 2}}><ChatIcon size="1em"/></div>}
          tooltip="Hey, come talk to me!"
          onClick={() => console.log('clicked on tiny link yay!')}
        />
      </SideMenu.Footer>
    </SideMenu>
  </div>;