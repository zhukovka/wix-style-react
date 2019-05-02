import * as React from 'react';
import ImageViewer from '../../src/ImageViewer';
import {imageViewerTestkitFactory} from '../../testkit';
import {imageViewerTestkitFactory as imageViewerEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';
import {Omit, TooltipProps} from '../../src';
import {TooltipNewProps} from '../../src/Tooltip';

function testkits() {
  const vanilla = imageViewerTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = imageViewerEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function ImageViewerWithMandatoryProps() {
  return <ImageViewer />;
}

function ImageViewerWithAllProps() {
  return (
    <ImageViewer
      addImageInfo="info"
      dataHook="hook"
      error
      errorMessage="msg"
      height="100"
      width="100"
      imageUrl="url"
      onAddImage={e => undefined}
      onRemoveImage={e => undefined}
      onUpdateImage={e => undefined}
      removeImageInfo="info"
      removeRoundedBorders
      showUpdateButton
      tooltipPlacement="auto"
      updateImageInfo="info"
      tooltipProps={{
        upgrade: true
      }}
    />
  );
}
