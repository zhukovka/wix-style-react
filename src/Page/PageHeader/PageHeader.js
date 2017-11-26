import s from './PageHeader.scss';
import React from 'react';
import PropTypes from 'prop-types';
import WixComponent from '../../BaseComponents/WixComponent';
import classNames from 'classnames';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import Text from '../../Text/Text';
import {Animator} from 'wix-animations';
import {ArrowLeft} from '../../Icons';
import Button from '../../Button';

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
    const {breadcrumbs, onBackClicked, title, subtitle, minimized, actionsBar, showBackButton} = this.props;

    return (
      <div className={s.headerContainer}>
        <div className={s.header}>
          <div>
            {
              animateComponent(!!breadcrumbs || minimized, !breadcrumbs,
                <div className={classNames(s.breadcrumbsContainer, {[s.absolute]: !breadcrumbs, [s.minimized]: minimized})} data-hook="page-header-breadcrumbs">
                  {breadcrumbs || generateDefaultBreadcrumbs(title)}
                </div>)
            }
          </div>
          {
            showBackButton && onBackClicked && animateComponent(!minimized, !breadcrumbs,
              <div className={classNames(s.backButton, {[s.minimized]: minimized})} data-hook="page-header-backbutton">
                <Button onClick={onBackClicked} theme="icon-white">
                  <ArrowLeft size="16px"/>
                </Button>
              </div>)
          }
          <div className={s.titleContainer}>
            {
              animateComponent(!minimized, !breadcrumbs,
                <div className={classNames(s.title, {[s.minimized]: minimized})} data-hook="page-header-title">
                  <Text appearance="H1">{title}</Text>
                </div>)
            }
            {
              subtitle && animateComponent(!minimized, !breadcrumbs,
                <div className={classNames({[s.minimized]: minimized})} data-hook="page-header-subtitle">
                  <Text appearance="T1.1">{subtitle}</Text>
                </div>)
            }
          </div>
        </div>
        {
          actionsBar &&
            <div className={classNames(s.actionsBar, {[s.minimized]: minimized, [s.withBreadcrumbs]: !!breadcrumbs})} data-hook="page-header-actionbar">
              {React.cloneElement(actionsBar, {minimized})}
            </div>
        }
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
  /** Callback when back button clicked */
  onBackClicked: PropTypes.func,
  /** Should display back button */
  showBackButton: PropTypes.bool,
  /** Components that includes actions */
  actionBar: PropTypes.element
};

PageHeader.defaultProps = {
  minimized: false
};

export default PageHeader;
