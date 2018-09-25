import {Value} from 'slate';
import htmlSerializer from './htmlSerializer';

describe('HTML serializer', () => {
  it('should correctly deserialize HTML string', () => {
    const text = `<p>Hello<strong>bold text</strong><em>italic<u>and underlined</u></em></p><ol><li>one</li><li>two</li></ol><p><a href="http://localhost">Link to localhost</a></p>`;
    const expected = {
      object: 'value',
      document: {
        object: 'document',
        data: {},
        nodes: [
          {
            object: 'block',
            type: 'paragraph',
            data: {},
            nodes: [
              {
                object: 'text',
                leaves: [
                  {
                    object: 'leaf',
                    text: 'Hello',
                    marks: []
                  },
                  {
                    object: 'leaf',
                    text: 'bold text',
                    marks: [
                      {
                        object: 'mark',
                        type: 'bold',
                        data: {}
                      }
                    ]
                  },
                  {
                    object: 'leaf',
                    text: 'italic',
                    marks: [
                      {
                        object: 'mark',
                        type: 'italic',
                        data: {}
                      }
                    ]
                  },
                  {
                    object: 'leaf',
                    text: 'and underlined',
                    marks: [
                      {
                        object: 'mark',
                        type: 'underline',
                        data: {}
                      },
                      {
                        object: 'mark',
                        type: 'italic',
                        data: {}
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            object: 'block',
            type: 'ordered-list',
            data: {},
            nodes: [
              {
                object: 'block',
                type: 'list-item',
                data: {},
                nodes: [
                  {
                    object: 'text',
                    leaves: [
                      {
                        object: 'leaf',
                        text: 'one',
                        marks: []
                      }
                    ]
                  }
                ]
              },
              {
                object: 'block',
                type: 'list-item',
                data: {},
                nodes: [
                  {
                    object: 'text',
                    leaves: [
                      {
                        object: 'leaf',
                        text: 'two',
                        marks: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            object: 'block',
            type: 'paragraph',
            data: {},
            nodes: [
              {
                object: 'text',
                leaves: [
                  {
                    object: 'leaf',
                    text: '',
                    marks: []
                  }
                ]
              },
              {
                object: 'inline',
                type: 'link',
                data: {
                  href: 'http://localhost'
                },
                nodes: [
                  {
                    object: 'text',
                    leaves: [
                      {
                        object: 'leaf',
                        text: 'Link to localhost',
                        marks: []
                      }
                    ]
                  }
                ]
              },
              {
                object: 'text',
                leaves: [
                  {
                    object: 'leaf',
                    text: '',
                    marks: []
                  }
                ]
              }
            ]
          }
        ]
      }
    };

    const deserialized = htmlSerializer.deserialize(text);
    expect(Value.fromJSON(deserialized).toJSON()).toEqual(expected);
  });

  it('should correctly serialize slate object to HTML string', () => {
    const expected = `<ul><li>one</li><li>two</li></ul><p>Text here<strong>bold text</strong><em>italic</em><em><u>and underlined</u></em><a rel="noopener noreferrer" target="_blank" href="http://localhost">Link</a></p>`;
    const value = {
      object: 'value',
      document: {
        object: 'document',
        data: {},
        nodes: [
          {
            object: 'block',
            type: 'unordered-list',
            data: {},
            nodes: [
              {
                object: 'block',
                type: 'list-item',
                data: {},
                nodes: [
                  {
                    object: 'text',
                    leaves: [
                      {
                        object: 'leaf',
                        text: 'one',
                        marks: []
                      }
                    ]
                  }
                ]
              },
              {
                object: 'block',
                type: 'list-item',
                data: {},
                nodes: [
                  {
                    object: 'text',
                    leaves: [
                      {
                        object: 'leaf',
                        text: 'two',
                        marks: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            object: 'block',
            type: 'paragraph',
            data: {},
            nodes: [
              {
                object: 'text',
                leaves: [
                  {
                    object: 'leaf',
                    text: 'Text here',
                    marks: []
                  },
                  {
                    object: 'leaf',
                    text: 'bold text',
                    marks: [
                      {
                        object: 'mark',
                        type: 'bold',
                        data: {}
                      }
                    ]
                  },
                  {
                    object: 'leaf',
                    text: 'italic',
                    marks: [
                      {
                        object: 'mark',
                        type: 'italic',
                        data: {}
                      }
                    ]
                  },
                  {
                    object: 'leaf',
                    text: 'and underlined',
                    marks: [
                      {
                        object: 'mark',
                        type: 'underline',
                        data: {}
                      },
                      {
                        object: 'mark',
                        type: 'italic',
                        data: {}
                      }
                    ]
                  }
                ]
              },
              {
                object: 'inline',
                type: 'link',
                data: {
                  href: 'http://localhost'
                },
                nodes: [
                  {
                    object: 'text',
                    leaves: [
                      {
                        object: 'leaf',
                        text: 'Link',
                        marks: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    };
    const serialized = Value.fromJSON(value);
    expect(htmlSerializer.serialize(serialized)).toEqual(expected);
  });
});
