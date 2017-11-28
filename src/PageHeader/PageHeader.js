import s from './PageHeader.scss';
import React from 'react';
import PropTypes from 'prop-types';
import WixComponent from '../BaseComponents/WixComponent';
import classNames from 'classnames';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Text from '../Text/Text';
import {Animator} from 'wix-animations';
import {ArrowLeft} from '../Icons';
import Button from '../Button';

const animateComponent = (show, useEnterDelay, content) => {
  return useEnterDelay ?
    <Animator show={show} opacity timing="medium" delay={{enter: 100}}>
      {content}
    </Animator> :
    <Animator show={show} opacity timing="medium">
      {content}
    </Animator>;
};

const isDarkTheme = (hasBackgroundImage, minimized) => !minimized && hasBackgroundImage;
const getBreadcrumbsTheme = (hasBackgroundImage, minimized) => isDarkTheme(hasBackgroundImage, minimized) ? 'onDarkBackground' : 'onGrayBackground';

const generateDefaultBreadcrumbs = (title, hasBackgroundImage, minimized) =>
  <Breadcrumbs
    items={[{id: '1', value: title}]}
    activeId="1"
    size="medium"
    theme={getBreadcrumbsTheme(hasBackgroundImage, minimized)}
    onClick={() => {}}
    />;

/**
  * A header that sticks at the top of the container which minimizes on scroll
  */
export default class PageHeader extends WixComponent {

  constructor(props) {
    super(props);

    this.state = {
      themedBreadcrumbs: this.generateThemedBreadcrumbs(props)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      themedBreadcrumbs: this.generateThemedBreadcrumbs(nextProps)
    });
  }

  generateThemedBreadcrumbs(props) {
    const {breadcrumbs, title, hasBackgroundImage, minimized} = props;
    if (breadcrumbs) {
      return React.cloneElement(breadcrumbs, {theme: getBreadcrumbsTheme(hasBackgroundImage, minimized)});
    }

    return generateDefaultBreadcrumbs(title, hasBackgroundImage, minimized);
  }

  render() {
    const {breadcrumbs, onBackClicked, title, subtitle, minimized, actionsBar, showBackButton, hasBackgroundImage} = this.props;
    const breadcrumbsExists = !!breadcrumbs;
    const {themedBreadcrumbs} = this.state;

    return (
      <div className={s.headerContainer}>
        <div className={s.header}>
          <div>
            {
              animateComponent(breadcrumbsExists || minimized, !breadcrumbsExists,
                <div className={classNames(s.breadcrumbsContainer, {[s.absolute]: !breadcrumbsExists, [s.minimized]: minimized})} data-hook="page-header-breadcrumbs">
                  {themedBreadcrumbs}
                </div>)
            }
          </div>
          {
            showBackButton && onBackClicked && animateComponent(!minimized, !breadcrumbsExists,
              <div className={classNames(s.backButton, {[s.minimized]: minimized, [s.darkTheme]: isDarkTheme(hasBackgroundImage, minimized)})} data-hook="page-header-backbutton">
                <Button onClick={onBackClicked} theme="icon-white">
                  <ArrowLeft size="16px"/>
                </Button>
              </div>)
          }
          <div className={s.titleContainer}>
            {
              animateComponent(!minimized, !breadcrumbsExists,
                <div className={classNames(s.title, {[s.minimized]: minimized})} data-hook="page-header-title">
                  <Text appearance={isDarkTheme(hasBackgroundImage, minimized) ? 'H1.1' : 'H1'}>{title}</Text>
                </div>)
            }
            {
              subtitle && animateComponent(!minimized, !breadcrumbsExists,
                <div className={classNames({[s.minimized]: minimized})} data-hook="page-header-subtitle">
                  <Text appearance={isDarkTheme(hasBackgroundImage, minimized) ? 'T1.2' : 'T1.1'}>{subtitle}</Text>
                </div>)
            }
          </div>
        </div>
        {
          actionsBar &&
            <div className={classNames(s.actionsBar, {[s.minimized]: minimized, [s.withBreadcrumbs]: breadcrumbsExists})} data-hook="page-header-actionbar">
              {React.cloneElement(actionsBar, {minimized, hasBackgroundImage})}
            </div>
        }
      </div>
    );
  }
}

PageHeader.displayName = 'PageHeader';

PageHeader.propTypes = {
  /** The minimize state from the header container */
  minimized: PropTypes.bool,
  /** If the page has background image */
  hasBackgroundImage: PropTypes.bool,
  /** Breadcrumbs object to display */
  breadcrumbs: PropTypes.node,
  /** Title to display */
  title: PropTypes.string.isRequired,
  /** Subtitle to display */
  subtitle: PropTypes.string,
  /** Callback when back button clicked */
  onBackClicked: PropTypes.func,
  /** Should display back button */
  showBackButton: PropTypes.bool,
  /** Components that includes actions */
  actionsBar: PropTypes.node
};

PageHeader.defaultProps = {
  minimized: false
};
