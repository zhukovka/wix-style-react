import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Proportion.scss';
import { PREDEFINED_RATIOS } from './ratios';

class Proportion extends React.PureComponent {
  static PREDEFINED_RATIOS = PREDEFINED_RATIOS;

  static displayName = 'Proportion';

  static propTypes = {
    children: PropTypes.node.isRequired,
    dataHook: PropTypes.string,
    className: PropTypes.string,

    /** predefined Proportion.square (1), Proportion.portrait (3/4), Proportion.cinema (16/9), Proportion.landscape (4/3), or a custom number (width / height) */
    aspectRatio: PropTypes.number,
  };

  static defaultProps = {
    aspectRatio: 1,
  };

  render() {
    const { dataHook, className } = this.props;
    const wrapperClass = classnames(styles.root, className);
    const aspectRatioHolder = this._getAspectRatioHolder();
    const content = this._getContent();

    return (
      <div className={wrapperClass} data-hook={dataHook}>
        {aspectRatioHolder}
        {content}
      </div>
    );
  }

  _getContent() {
    const { children } = this.props;
    return <div className={styles.contentWrapper}>{children}</div>;
  }

  /**
   * This is based on Noam Rosenthal's (noamr@wix.com) solution
   * which can be found here: https://codeburst.io/keeping-aspect-ratio-with-html-and-no-padding-tricks-40705656808b
   *
   * The solution uses the fact that svg's can maintain aspect ratio's natively.
   * In addition we use an img element for this solution to work correctly in IE
   * */
  _getAspectRatioHolder() {
    const { width, height } = this._getRatio();
    const svg = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" />`;
    return (
      <img
        className={styles.ratioHolder}
        src={`data:image/svg+xml,${encodeURIComponent(svg)}`}
      />
    );
  }

  _getRatio() {
    const { aspectRatio } = this.props;

    return {
      width: aspectRatio ? Math.round(aspectRatio * 100) : 100,
      height: 100,
    };
  }
}

export default Proportion;
