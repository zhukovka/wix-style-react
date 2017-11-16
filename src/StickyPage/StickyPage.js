import s from './StickyPage.scss';
import React from 'react';
import WixComponent from '../BaseComponents/WixComponent';
import Header from './components/Header';
import Content from './components/Content';
import PropTypes from 'prop-types';

const SCROLL_TOP_THRESHOLD = 24;

/**
  * A page container which contains a sticky header and scrollable content
  */
export default class StickyPage extends WixComponent {

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
      headerHeight: this.stickyHeaderRef.offsetHeight
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

    return (
      <div className={s.stickyPage}>
        <div className={s.staticBackground}/>
        <div className={s.stickyHeader} ref={r => this.stickyHeaderRef = r} style={{paddingBottom: `${SCROLL_TOP_THRESHOLD}px`}}>
          {React.Children.map(this._safeGetChildren(headerElement), child => React.cloneElement(child, {minimized}))}
        </div>
        <div className={s.scrollableContent} ref={r => this.scrollableContentRef = r}>
          <div className={s.contentBackground} style={{height: `${headerHeight}px`}}/>
          {this._safeGetChildren(contentElement)}
        </div>
      </div>
    );
  }
}

StickyPage.displayName = 'StickyPage';
StickyPage.Header = Header;
StickyPage.Content = Content;

StickyPage.propTypes = {
  children: PropTypes.arrayOf((propValue, key) => {
    if (!propValue || propValue.length !== 2) {
      return new Error(`StickyPage: Invalid Prop children, first child must be StickyPage.Header, and second child must be StickyPage.Content`);
    }

    if (key === 0 && propValue[key].type !== StickyPage.Header) {
      return new Error(`StickyPage: Invalid Prop children, first child must be StickyPage.Header`);
    }

    if (key === 1 && propValue[key].type !== StickyPage.Content) {
      return new Error(`StickyPage: Invalid Prop children, second child must be StickyPage.Content`);
    }
  }).isRequired
};
