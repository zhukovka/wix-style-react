import {Document} from 'slate';
import htmlSerializer from './htmlSerializer';

describe('HTML serializer', () => {
  it('should correctly deserialize HTML string', () => {
    const text = `<p>Hello<strong>bold text</strong><em>italic<u>and underlined</u></em></p><ol><li>one</li><li>two</li></ol><p><a href="http://localhost">Link to localhost</a></p>`;
    const expected = {
      nodes: [
        {
          object: 'block',
          type: 'paragraph',
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  text: 'Hello'
                },
                {
                  text: 'bold text',
                  marks: [
                    {type: 'bold'}
                  ]
                },
                {
                  text: 'italic',
                  marks: [
                    {type: 'italic'}
                  ]
                },
                {
                  text: 'and underlined',
                  marks: [
                    {type: 'underline'},
                    {type: 'italic'}
                  ]
                }
              ]
            }
          ]
        },
        {
          object: 'block',
          type: 'ordered-list',
          nodes: [
            {
              object: 'block',
              type: 'list-item',
              nodes: [
                {
                  object: 'text',
                  text: 'one'
                }
              ]
            },
            {
              object: 'block',
              type: 'list-item',
              nodes: [
                {
                  object: 'text',
                  text: 'two'
                }
              ]
            }
          ]
        },
        {
          object: 'block',
          type: 'paragraph',
          nodes: [
            {object: 'text', text: ''},
            {
              object: 'inline',
              type: 'link',
              data: {
                href: 'http://localhost'
              },
              nodes: [
                {
                  object: 'text',
                  text: 'Link to localhost'
                }
              ]
            },
            {object: 'text', text: ''}
          ]
        }
      ]
    };

    const deserialized = htmlSerializer.deserialize(text);
    // console.log('deserialized', deserialized);
    expect(Document.fromJSON(deserialized).toJSON()).toEqual(expected);
  });

  it('should correctly serialize slate object to HTML string', () => {
    const expected = `<ul><li>one</li><li>two</li></ul><p>Text here<strong>bold text</strong><em>italic</em><em><u>and underlined</u></em><a rel="noopener noreferrer" target="_blank" href="http://localhost">Link</a></p>`;
    const state = {
      nodes: [
        {
          object: 'block',
          type: 'unordered-list',
          nodes: [
            {
              object: 'block',
              type: 'list-item',
              nodes: [
                {
                  object: 'text',
                  text: 'one'
                }
              ]
            },
            {
              object: 'block',
              type: 'list-item',
              nodes: [
                {
                  object: 'text',
                  text: 'two'
                }
              ]
            }
          ]
        },
        {
          object: 'block',
          type: 'paragraph',
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  text: 'Text here'
                },
                {
                  text: 'bold text',
                  marks: [
                    {type: 'bold'}
                  ]
                },
                {
                  text: 'italic',
                  marks: [
                    {type: 'italic'}
                  ]
                },
                {
                  text: 'and underlined',
                  marks: [
                    {type: 'underline'},
                    {type: 'italic'}
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
                  text: 'Link'
                }
              ]
            }
          ]
        }
      ]
    };
    const serialized = Document.fromJSON(state);
    expect(htmlSerializer.serialize(serialized)).toEqual(expected);
  });
});
