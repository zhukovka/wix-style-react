import React from 'react';
import SideMenu from 'wix-style-react/SideMenu';

import HelpIcon from '../../src/Icons/dist/components/Help';
import TrashIcon from '../../src/Icons/dist/components/Trash3';

export default () =>
  <div style={{width: 220, height: 700}}>
    <SideMenu>
      <SideMenu.Logo onClick={() => console.log('Logo clicked')}>
        <TrashIcon size="5em"/>
        <h2 style={{color: '#fff'}}>My Application</h2>
      </SideMenu.Logo>

      <SideMenu.Navigation>
        <SideMenu.NavigationLink onClick={() => console.log('#1 clicked')}>
          Link #1
        </SideMenu.NavigationLink>
        <SideMenu.NavigationLink onClick={() => console.log('#2 clicked')}>
          Link #2
        </SideMenu.NavigationLink>

        <SideMenu.NavigationSeparator/>

        <SideMenu.NavigationLink isActive onClick={() => console.log('#3 clicked')}>
          Link #3
        </SideMenu.NavigationLink>

        <SideMenu.NavigationLink
          href="https://academy.wix.com/en/seo"
          target="_blank"
          isDiminishedHover
          >
          Dim Hover link #1
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
      </SideMenu.Footer>
    </SideMenu>
  </div>;

