import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import WixComponent from '../BaseComponents/WixComponent';
import Text from '../Text';
import ActionButton from './ActionButton';
import CloseButton from './CloseButton';
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
        {this.props.onClose &&
          <div className={css.close}>
            <CloseButton onClick={this.props.onClose}/>
          </div>
        }
        <div className={css.content}>
          {this.props.title && <Text dataHook="title" appearance="T4">{this.props.title}</Text>}
          {this.props.children}
          {this.props.onAction &&
            <div className={css.action}>
              <ActionButton onClick={this.props.onAction}>
                {this.props.actionText}
              </ActionButton>
            </div>
          }
        </div>
      </div>
    );
  }
}

SectionHelper.propTypes = {
  /** Sets the look and feel of the component */
  appearance: PropTypes.oneOf(Object.keys(HELPER_APPEARANCE)),
  /** Adds text as the title */
  title: PropTypes.node,
  /** When provided, will make a close button appear and invoke it upon click */
  onClose: PropTypes.func,
  /** When provided, will make an action button appear and invoke it upon click */
  onAction: PropTypes.func,
  /** Text label for the action button */
  actionText: PropTypes.string,
  /** Children to render */
  children: PropTypes.node
};

SectionHelper.defaultProps = {
  appearance: 'warning',
  title: null
};

export default SectionHelper;
