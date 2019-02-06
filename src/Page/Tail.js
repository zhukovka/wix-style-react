import React from 'react';
import PropTypes from 'prop-types';

const Tail = ({ children, minimized }) =>
  React.cloneElement(children, { minimized });

Tail.displayName = 'Page.Tail';

Tail.propTypes = {
  children: PropTypes.element.isRequired,
  minimized: PropTypes.bool,
  /** A css class to be applied to the component's root element */
  className: PropTypes.string,
  /** A data-hook to be applied to the component's root element */
  dataHook: PropTypes.string,
};

export default Tail;
