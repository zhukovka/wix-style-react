import { Value } from 'slate';
import htmlSerializer from './htmlSerializer';

describe('HTML serializer', () => {
  it('should correctly deserialize HTML string', () => {
    const text = `<p>Hello<strong>bold text</strong><em>italic<u>and underlined</u></em></p><ol><li>one</li><li>two</li></ol><p><a href="http://localhost">Link to localhost</a></p>`;
    const expected = {
      document: {
        data: {},
        nodes: [
          {
            data: {},
            nodes: [
              {
                leaves: [
                  {
                    marks: [],
                    object: 'leaf',
                    text: 'Hello'
                  }
                ],
                object: 'text'
              },
              {
                leaves: [
                  {
                    marks: [
                      {
                        data: {},
                        object: 'mark',
                        type: 'bold'
                      }
                    ],
                    object: 'leaf',
                    text: 'bold text'
                  }
                ],
                object: 'text'
              },
              {
                leaves: [
                  {
                    marks: [
                      {
                        data: {},
                        object: 'mark',
                        type: 'italic'
                      }
                    ],
                    object: 'leaf',
                    text: 'italic'
                  }
                ],
                object: 'text'
              },
              {
                leaves: [
                  {
                    marks: [
                      {
                        data: {},
                        object: 'mark',
                        type: 'underline'
                      },
                      {
                        data: {},
                        object: 'mark',
                        type: 'italic'
                      }
                    ],
                    object: 'leaf',
                    text: 'and underlined'
                  }
                ],
                object: 'text'
              }
            ],
            object: 'block',
            type: 'paragraph'
          },
          {
            data: {},
            nodes: [
              {
                data: {},
                nodes: [
                  {
                    leaves: [
                      {
                        marks: [],
                        object: 'leaf',
                        text: 'one'
                      }
                    ],
                    object: 'text'
                  }
                ],
                object: 'block',
                type: 'list-item'
              },
              {
                data: {},
                nodes: [
                  {
                    leaves: [
                      {
                        marks: [],
                        object: 'leaf',
                        text: 'two'
                      }
                    ],
                    object: 'text'
                  }
                ],
                object: 'block',
                type: 'list-item'
              }
            ],
            object: 'block',
            type: 'ordered-list'
          },
          {
            data: {},
            nodes: [
              {
                data: {
                  href: 'http://localhost'
                },
                nodes: [
                  {
                    leaves: [
                      {
                        marks: [],
                        object: 'leaf',
                        text: 'Link to localhost'
                      }
                    ],
                    object: 'text'
                  }
                ],
                object: 'inline',
                type: 'link'
              }
            ],
            object: 'block',
            type: 'paragraph'
          }
        ],
        object: 'document'
      },
      object: 'value'
    };

    const deserialized = htmlSerializer.deserialize(text);
    expect(Value.fromJSON(deserialized).toJSON()).toEqual(expected);
  });

  it('should correctly serialize slate object to HTML string', () => {
    const expected = `<ul><li>one</li><li>two</li></ul><p>Text here<strong>bold text</strong><em>italic</em><em><u>and underlined</u></em><a rel="noopener noreferrer" target="_blank" href="http://localhost">Link</a></p>`;
    const value = {
      document: {
        data: {},
        nodes: [
          {
            data: {},
            object: 'block',
            type: 'unordered-list',
            nodes: [
              {
                data: {},
                nodes: [
                  {
                    leaves: [
                      {
                        marks: [],
                        object: 'leaf',
                        text: 'one'
                      }
                    ],
                    object: 'text'
                  }
                ],
                object: 'block',
                type: 'list-item'
              },
              {
                data: {},
                nodes: [
                  {
                    leaves: [
                      {
                        marks: [],
                        object: 'leaf',
                        text: 'two'
                      }
                    ],
                    object: 'text'
                  }
                ],
                object: 'block',
                type: 'list-item'
              }
            ]
          },
          {
            data: {},
            object: 'block',
            type: 'paragraph',
            nodes: [
              {
                object: 'text',
                leaves: [
                  {
                    marks: [],
                    object: 'leaf',
                    text: 'Text here'
                  },
                  {
                    marks: [
                      {
                        data: {},
                        object: 'mark',
                        type: 'bold'
                      }
                    ],
                    object: 'leaf',
                    text: 'bold text'
                  },
                  {
                    marks: [
                      {
                        data: {},
                        object: 'mark',
                        type: 'italic'
                      }
                    ],
                    object: 'leaf',
                    text: 'italic'
                  },
                  {
                    marks: [
                      {
                        data: {},
                        object: 'mark',
                        type: 'underline'
                      },
                      {
                        data: {},
                        object: 'mark',
                        type: 'italic'
                      }
                    ],
                    object: 'leaf',
                    text: 'and underlined'
                  }
                ]
              },
              {
                data: {
                  href: 'http://localhost'
                },
                nodes: [
                  {
                    leaves: [
                      {
                        object: 'leaf',
                        text: 'Link',
                        marks: []
                      }
                    ],
                    object: 'text'
                  }
                ],
                object: 'inline',
                type: 'link'
              }
            ]
          }
        ],
        object: 'document'
      },
      object: 'value'
    };
    const serialized = Value.fromJSON(value);
    expect(htmlSerializer.serialize(serialized)).toEqual(expected);
  });
});
