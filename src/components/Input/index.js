import React from 'react';
import {object} from 'prop-types';
import styles from './styles';
import {withStyles} from '../../providers/WixStyleProvider';

class Input extends React.Component {
  static propTypes = {
    classes: object.isRequired
  }

  render() {
    return (
      <input className={this.props.classes.input}/>
    );
  }
}

export default withStyles(Input, styles);
