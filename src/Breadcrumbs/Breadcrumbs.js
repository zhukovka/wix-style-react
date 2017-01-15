import React from 'react';
import styles from './Breadcrumbs.scss';
import classNames from 'classnames';

class Breadcrumbs extends React.Component {
  render() {
    const {items, onClick, size, theme} = this.props;

    const className = classNames({
      [styles[size]]: true,
      [styles[theme]]: true
    });

    return (
      <div className={className}>
        <div data-hook="breadcrumbs-items">
          {items.map(item => {
            return (<div key={item.id} onClick={() => onClick(item.id)}>{item.value}</div>);
          })}
        </div>
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
  size: React.PropTypes.oneOf(['normal', 'large']),
  theme: React.PropTypes.oneOf(['onWhiteBackground', 'onGrayBackground', 'onDarkBackground']),
};

Breadcrumbs.defaultProps = {
  size: 'normal',
  theme: 'onGrayBackground'
};

export default Breadcrumbs;
