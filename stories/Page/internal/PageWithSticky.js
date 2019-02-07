import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

class PageWithSticky extends React.Component {
  render() {
    return (
      <div
        name="pageContainer"
        style={{
          background: 'black',
          height: '200px',
          border: '2px solid red',
          display: 'flex',
          flexFlow: 'column',
        }}
      >
        <StickyContainer
          name="Page"
          style={{
            position: 'relative',
            backgroundColor: 'grey',
            height: '100%',
            overflowY: 'auto',
          }}
        >
          <Sticky relative>
            {style => (
              <div style={{ background: 'blue', ...style }}>Header</div>
            )}
          </Sticky>
          <Sticky relative>
            {style => (
              <div style={{ background: 'orange', ...style }}>
                Fixed Content
              </div>
            )}
          </Sticky>
          <div
            name="content"
            style={{
              background: 'white',
              height: `${this.props.contentHeight}px`,
            }}
          >
            {`Content ${this.props.contentHeight}px`}
          </div>
        </StickyContainer>
      </div>
    );
  }
}

const Example = () => (
  <div style={{ margin: '0 20px' }}>
    <h2>Long Content</h2>
    <PageWithSticky contentHeight={250} />
    <h2>Shot Content</h2>
    <PageWithSticky contentHeight={100} />
    <h2>Medium Content</h2>
    <PageWithSticky contentHeight={150} />
    <h2>Cut-off Content</h2>
    <PageWithSticky contentHeight={165} />
  </div>
);
export default Example;
