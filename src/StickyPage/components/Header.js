import PropTypes from 'prop-types';

const Header = props => props.children;
Header.displayName = 'StickyPage.Header';
Header.propTypes = {children: PropTypes.element.isRequired};
export default Header;
