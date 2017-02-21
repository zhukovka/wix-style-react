import React from 'react';
import {Html} from 'slate';

const rules = [
  {
    deserialize(el, next) {
      if (el.tagName === 'p') {
        return {
          kind: 'block',
          type: 'paragraph',
          nodes: next(el.children),
        };
      }
    },
    serialize(object, children) {
      if (object.kind === 'block' && object.type === 'paragraph') {
        return <p>{children}</p>;
      }
    },
  },
];

export default new Html({rules});
