import React from 'react';
import { storiesOf } from '@storybook/react';
import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { storySettings, testStories } from './storySettings';
import Modal from '../Modal';
import { MessageBoxFunctionalLayout } from '../../MessageBox/index';

const kind = getTestStoryKind(storySettings);

storiesOf(kind, module).add(testStories.modalBackgroundScroll, () => (
  <ModalToTest />
));

class ModalToTest extends React.Component {
  render() {
    return (
      <Modal
        isOpen
        shouldDisplayCloseButton
        contentLabel="Modal With Close Button Example"
        scrollableContent={false}
      >
        <MessageBoxFunctionalLayout
          dataHook={storySettings.dataHook}
          theme="blue"
          title="Modal With Close Button Example"
          confirmText="OK"
          cancelText="Cancel"
        >
          I Have a close button on the upper right corner but its impossible to
          press without deleting the github creature first using the console
        </MessageBoxFunctionalLayout>
      </Modal>
    );
  }
}
