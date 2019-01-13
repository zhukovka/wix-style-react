/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../storiesHierarchy';
import { storySettings, testStories } from './storySettings';

import TextButton from '../../src/TextButton';
import { Layout, Cell } from '../../src/Layout';
import AddChannel from 'wix-style-react/new-icons/AddChannel';

const kind = getTestStoryKind(storySettings);
const dataHook = 'story-button-test';

const TestContainer = ({ children }) => (
  <div
    dataHook={dataHook}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#f0f4f7',
    }}
  >
    {children}
  </div>
);

const skins = ['standard', 'light', 'premium', 'dark'];

const ButtonBlock = values => {
  const { title, ...rest } = values;
  return (
    <Layout>
      <Cell>
        <h1 style={{ fontSize: '30px', margin: '15px 5px' }}>{title}</h1>
      </Cell>
      <Cell span={6}>
        {skins.map(skin => (
          <div style={{ margin: '5px 0' }}>
            <TextButton {...rest} skin={skin}>
              Click me
            </TextButton>
          </div>
        ))}
      </Cell>
      <Cell span={6}>
        {skins.map(skin => (
          <div style={{ margin: '5px 0' }}>
            <TextButton {...rest} skin={skin} disabled>
              Click me
            </TextButton>
          </div>
        ))}
      </Cell>
    </Layout>
  );
};

storiesOf(kind, module).add(testStories.TEXTBUTTON_SKINS, () => (
  <TestContainer>
    <div style={{ marginLeft: '10px' }}>
      <Layout>
        <ButtonBlock title="TextButton (underline: none)" />
        <ButtonBlock
          underline="onHover"
          title="TextButton (underline: onHover)"
        />
      </Layout>
      <Layout>
        <ButtonBlock
          underline="always"
          title="TextButton (underline: always)"
        />
        <ButtonBlock weight="normal" title="TextButton (weight: normal)" />
      </Layout>
    </div>
  </TestContainer>
));

storiesOf(kind, module).add(testStories.TEXTBUTTON_AFFIXES, () => (
  <TestContainer>
    <div style={{ marginLeft: '10px' }}>
      <Layout cols={2}>
        <ButtonBlock
          size="large"
          title="Affixes (large)"
          suffixIcon={<AddChannel />}
          prefixIcon={<AddChannel />}
        />
        <ButtonBlock
          size="medium"
          title="Affixes (medium)"
          suffixIcon={<AddChannel />}
          prefixIcon={<AddChannel />}
        />
        <ButtonBlock
          size="small"
          title="Affixes (small)"
          suffixIcon={<AddChannel />}
          prefixIcon={<AddChannel />}
        />
      </Layout>
    </div>
  </TestContainer>
));

storiesOf(kind, module).add(testStories.TEXTBUTTON_AS, () => (
  <TestContainer>
    <div style={{ marginLeft: '10px' }}>
      <Layout cols={2}>
        <ButtonBlock as="a" title="as Anchor (underline:none)" />
        <ButtonBlock
          as="a"
          underline="always"
          title="as Anchor (underline: always)"
        />
      </Layout>
    </div>
  </TestContainer>
));
