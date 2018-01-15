import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import WixComponent from '../BaseComponents/WixComponent';
import css from './SectionHelper.scss';

export const HELPER_APPEARANCE = {
  warning: css.warning,
  standard: css.standard,
  danger: css.danger,
  success: css.success,
  premium: css.premium
};

/**
 * Used in pages where you need to explain or mention things about the content or actions
 */
class SectionHelper extends WixComponent {
  render() {
    const rootClasses = classNames(css.root, HELPER_APPEARANCE[this.props.appearance]);

    return (
      <div className={rootClasses}>
        <div className={css.content}>
          {this.props.title ? <h3 data-hook="title" className={css.title}>{this.props.title}</h3> : null}
          {this.props.children}
        </div>
      </div>
    );
  }
}

SectionHelper.propTypes = {
  /** Sets the look and feel of the component */
  appearance: PropTypes.oneOf(Object.keys(HELPER_APPEARANCE)),
  /** Adds text as the title */
  title: PropTypes.node
};

SectionHelper.defaultProps = {
  appearance: 'warning',
  title: null
};

export default SectionHelper;
