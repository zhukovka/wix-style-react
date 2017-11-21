import PropTypes from 'prop-types';

const Header = props => props.children;
Header.displayName = 'Page.Header';
Header.propTypes = {children: PropTypes.element.isRequired};
export default Header;
