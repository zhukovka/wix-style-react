import React from 'react';

const TagsComponent = props => {
  const {tags, renderTag, theme} = props;
  const defaultRenderTag = tag => {
    const name = tag[props.tagDisplayProp];
    return (
      <span className={theme.tag} key={name}>
        {name}
        <a className={theme.tagRemoveButton} onClick={() => props.onRemove(tag)}/>
      </span>
    );
  };

  return (
    <div className={theme.tagsContainer}>{tags.map(tag => {
      return renderTag ? renderTag(tag) : defaultRenderTag(tag);
    })}</div>
  );
};

TagsComponent.propTypes = {
  tags: React.PropTypes.array.isRequired,
  onRemove: React.PropTypes.func.isRequired,
  renderTag: React.PropTypes.func,
  tagDisplayProp: React.PropTypes.string,
  theme: React.PropTypes.object.isRequired
};

TagsComponent.defaultProps = {
  tagDisplayProp: 'id'
};

export default TagsComponent;
