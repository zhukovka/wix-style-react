import * as React from 'react';
import CardGalleryItem from '../../src/CardGalleryItem';
import {cardGalleryItemTestkitFactory} from '../../testkit';
import {cardGalleryItemTestkitFactory as cardGalleryItemEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = cardGalleryItemTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = cardGalleryItemEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function CardGalleryItemWithMandatoryProps() {
  return <CardGalleryItem primaryActionProps={{}} secondaryActionProps={{}} />;
}

function CardGalleryItemWithAllProps() {
  return (
    <CardGalleryItem
      backgroundImageUrl="https://static.wixstatic.com/media/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg/v1/fill/w_640,h_360,al_c,q_80,usm_0.66_1.00_0.01/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg"
      className="asd"
      primaryActionProps={{
        label: 'Button',
        onClick: e => {
          alert('Primary action clicked');
        }
      }}
      secondaryActionProps={{
        label: 'Text Link',
        onClick: e => {
          alert('Secondary action clicked');
        }
      }}
      subtitle="Card subtitle"
      title="Card Title"
      dataHook="hook"
    />
  );
}
