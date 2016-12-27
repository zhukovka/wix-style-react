import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import Readme from '../../README.md';
import TestsReadme from '../../stories/Introduction/Tests/README.md';
import Contribution from '../../stories/Introduction/Contribution/README.md';

storiesOf('Introduction', {})
  .add('Getting started', () => (
    <div>
       <Markdown source={Readme}/>
    </div>
  )).add('Testing', () => (
    <div>
      <Markdown source={TestsReadme}/>
    </div>
  )).add('Contribution', () => (
  <div>
    <Markdown source={Contribution}/>
  </div>
));