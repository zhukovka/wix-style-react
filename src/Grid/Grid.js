import React, {Component} from 'react';
import styles from './Grid.scss';
import Card from '../Card';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Container extends Component {

  static propTypes = {
    children: PropTypes.node
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
    children: PropTypes.node,
    rtl: PropTypes.bool,
    stretchViewsVertically: PropTypes.bool
  };

  static defaultProps = {
    stretchViewsVertically: false
  };

  render() {
    const rowClasses = classNames(styles.row, {
      [styles.rtl]: this.props.rtl,
      [styles.stretch_vertically_row]: this.props.stretchViewsVertically
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
    children: PropTypes.node
  };

  render() {
    const cssClasses = classNames(styles.row, styles.flexContainer);
    const children = this.props.children;
    const cols = Array.isArray(children) ? children : [children];
    const spanSize = Math.floor(this.DEFAULT_MAX_SPAN / cols.length);
    return (
      <div className={cssClasses}>
        {cols.map((child, index) => <Col span={spanSize} key={index}>{child}</Col>)}
      </div>
    );
  }
}

class Col extends Component {

  static propTypes = {
    children: PropTypes.node,
    span: PropTypes.number,
    rtl: PropTypes.bool,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    hiddenXs: PropTypes.string,
    hiddenSm: PropTypes.string,
    hiddenMd: PropTypes.string,
    hiddenLg: PropTypes.string,
    hiddenXl: PropTypes.string,
  };

  isUpDown(str) {
    if (!str) {
      return false;
    }
    str = str.toLowerCase();
    return str.toLowerCase() === 'up' || str === 'down';
  }

  isLegalCol(numStr) {
    if (!numStr) {
      return false;
    }
    const num = Number(numStr);
    return Number.isInteger(num) && num > 0 && num <= 12;
  }

  capitilizeFirstLetter(str) {
    console.log(str);
    return str ? str.toLowerCase().replace(/(^| )(\w)/g, s => s.toUpperCase()) : str;
  }

  render() {
    const columnClasses = classNames(
      styles.column,
      {[styles.rtl]: this.props.rtl},
      {[styles[`colXs${this.props.span}`]]: this.isLegalCol(this.props.span)},
      {[styles[`colXs${this.props.xs}`]]: this.isLegalCol(this.props.xs)},
      {[styles[`colSm${this.props.sm}`]]: this.isLegalCol(this.props.sm)},
      {[styles[`colMd${this.props.md}`]]: this.isLegalCol(this.props.md)},
      {[styles[`colLg${this.props.lg}`]]: this.isLegalCol(this.props.lg)},
      {[styles[`colXl${this.props.xl}`]]: this.isLegalCol(this.props.xl)},
      {[styles[`hiddenXs` + this.capitilizeFirstLetter(this.props.hiddenXs)]]: this.isUpDown(this.props.hiddenXs)},
      {[styles[`hiddenSm` + this.capitilizeFirstLetter(this.props.hiddenSm)]]: this.isUpDown(this.props.hiddenSm)},
      {[styles[`hiddenMd` + this.capitilizeFirstLetter(this.props.hiddenMd)]]: this.isUpDown(this.props.hiddenMd)},
      {[styles[`hiddenLg` + this.capitilizeFirstLetter(this.props.hiddenLg)]]: this.isUpDown(this.props.hiddenLg)},
      {[styles[`hiddenXl` + this.capitilizeFirstLetter(this.props.hiddenXl)]]: this.isUpDown(this.props.hiddenXl)}
    );

    return (
      <div className={columnClasses}>
        {this.props.children}
      </div>
    );
  }
}

export {Container, Row, AutoAdjustedRow, Col, Card};
