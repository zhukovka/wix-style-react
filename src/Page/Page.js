import s from './Page.scss';
import React from 'react';
import WixComponent from '../BaseComponents/WixComponent';
import PageHeader from './PageHeader';
import Content from './components/Content';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SCROLL_TOP_THRESHOLD = 24;

/**
  * A page container which contains a header and scrollable content
  */
export default class Page extends WixComponent {

  constructor(props) {
    super(props);

    this._handleScroll = this._handleScroll.bind(this);

    this.state = {
      headerHeight: 0,
      minimized: false
    };
  }

  componentDidMount() {
    super.componentDidMount();

    this._getScrollContainer().addEventListener('scroll', this._handleScroll);
    this.setState({
      headerHeight: this.pageHeaderRef.offsetHeight
    });
  }

  componentWillUnmount() {
    super.componentWillUnmount();

    this._getScrollContainer().removeEventListener('scroll', this._handleScroll);
  }

  _getScrollContainer() {
    return this.scrollableContentRef;
  }

  _shouldBeMinimized(containerScrollTop) {
    return containerScrollTop > SCROLL_TOP_THRESHOLD;
  }

  _handleScroll() {
    const scrollContainer = this._getScrollContainer();
    const containerScrollTop = scrollContainer.scrollTop;
    const nextMinimized = this._shouldBeMinimized(containerScrollTop);
    const {minimized} = this.state;

    if (minimized !== nextMinimized) {
      this.setState({
        minimized: nextMinimized
      });
    }
  }

  _safeGetChildren(element) {
    if (!element || !element.props || !element.props.children) {
      return [];
    }

    return element.props.children;
  }

  render() {
    const {headerHeight, minimized} = this.state;
    const [headerElement, contentElement] = React.Children.toArray(this.props.children);
    const pageHeaderClass = classNames(s.pageHeader, {[s.minimized]: minimized});
    const pageHeaderStyle = {};
    if (!minimized) {
      pageHeaderStyle.paddingBottom = `${SCROLL_TOP_THRESHOLD}px`;
    }

    return (
      <div className={s.page}>
        <div className={s.staticBackground}/>
        <div className={pageHeaderClass} ref={r => this.pageHeaderRef = r} style={pageHeaderStyle}>
          {headerElement && React.cloneElement(headerElement, {minimized})}
        </div>
        <div className={s.scrollableContent} ref={r => this.scrollableContentRef = r}>
          <div className={s.contentBackground} style={{height: `${headerHeight}px`}}/>
          {this._safeGetChildren(contentElement)}
        </div>
      </div>
    );
  }
}

Page.displayName = 'Page';
Page.Header = PageHeader;
Page.Content = Content;

Page.propTypes = {
  children: PropTypes.arrayOf((propValue, key) => {
    if (!propValue || propValue.length !== 2) {
      return new Error(`Page: Invalid Prop children, first child must be Page.Header, and second child must be Page.Content`);
    }

    if (key === 0 && propValue[key].type !== Page.Header) {
      return new Error(`Page: Invalid Prop children, first child must be Page.Header`);
    }

    if (key === 1 && propValue[key].type !== Page.Content) {
      return new Error(`Page: Invalid Prop children, second child must be Page.Content`);
    }
  }).isRequired
};
