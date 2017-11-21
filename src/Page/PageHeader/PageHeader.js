import s from './PageHeader.scss';
import React from 'react';
import PropTypes from 'prop-types';
import WixComponent from '../../BaseComponents/WixComponent';
import classNames from 'classnames';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import Text from '../../Text/Text';
import {Animator} from 'wix-animations';

const animateComponent = (show, useEnterDelay, content) => {
  return useEnterDelay ?
    <Animator show={show} opacity timing="medium" delay={{enter: 100}}>
      {content}
    </Animator> :
    <Animator show={show} opacity timing="medium">
      {content}
    </Animator>;
};

export const generateDefaultBreadcrumbs = title =>
  <Breadcrumbs
    items={[{id: '1', value: title}]}
    activeId="1"
    size="medium"
    theme="onGrayBackground"
    onClick={() => {}}
    />;

/**
  * A header that sticks at the top of the container which minimizes on scroll
  */
export class PageHeader extends WixComponent {
  render() {
    const {breadcrumbs, showBackButton, title, subtitle, minimized} = this.props;

    return (
      <div>
        {
          animateComponent(!!breadcrumbs || minimized, !breadcrumbs,
            <div className={classNames(s.breadcrumbsContainer, {[s.absolute]: !breadcrumbs, [s.minimized]: minimized})} data-hook="page-header-breadcrumbs">
              {breadcrumbs || generateDefaultBreadcrumbs(title)}
            </div>
          )
        }
        {showBackButton &&
          animateComponent(!minimized, !breadcrumbs,
            <div className={classNames(s.backButton, {[s.minimized]: minimized})}>
              (=
            </div>
          )
        }
        <div className={s.titlesContainer}>
          {
            animateComponent(!minimized, !breadcrumbs,
              <div className={classNames(s.title, {[s.minimized]: minimized})} data-hook="page-header-title">
                <Text appearance="H1">{title}</Text>
              </div>
            )
          }
          {subtitle &&
            animateComponent(!minimized, !breadcrumbs,
              <div className={classNames(s.subtitle, {[s.minimized]: minimized})} data-hook="page-header-subtitle">
                <Text appearance="T1.1">{subtitle}</Text>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

PageHeader.displayName = 'PageHeader';

PageHeader.propTypes = {
  /** The state from the header container */
  minimized: PropTypes.bool,
  /** Breadcrumbs object to display */
  breadcrumbs: PropTypes.element,
  /** Title to display */
  title: PropTypes.string.isRequired,
  /** Subtitle to display */
  subtitle: PropTypes.string,
  /** Subtitle to display */
  showBackButton: PropTypes.bool
};

PageHeader.defaultProps = {
  minimized: false
};

export default PageHeader;
