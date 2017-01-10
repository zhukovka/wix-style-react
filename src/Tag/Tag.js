import React, {PropTypes} from 'react';
import styles from './Tag.scss';
import classNames from 'classnames';

const Tag = ({id, label, thumb, removable, onRemove, size}) => {
  const className = classNames({
    [styles.tag]: true,
    [styles.large]: size === 'large'
  });

  return (
    <span className={className} id={id}>
      {thumb && <span className={styles.thumb}>{thumb}</span>}
      <span>{label}</span>
      {removable && <a className={styles.tagRemoveButton} onClick={() => onRemove(id)}/>}
    </span>
  );
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  thumb: PropTypes.element,
  onRemove: PropTypes.func,
  removable: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'large']),
};

Tag.defaultProps = {
  onRemove: () => {},
  size: 'small',
  removable: true,
};

export default Tag;
