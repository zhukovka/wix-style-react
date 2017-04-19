import React from 'react';

import {Text} from 'wix-style-react';

export default () =>
  <div>
    <div>Default:</div>
    <Text>Hello, World!</Text>

    <hr/>

    <div>As `h1` with `H0` appearance:</div>
    <Text appearance="H0">Hello, World!</Text>

    <div>As `h2` with `H1` appearance:</div>
    <Text appearance="H1">Hello, World!</Text>

    <hr/>

    <div>As `span` with `T1` appearance:</div>
    <Text appearance="T1" dataHook="story-text">Hello, World!</Text>
  </div>;

