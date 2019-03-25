import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ResizeSensor } from 'css-element-queries';
import s from './Page.scss';
import WixComponent from '../BaseComponents/WixComponent';
import { PageContext } from './PageContext';
import PageHeader from '../PageHeader';
import Content from './Content';
import Tail from './Tail';
import { PageSticky } from './PageSticky';

import {
  PAGE_SIDE_PADDING_PX,
  PAGE_BOTTOM_PADDING_PX,
  BACKGROUND_COVER_CONTENT_PX,
  MINIMIZED_HEADER_CONTAINER_HEIGHT_PX,
} from './constants';
import {
  mainContainerMinWidthPx as GRID_MIN_WIDTH,
  mainContainerMaxWidthPx as GRID_MAX_WIDTH,
} from '../Grid/constants';

/*
 * Page structure without mini-header-overlay:
 *
 * + PageWrapper (Horizontal Scroll) --
 * | +- Page --------------------------
 * | | +--  ScrollableContainer (Vertical Scroll)
 * | | | +-- HeaderContainer ----------
 * | | | | +-- Page.Header ------------
 * | | | | |
 * | | | | +---------------------------
 * | | | +-----------------------------
 * | | | +-- Page.Tail ----------------
 * | | | |
 * | | | +-----------------------------
 * | | | +-- ContentWrapper------------
 * | | | | +-- Page.FixedContent (Deprecated)
 * | | | | |
 * | | | | +---------------------------
 * | | | | +-- Page.Content -----------
 * | | | | |
 * | | | | +---------------------------
 * | | | +-----------------------------
 * | | +-------------------------------
 * | +--------------------------------- (Page - End)
 * +----------------------------------- (PageWrapper - End)
 *
 * -  ScrollableContainer has a data-classnamed 'scrollable-content', and should NOT be renamed, since
 * Tooltip is hard-coded-ly using a selector like this: [data-class="page-scrollable-content"]
 */

/**
 * A page container which contains a header and scrollable content.
 *
 * NOTICE : Temp workaround for Bug that happens if all these are true:
 *  - You are using the upgraded page `<Page upgrade/>`
 *  - You are using `<Page.Sticky/>` OR `<Page.FixedContent/>`
 *  - You are using a `<Modal/>`
 * Workaround: You need to set the Modal's zIndex to something greater than 11000.
 */
class Page extends WixComponent {
  static defaultProps = {
    minWidth: GRID_MIN_WIDTH,
    maxWidth: GRID_MAX_WIDTH,
  };

  constructor(props) {
    super(props);

    this._handleScroll = this._handleScroll.bind(this);
    this._handleWidthResize = this._handleWidthResize.bind(this);
    this._handleWindowResize = this._handleWindowResize.bind(this);
    this._calculateComponentsHeights = this._calculateComponentsHeights.bind(
      this,
    );

    this.state = {
      headerWrapperHeight: 0,
      tailHeight: 0,
      scrollBarWidth: 0,
      displayMiniHeader: false,
    };
  }

  componentDidMount() {
    super.componentDidMount();
    this.contentResizeListener = new ResizeSensor(
      this._getScrollContainer().childNodes[0],
      this._handleWidthResize,
    );

    this._calculateComponentsHeights();
    this._handleWidthResize();
    window.addEventListener('resize', this._handleWindowResize);

    // TODO: Hack to fix cases where initial measurment of headerWrapperHeight is not correct (need to investigate)
    // Happens in PageTestStories -> PageWithScroll -> 5. Scroll - Trigger Mini Header
    // Maybe there is a transition
    const ARBITRARY_SHORT_DURATION_MS = 100;
    setTimeout(this._calculateComponentsHeights, ARBITRARY_SHORT_DURATION_MS);
  }

  componentDidUpdate(prevProps) {
    super.componentDidUpdate(prevProps);
    this._calculateComponentsHeights();
  }

  componentWillUnmount() {
    super.componentWillUnmount();
    this.contentResizeListener.detach(this._handleWidthResize);
    window.removeEventListener('resize', this._handleWindowResize);
  }

  _getNamedChildren() {
    return getChildrenObject(this.props.children);
  }

