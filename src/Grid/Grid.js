import React, {Component} from 'react';
import styles from './Grid.scss';
import Card from '../Card';

class Container extends Component {

  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    return (
      <div className={styles.wixContainer}>
        {this.props.children}
      </div>
    );
  }
}

class Row extends Component {

  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    return (
      <div className={styles.row}>
        {this.props.children}
      </div>
    );
  }
}

class Col extends Component {

  static propTypes = {
    children: React.PropTypes.node,
    span: React.PropTypes.number.isRequired
  };

  render() {
    const className = styles[`colXs${this.props.span}`];

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

export {Container, Row, Col, Card};
