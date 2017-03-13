import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames';
import WixComponent from '../../WixComponent';

class Header extends WixComponent {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    subtitle: React.PropTypes.string,
    withoutDivider: React.PropTypes.bool
  };

  static defaultProps = {
    subtitle: null,
    withoutDivider: false
  };

  render() {
    const {title, subtitle, withoutDivider} = this.props;

    const headerClasses = classNames({
      [styles.header]: true,
      [styles.withDivider]: !withoutDivider,
    });

    const titleElement = (
      <div data-hook="title" className={styles.title}>
        {title}
      </div>
    );

    const subtitleElement = subtitle ? (
      <div data-hook="subtitle" className={styles.subtitle}>
        {this.props.subtitle}
      </div>
    ) : null;

    return (
      <div className={headerClasses}>
        {titleElement}
        {subtitleElement}
      </div>
    );
  }
}

export default Header;
