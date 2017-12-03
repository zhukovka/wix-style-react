import PropTypes from 'prop-types';

const Tail = ({children}) => children;

Tail.displayName = 'Page.Tail';

Tail.propTypes = {
  children: PropTypes.element.isRequired
};

export default Tail;