  _calculateComponentsHeights() {
    const {
      headerWrapperHeight,
      tailHeight,
      pageHeight,
      displayMiniHeader,
    } = this.state;

    const newHeaderWrapperHeight =
      this.headerContainerRef && !displayMiniHeader
        ? this.headerContainerRef.getBoundingClientRect().height
        : headerWrapperHeight;

    const newTailHeight = this.pageHeaderTailRef
      ? this.pageHeaderTailRef.offsetHeight
      : 0;
    const newPageHeight = this.pageRef ? this.pageRef.offsetHeight : 0;

    if (
      headerWrapperHeight !== newHeaderWrapperHeight ||
      tailHeight !== newTailHeight ||
      pageHeight !== newPageHeight
    ) {
      this.setState({
        headerWrapperHeight: newHeaderWrapperHeight,
        tailHeight: newTailHeight,
        pageHeight: newPageHeight,
      });
    }
  }

  _setScrollContainer(scrollableContainerRef) {
    this.scrollableContentRef = scrollableContainerRef;

    this.props.scrollableContentRef &&
      this.props.scrollableContentRef(scrollableContainerRef);
  }

  _getScrollContainer() {
    return this.scrollableContentRef;
  }

  _getMinimizationDiff() {
    const { headerWrapperHeight } = this.state;
    return headerWrapperHeight
      ? headerWrapperHeight - MINIMIZED_HEADER_CONTAINER_HEIGHT_PX
      : null;
  }

  _handleScroll() {
    const containerScrollTop = this._getScrollContainer().scrollTop;

    const { displayMiniHeader } = this.state;

    const minimizationDiff = this._getMinimizationDiff();
    const nextDisplayMiniHeader =
      minimizationDiff && containerScrollTop >= this._getMinimizationDiff();

    if (displayMiniHeader !== nextDisplayMiniHeader) {
      this.setState({
        displayMiniHeader: nextDisplayMiniHeader,
      });
    }
  }

  _handleWidthResize() {
    // Fixes width issues when scroll bar is present in windows
    const scrollContainer = this._getScrollContainer();
    const scrollBarWidth =
      scrollContainer &&
      scrollContainer.offsetWidth - scrollContainer.clientWidth;

    if (this.state.scrollBarWidth !== scrollBarWidth) {
      this.setState({ scrollBarWidth });
    }
  }

  _handleWindowResize() {
    // TODO: Optimize : https://developer.mozilla.org/en-US/docs/Web/Events/resize

    // Taken from here: https://github.com/kunokdev/react-window-size-listener/blob/d64c077fba4d4e0ce060464078c5fc19620528e6/src/index.js#L66
    const windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    if (this.state.windowHeight !== windowHeight) {
      // We are not using windowHeight directly, since we need to measure the `<Page/>`'s height,
      // But we hold it in the state to avoid rendering when only window.width changes
      this.setState({ windowHeight });
    }
  }

  _safeGetChildren(element) {
    if (!element || !element.props || !element.props.children) {
      return [];
    }

    return element.props.children;
  }

  _getPageDimensionsStyle() {
    const { maxWidth, sidePadding } = this.props;
    if (!maxWidth && !sidePadding && sidePadding !== 0) {
      return null;
    }

    const styles = {};
    if (maxWidth) {
      styles.maxWidth = `${maxWidth}px`;
    }

    if (sidePadding || sidePadding === 0) {
      styles.paddingLeft = `${sidePadding}px`;
      styles.paddingRight = `${sidePadding}px`;
    }

    return styles;
  }

  _hasBackgroundImage() {
    return !!this.props.backgroundImageUrl;
  }

  _hasGradientClassName() {
    return !!this.props.gradientClassName && !this.props.backgroundImageUrl;
  }

  _getContentHorizontalLayoutProps() {
    const { children } = this.props;
    const childrenObject = getChildrenObject(children);
    const { PageContent } = childrenObject;
    const contentFullScreen = PageContent && PageContent.props.fullScreen;
    const pageDimensionsStyle = this._getPageDimensionsStyle();

    return {
      className: classNames(s.contentHorizontalLayout, {
        [s.contentFullWidth]: contentFullScreen,
      }),
      style: contentFullScreen ? null : pageDimensionsStyle,
    };
  }

