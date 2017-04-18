import React from 'react';
import {bool, node} from 'prop-types';
import classNames from 'classnames';
import WixComponent from '../WixComponent';
import styles from './Card.scss';
import Content from './Content';
import Header from './Header';
import LinkHeader from './LinkHeader';
import ButtonHeader from './ButtonHeader';
class Card extends WixComponent {

  static propTypes = {
    children: node,
    stretchVertically: bool
  };
  static defaultProps = {
    stretchVertically: false
  };

  render() {
    const cssClasses = classNames({
      [styles.card]: true,
      [styles.stretchVertically]: this.props.stretchVertically
    });
    return (
      <div className={cssClasses}>
        {this.props.children}
      </div>
    );
  }
}

Card.Content = Content;
Card.Header = Header;
Card.LinkHeader = LinkHeader;
Card.ButtonHeader = ButtonHeader;

export default Card;
