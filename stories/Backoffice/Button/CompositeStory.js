import React from 'react';
import {storiesOf} from '@storybook/react';
import isPlainObject from 'lodash/isPlainObject';

import * as Icons from 'wix-style-react/Icons';

import InteractiveCodeExample from '../../utils/Components/InteractiveCodeExample';
import ButtonTextLink from './ButtonTextLink';
import story from '../../utils/Components/Story';

const icons = Object.keys(Icons).map(name => React.createElement(Icons[name]));

const baseButtonPreset = {
  category: '5. Buttons',
  storyName: '5.1 Standard',
  componentSrcFolder: 'Backoffice/Button',
  componentProps: {
    height: 'medium',
    disabled: false,
    theme: 'fullblue',
    children: 'Click Me'
  },
  exampleProps: {
    onClick: () => 'Clicked!',
    onMouseEnter: () => 'Mouse Enter!',
    onMouseLeave: () => 'Mouse Leave!',
    prefixIcon: icons,
    suffixIcon: icons
  }
};

const buttonPresets = [
  {storyName: '5.1 Standard'},

  {
    storyName: '5.2 White',
    componentProps: {
      theme: 'whiteblueprimary'
    }
  },

  {
    storyName: '5.3 Icon',
    componentProps: {
      theme: 'icon-standard',
      children: <Icons.Close size="12px"/>
    },
    exampleProps: {
      children: icons
    }
  },

  {
    storyName: '5.4 Error',
    componentProps: {
      theme: 'fullred'
    }
  },

  {
    storyName: '5.5 Premium',
    componentProps: {
      theme: 'fullpurple'
    }
  },

  {
    storyName: '5.6 Transparent',
    componentProps: {
      height: 'small',
      theme: 'transparent'
    }
  },

  {
    storyName: '5.7 Close',
    componentProps: {
      theme: 'close-standard',
      children: <Icons.Close size="6px"/>
    },
    exampleProps: {
      children: icons
    }
  }
];


const deepSpread = (base = {}, addon = {}) =>
  Object
    .keys({...base, ...addon})
    .reduce((object, baseKey) => {
      if (isPlainObject(base[baseKey])) {
        object[baseKey] = deepSpread(base[baseKey], addon[baseKey]);
      } else {
        object[baseKey] = addon[baseKey] || base[baseKey];
      }

      return object;
    }, {});

buttonPresets.map(preset => story(deepSpread(baseButtonPreset, preset)));

storiesOf(baseButtonPreset.category, module)
  .add('5.8 Text Link', () => (
    <div>
      <h1>Text Link</h1>
      <InteractiveCodeExample title="Customize a <TextLink/>">
        <ButtonTextLink/>
      </InteractiveCodeExample>
    </div>
  ));
