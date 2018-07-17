/* eslint-disable react/prop-types */
import React from 'react';

import {
  MessageBoxMarketerialLayout,
  MessageBoxFunctionalLayout
} from 'wix-style-react/MessageBox';
import Text from 'wix-style-react/Text';
import TextLink from 'wix-style-react/TextLink';

const layoutStyles = {
  margin: 30
};

export default () => (
  <div>
    <div style={layoutStyles}>
      <h2>{`Example for <MessageBoxMarketerialLayout/>:`}</h2>
      <MessageBoxMarketerialLayout
        title="Looking Good!"
        content="You're doing great as ever"
        theme="blue"
        imageUrl="https://static.wixstatic.com/media/9ab0d1_8f1d1bd00e6c4bcd8764e1cae938f872~mv1.png"
        primaryButtonLabel="Got It"
        secondaryButtonLabel="Do something else"
        onPrimaryButtonClick={() => console.log('You clicked "Got It"')}
        onSecondaryButtonClick={() => console.log('You clicked "Do something else"')}
        onClose={() => console.log(`You're tried to close the MessageBox!`)}
        />
    </div>

    <div style={layoutStyles}>
      <h2>{`Example for <MessageBoxFunctionalLayout/>:`}</h2>
      <MessageBoxFunctionalLayout
        title="Look at me please!"
        primaryButtonLabel="Got It"
        confirmText="Confirm"
        cancelText="Cancel"
        theme="blue"
        onCancel={() => console.log('You clicked "Cancel"')}
        onOk={() => console.log('You clicked "Confirm"')}
        onClose={() => console.log(`You're tried to close the MessageBox!`)}
        >
        I am a confirmation dialog and have red or blue themes
      </MessageBoxFunctionalLayout>
    </div>

    <div style={layoutStyles}>
      <h2>{`Example for <MessageBoxFunctionalLayout/> with a footer:`}</h2>
      <MessageBoxFunctionalLayout
        title="Look at me please!"
        primaryButtonLabel="Got It"
        confirmText="Confirm"
        cancelText="Cancel"
        theme="blue"
        footerBottomChildren={(
          <div>
            <Text size="small">Look at me, I am a footer. </Text>
            <TextLink size="small">Click here!</TextLink>
          </div>
        )}
        onCancel={() => console.log('You clicked "Cancel"')}
        onOk={() => console.log('You clicked "Confirm"')}
        onClose={() => console.log(`You're tried to close the MessageBox!`)}
        >
        I am a confirmation dialog, but now I got a footer!
      </MessageBoxFunctionalLayout>
    </div>
  </div>
);

