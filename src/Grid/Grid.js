import React, {Component} from 'react';
import styles from './Grid.scss';
import Card from '../Card';
import classNames from 'classnames';

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
    children: React.PropTypes.node,
    rtl: React.PropTypes.bool
  };

  render() {
    const rowClasses = classNames(styles.row, {
      [styles.rtl]: this.props.rtl
    });

    return (
      <div className={rowClasses}>
        {this.props.children}
      </div>
    );
  }
}

class AutoAdjustedRow extends Component {

  DEFAULT_MAX_SPAN = 12;
  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    const children = this.props.children;
    const cols = Array.isArray(children) ? children : [children];
    const spanSize = Math.floor(this.DEFAULT_MAX_SPAN / cols.length);
    return (
      <Row>
        {cols.map((child, index) => <Col span={spanSize} key={index}>{child}</Col>)}
      </Row>
    );
  }
}

class Col extends Component {

  static propTypes = {
    children: React.PropTypes.node,
    span: React.PropTypes.number.isRequired,
    rtl: React.PropTypes.bool
  };

  render() {
    const columnClasses = classNames(
      styles.column,
      styles[`colXs${this.props.span}`], {
        [styles.rtl]: this.props.rtl
      });

    return (
      <div className={columnClasses}>
        {this.props.children}
      </div>
    );
  }
}

export {Container, Row, AutoAdjustedRow, Col, Card};
