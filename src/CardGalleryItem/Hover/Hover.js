import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import styles from './Hover.scss';

class Hover extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    hoveredContent: PropTypes.node,
    classNames: PropTypes.object,
    timeout: PropTypes.number,
    dataHook: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
    this._showHoveredContent = this._showHoveredContent.bind(this);
    this._hideHoveredContent = this._hideHoveredContent.bind(this);
  }

  _showHoveredContent() {
    this.setState({ isHovered: true });
  }

  _hideHoveredContent() {
    this.setState({ isHovered: false });
  }

  render() {
    const {
      children,
      hoveredContent,
      classNames,
      timeout,
      dataHook,
    } = this.props;

    return (
      <div
        className={styles.root}
        onMouseEnter={this._showHoveredContent}
        onMouseLeave={this._hideHoveredContent}
        data-hook={dataHook}
      >
        {children}
        <CSSTransition
          in={this.state.isHovered}
          timeout={timeout}
          classNames={classNames}
        >
          {state => (
            <div className={styles.hoveredContentWrapper}>
              {state === 'exited' ? <span /> : hoveredContent}
            </div>
          )}
        </CSSTransition>
      </div>
    );
  }
}

export default Hover;
