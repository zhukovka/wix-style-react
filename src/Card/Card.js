import React, {Component} from 'react';
import styles from './Card.scss';
import classNames from 'classnames';

export default class Card extends Component {

  static propTypes = {
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string,
    withoutDivider: React.PropTypes.bool,
    children: React.PropTypes.node
  };

  static defaultProps = {
    title: null,
    subtitle: null,
    withoutDivider: false
  };

  render() {
    const {title, subtitle, withoutDivider} = this.props;
    let header = null;
    if (title || subtitle) {
      const headerClasses = classNames({
        [styles.header]: true,
        [styles.withDivider]: !withoutDivider,
      });

      const titleElement = title ? (
        <div className={styles.title}>
          {this.props.title}
        </div>
        ) : null;

      const subtitleElement = subtitle ? (
        <div className={styles.subtitle}>
          {this.props.subtitle}
        </div>
        ) : null;

      header = (
        <div className={headerClasses}>
          {titleElement}
          {subtitleElement}
        </div>
      );
    }

    return (
      <div className={styles.card}>
        {header}
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
