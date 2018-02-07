import React from 'react';
import stylesRaw from '!raw-loader!./PageExample.scss';
import './PageExample.scss';
import {bool} from 'prop-types';

export default class SomeContentComponent extends React.Component {
  static propTypes = {
    showScss: bool
  }

  render() {
    return (
      <div style={{backgroundColor: 'white'}}>
        Amir
      </div>
    );
  }
}
