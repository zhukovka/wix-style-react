import React from 'react';
import styles from './Breadcrumbs.scss';
import classNames from 'classnames';
import {Label} from 'wix-style-react';

class Breadcrumbs extends React.Component {
  render() {
    const {items, onClick, size, theme, activeId} = this.props;

    const className = classNames({
      [styles[size]]: true,
      [styles[theme]]: true
    });

    const appearance = theme === 'onDarkBackground' ? 'T3.2' : 'T3';

    return (
      <div className={className}>
        <ul data-hook="breadcrumbs-items">
          {items.map(item => {
            const itemClassName = classNames({
              [styles.active]: activeId === item.id,
              [styles.item]: true
            });
            return (
              <li key={item.id} onClick={() => onClick(item.id)} className={itemClassName}>
                <Label appearance={appearance}>{item.value}</Label>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

Breadcrumbs.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]).isRequired,
    value: React.PropTypes.oneOfType([
      React.PropTypes.node,
      React.PropTypes.string
    ]).isRequired
  })).isRequired,
  onClick: React.PropTypes.func,
  activeId: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  size: React.PropTypes.oneOf(['medium', 'large']),
  theme: React.PropTypes.oneOf(['onWhiteBackground', 'onGrayBackground', 'onDarkBackground']),
};

Breadcrumbs.defaultProps = {
  size: 'medium',
  theme: 'onGrayBackground'
};

export default Breadcrumbs;
