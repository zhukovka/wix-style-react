import PropTypes from 'prop-types';

const Content = props => props.children;
Content.displayName = 'StickyPage.Content';
Content.propTypes = {children: PropTypes.element.isRequired};
export default Content;
