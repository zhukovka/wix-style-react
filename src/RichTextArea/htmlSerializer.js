import React from 'react';
import {Html} from 'slate';

const BLOCK_TAGS = {
  p: 'paragraph',
  ul: 'unordered-list',
  li: 'list-item',
  ol: 'ordered-list',
};

const MARK_TAGS = {
  em: 'italic',
  strong: 'bold',
  u: 'underline',
};

const rules = [
  {
    deserialize(el, next) {
      const type = BLOCK_TAGS[el.tagName];
      if (!type) {
        return;
      }

      return {
        kind: 'block',
        type,
        nodes: next(el.children)
      };
    },
    serialize(object, children) {
      if (object.kind !== 'block') {
        return;
      }

      switch (object.type) {
        case 'paragraph': return <p>{children}</p>;
        case 'list-item': return <li>{children}</li>;
        case 'ordered-list': return <ol>{children}</ol>;
        case 'unordered-list': return <ul>{children}</ul>;
        default: return {children};
      }
    }
  },
  {
    deserialize(el, next) {
      const type = MARK_TAGS[el.tagName];
      if (!type) {
        return;
      }

      return {
        kind: 'mark',
        type,
        nodes: next(el.children)
      };
    },
    serialize(object, children) {
      if (object.kind !== 'mark') {
        return;
      }

      switch (object.type) {
        case 'bold': return <strong>{children}</strong>;
        case 'italic': return <em>{children}</em>;
        case 'underline': return <u>{children}</u>;
        default: return {children};
      }
    }
  }
];

export default new Html({rules});
