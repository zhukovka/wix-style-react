import React from 'react';
import Loader from 'wix-style-react/Loader';

const styles = {
  header: {
    display: 'flex',
    padding: '0 5x'
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '160px'
  }, text: {
    padding: '0 25px 0 5px'
  }
};

export default () =>
  <div style={styles.header}>
    <div style={styles.text}>Small
      <div style={styles.button}>
        <Loader size="small"/>
      </div>
    </div>
    <div style={styles.text}>Medium
      <div style={styles.button}>
        <Loader size="medium"/>
      </div>
    </div>
    <div style={styles.text}>Large
      <div style={styles.button}>
        <Loader size="large"/>
      </div>
    </div>
  </div>;
