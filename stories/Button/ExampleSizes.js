import React from 'react';
import Button from 'wix-style-react/Button';

const styles = {
  header: {
    display: 'flex',
    padding: '0 5x'
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '50px'
  }, text: {
    padding: '0 5px'
  }
};

export default () =>
  <div style={styles.header}>
    <div style={styles.text}>Small
      <div style={styles.button}>
        <Button height="small">Click Me!</Button>
      </div>
    </div>
    <div style={styles.text}>Medium
      <div style={styles.button}>
        <Button height="medium">Click Me!</Button>
      </div>
    </div>
    <div style={styles.text}>Large
      <div style={styles.button}>
        <Button height="large">Click Me!</Button>
      </div>
    </div>
  </div>;
