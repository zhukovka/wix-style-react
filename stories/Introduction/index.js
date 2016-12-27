import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import Readme from '../../README.md';
import TestsReadme from '../../TESTS.md';
import Contribution from '../../CONTRIBUTION.md';

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