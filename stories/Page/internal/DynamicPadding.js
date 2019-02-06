import React from 'react';

const DynamicPadding = ({ contentHeight }) => {
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
      <div
        name="Page"
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          backgroundColor: 'grey',
          height: '100%',
        }}
      >
        <div
          name="scrollableContainer"
          style={{
            overflowY: 'auto',
            background: 'grey',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            paddingTop: '30px',
          }}
        >
          <div
            name="contentWrapper"
            style={{
              background: 'blue',
              minHeight: '200px',
            }}
          >
            <div
              name="content"
              style={{
                background: 'white',
                height: `${contentHeight}px`,
              }}
            >
              {`Content ${contentHeight}px`}
            </div>
            <div
              name="bottomPadding"
              style={{ height: '20px', background: 'yellow' }}
            >
              Padding 20px
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Example = () => (
  <div style={{ margin: '0 20px' }}>
    In all the following examples, the White content can be scrolled up exactly
    until it reaches the pageContainer, or more if it can. But still have a
    fixed bottom padding.
    <h2>Shot Content</h2>
    <DynamicPadding contentHeight={100} />
    <h2>Medium Content</h2>
    <DynamicPadding contentHeight={150} />
    <h2>Cut-off Content</h2>
    <DynamicPadding contentHeight={165} />
    <h2>Long Content</h2>
    <DynamicPadding contentHeight={250} />
  </div>
);
export default Example;
