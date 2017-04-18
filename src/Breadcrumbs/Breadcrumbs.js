import React from 'react';
import {arrayOf, func, oneOf, oneOfType, node, number, shape, string} from 'prop-types';
import styles from './Breadcrumbs.scss';
import classNames from 'classnames';
import Label from '../Label';
import WixComponent from '../WixComponent';
import BreadcrumbsPathFactory from './BreadcrumbsPathFactory';

class Breadcrumbs extends WixComponent {
  static propTypes = {
    items: arrayOf(shape({
      id: oneOfType([
        string,
        number
      ]).isRequired,
      value: oneOfType([
        node,
        string
      ]).isRequired,
      link: string
    })).isRequired,
    onClick: func,
    activeId: oneOfType([
      string,
      number
    ]),
    size: oneOf(['medium', 'large']),
    theme: oneOf(['onWhiteBackground', 'onGrayBackground', 'onDarkBackground']),
  }

  static defaultProps = {
    size: 'medium',
    theme: 'onGrayBackground',
  }

  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  getLabelAppearance(isActive) {
    const {theme, size} = this.props;

    const isDarkBackground = theme === 'onDarkBackground';
    const isMediumSize = size === 'medium';
    if (isActive && !isDarkBackground) {
      return isMediumSize ? 'T3' : 'T1';
    }
    if (isMediumSize) {
      return isDarkBackground ? 'T3.2' : 'T3.1';
    } else {
      return isDarkBackground ? 'T1.2' : 'T1.1';
    }
  }

  getValue(item) {
    if (!item.link) {
      return item.value;
    } else {
      return <a href={`${item.link}`} style={{color: 'inherit', textDecoration: 'inherit'}}>{item.value}</a>;
    }
  }

  renderItem(item) {
    const {activeId} = this.props;

    const isActive = activeId === item.id;
    const itemClassName = classNames({
      [styles.active]: isActive,
      [styles.item]: true
    });
    const labelAppearance = this.getLabelAppearance(isActive);
    return (
      <li key={item.id} onClick={() => this._onClick(item)} className={itemClassName}>
        <div className={styles.label}>
          <Label appearance={labelAppearance}>{this.getValue(item)}</Label>
        </div>
      </li>
    );
  }

  _onClick(item) {
    this.props.onClick && this.props.onClick(item);
  }

  render() {
    const {items, size, theme, activeId} = this.props;

    const className = classNames({
      [styles.container]: true,
      [styles[size]]: true,
      [styles[theme]]: true,
    });

    return (
      <div className={className}>
        <ul data-hook="breadcrumbs-items">
          {
            items.map(item => this.renderItem(item, activeId))
          }
        </ul>
      </div>
    );
  }
}

export const breadcrumbsPathFactory = BreadcrumbsPathFactory;
export default Breadcrumbs;
