import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from '../Carousel.scss';
import Loader from '../../Loader';

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldShowPreloader: props.autopreloader,
    };

    this.hidePreloader = this.hidePreloader.bind(this);
    this.showPreloader = this.showPreloader.bind(this);
  }

  _isImage() {
    return Boolean(this.props.imageUrl);
  }

  showPreloader() {
    this.setState({ shouldShowPreloader: true });
  }

  hidePreloader() {
    this.setState({ shouldShowPreloader: false });
  }

  render() {
    const { imageUrl, getItem, width } = this.props;
    const { hidePreloader, showPreloader } = this;

    return (
      <div className={styles.itemWrapper} style={{ width: `${width}px` }}>
        {this._isImage() ? (
          <img
            className={styles.image}
            data-hook="carousel-img"
            src={imageUrl}
            onLoad={this.hidePreloader}
          />
        ) : (
          getItem({ hidePreloader, showPreloader })
        )}
        {this.state.shouldShowPreloader ? (
          <div className={styles.loader}>
            <Loader dataHook="loader" size="small" />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Item;
