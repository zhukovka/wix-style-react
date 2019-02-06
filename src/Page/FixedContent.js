import PropTypes from "prop-types";

const FixedContent = props => props.children;
FixedContent.displayName = 'Page.FixedContent';
FixedContent.propTypes = {
  children: PropTypes.element.isRequired,
  /** A css class to be applied to the component's root element */
  className: PropTypes.string,
  /** A data-hook to be applied to the component's root element */
  dataHook: PropTypes.string,
};

export default FixedContent;