  _renderHeader({ minimized }) {
    const { children } = this.props;
    const childrenObject = getChildrenObject(children);
    const { PageHeader: PageHeaderChild } = childrenObject;
    const pageDimensionsStyle = this._getPageDimensionsStyle();

    return (
      PageHeaderChild && (
        <div className={s.pageHeader} style={pageDimensionsStyle}>
          {React.cloneElement(PageHeaderChild, {
            dataHook: minimized ? undefined : PageHeaderChild.props.dataHook, // Hack? - https://github.com/wix/wix-style-react/issues/3088
            minimized,
            hasBackgroundImage: this._hasBackgroundImage(),
            upgrade: true,
          })}
        </div>
      )
    );
  }

  /**
   * +-- HeaderContainer ------
   * | +-- Page.Header --------
   * | |
   * | |
   * | +-----------------------
   * +-------------------------
   * +-- Placeholder ----------
   * | Keeps total height when header is minimized
   * +-------------------------
   */
  _renderHeaderElements() {
    const {
      scrollBarWidth,
      displayMiniHeader,
      headerWrapperHeight,
    } = this.state;

    const minimizedProps = {
      style: {
        width: scrollBarWidth ? `calc(100% - ${scrollBarWidth}px` : undefined,
        // ...invisibleStyle,
      },
      onWheel: event => {
        this._getScrollContainer().scrollTop =
          this._getScrollContainer().scrollTop + event.deltaY;
      },
    };

    return [
      <div
        className={classNames(s.pageHeaderContainer, {
          [s.divider]: !this._hasTail(),
        })}
        data-hook="page-header-container"
        ref={ref => {
          this.headerContainerRef = ref;
        }}
        {...(displayMiniHeader ? minimizedProps : {})}
      >
        {this._renderHeader({ minimized: displayMiniHeader })}
      </div>,
      <div // placeholder when header is minimized
        style={{
          height: `${
            displayMiniHeader
              ? headerWrapperHeight - MINIMIZED_HEADER_CONTAINER_HEIGHT_PX
              : 0
          }px`,
        }}
      />,
    ];
  }

  _renderScrollableContainer() {
    const { displayMiniHeader } = this.state;

    return (
      <div
        className={classNames(s.scrollableContainer, {
          [s.hasTail]: this._hasTail(),
          [s.minimized]: displayMiniHeader,
        })}
        data-hook="page-scrollable-content"
        data-class="page-scrollable-content"
        ref={r => this._setScrollContainer(r)}
        onScroll={this._handleScroll}
      >
        {this._renderScrollableBackground()}
        {this._renderHeaderElements()}
        {this._renderTail()}
        {this._renderContentWrapper()}
      </div>
    );
  }

  _hasTail() {
    return !!this._getNamedChildren().PageTail;
  }

  _renderScrollableBackground() {
    const { headerWrapperHeight } = this.state;

    const backgroundHeight = `${headerWrapperHeight +
      (this._hasTail() ? 0 : BACKGROUND_COVER_CONTENT_PX)}px`;

    if (this._hasBackgroundImage()) {
      return (
        <div
          className={s.imageBackgroundContainer}
          style={{ height: backgroundHeight }}
          data-hook="page-background-image"
        >
          <div
            className={s.imageBackground}
            style={{ backgroundImage: `url(${this.props.backgroundImageUrl})` }}
          />
        </div>
      );
    }

    if (this._hasGradientClassName()) {
      return (
        <div
          data-hook="page-gradient-class-name"
          className={`${s.gradientBackground} ${this.props.gradientClassName}`}
          style={{ height: backgroundHeight }}
        />
      );
    }
  }

  _renderTail() {
    const { PageTail } = this._getNamedChildren();
    const pageDimensionsStyle = this._getPageDimensionsStyle();
    return (
      PageTail && (
        <div
          data-hook="page-tail"
          className={classNames(s.tailContainer, s.divider)}
          ref={r => (this.pageHeaderTailRef = r)}
          style={{
            top: `${MINIMIZED_HEADER_CONTAINER_HEIGHT_PX}px`,
          }}
        >
          <div className={s.tail} style={pageDimensionsStyle}>
            {PageTail}
          </div>
        </div>
      )
    );
  }

