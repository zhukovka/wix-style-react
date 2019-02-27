import React from 'react';
import { bool, node, string } from 'prop-types';
import classNames from 'classnames';

import Content from './Content';
import Header from './Header';
import Divider from './Divider';
import styles from './Card.scss';

const Card = ({
  stretchVertically,
  hideOverflow,
  className,
  children,
  dataHook,
}) => (
  <div
    className={classNames(styles.card, className, {
      [styles.stretchVertically]: stretchVertically,
      [styles.hideOverflow]: hideOverflow,
    })}
    children={children}
    data-hook={dataHook}
  />
);

Card.displayName = 'Card';

Card.propTypes = {
  children: node,
  stretchVertically: bool,
  hideOverflow: bool,
  dataHook: string,
};

Card.defaultProps = {
  stretchVertically: false,
};

Card.Content = Content;
Card.Header = Header;
Card.Divider = Divider;

export default Card;