  _renderContentWrapper() {
    const { children } = this.props;
    const childrenObject = getChildrenObject(children);
    const { PageContent, PageFixedContent } = childrenObject;

    const { headerWrapperHeight } = this.state;

    const { pageHeight } = this.state;

    const contentHorizontalLayoutProps = this._getContentHorizontalLayoutProps();
    const stretchToHeight =
      pageHeight - headerWrapperHeight - PAGE_BOTTOM_PADDING_PX;

    return (
      <PageContext.Provider
        value={{
          stickyStyle: {
            top: `${MINIMIZED_HEADER_CONTAINER_HEIGHT_PX +
              this.state.tailHeight}px`,
          },
        }}
      >
        <div
          className={classNames(contentHorizontalLayoutProps.className, [
            s.contentWrapper,
          ])}
          style={{
            ...contentHorizontalLayoutProps.style,
          }}
        >
          <div
            style={{
              minHeight: `${stretchToHeight}px`,
            }}
            className={s.contentFloating}
          >
            {PageFixedContent && (
              <PageSticky data-hook="page-fixed-content">
                {React.cloneElement(PageFixedContent)}
              </PageSticky>
            )}
            {this._safeGetChildren(PageContent)}
          </div>
        </div>
      </PageContext.Provider>
    );
  }

  render() {
    const { className, minWidth, zIndex } = this.props;

    return (
      <div
        data-hook="wsr-page-wrapper"
        className={classNames(s.pageWrapper, className)}
        style={{ zIndex }}
      >
        <div
          data-hook="page"
          className={s.page}
          style={{
            minWidth: minWidth + 2 * PAGE_SIDE_PADDING_PX,
          }}
          ref={ref => (this.pageRef = ref)}
        >
          {this._renderScrollableContainer()}
        </div>
      </div>
    );
  }
}

const FixedContent = props => props.children;
FixedContent.displayName = 'Page.FixedContent';
FixedContent.propTypes = {
  children: PropTypes.element.isRequired,
};

Page.displayName = 'Page';
Page.Header = PageHeader;
Page.Content = Content;
Page.FixedContent = FixedContent; // TODO: deprecate, use Page.Sticky instead
Page.Tail = Tail;
Page.Sticky = PageSticky;

Page.propTypes = {
  /** Background image url of the header beackground */
  backgroundImageUrl: PropTypes.string,
  /** Sets the max width of the content (Both in header and body) NOT including the page padding */
  maxWidth: PropTypes.number,
  /** Sets the min width of the content (Both in header and body) NOT including the page padding */
  minWidth: PropTypes.number,
  /** Sets padding of the sides of the page */
  sidePadding: PropTypes.number,
  /** A css class to be applied to the component's root element */
  className: PropTypes.string,
  /** Header background color class name, allows to add a gradient to the header */
  gradientClassName: PropTypes.string,
  /** Is called with the Page's scrollable content ref **/
  scrollableContentRef: PropTypes.func,

  /** Accepts these components as children: `Page.Header`, `Page.Tail`, `Page.Content`, `Page.FixedContent`. Order is insignificant. */
  children: PropTypes.arrayOf((children, key) => {
    const childrenObj = getChildrenObject(children);

    if (!childrenObj.PageHeader) {
      return new Error(`Page: Invalid Prop children, must contain Page.Header`);
    }

    if (!childrenObj.PageContent) {
      return new Error(
        `Page: Invalid Prop children, must contain Page.Content`,
      );
    }

    if (
      children[key].type.displayName !== Page.Header.displayName &&
      children[key].type.displayName !== Page.Content.displayName &&
      children[key].type.displayName !== Page.FixedContent.displayName &&
      children[key].type.displayName !== Page.Tail.displayName
    ) {
      return new Error(
        `Page: Invalid Prop children, unknown child ${children[key].type}`,
      );
    }
  }).isRequired,

  /** z-index of the Page */
  zIndex: PropTypes.number,
  /** When true the page will use height: 100% and not require a parent of `display: flex;flex-flow: column;`. Also Page.Content's may grow using `min-height: inherit`. Supports Page.Sticky. New header minimization approach.*/
  upgrade: PropTypes.bool, // This Upgrade prop is only for documentation, the actual use is in index.js
};

function getChildrenObject(children) {
  return React.Children.toArray(children).reduce((acc, child) => {
    switch (child.type.displayName) {
      case 'Page.Header': {
        acc.PageHeader = child;
        break;
      }
      case 'Page.Content': {
        acc.PageContent = child;
        break;
      }
      case 'Page.FixedContent': {
        acc.PageFixedContent = child;
        break;
      }
      case 'Page.Tail': {
        acc.PageTail = child;
        break;
      }
      default: {
        break;
      }
    }
    return acc;
  }, {});
}

export default Page;
