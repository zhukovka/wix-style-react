import React from 'react';
import Tag from 'wix-style-react/Tag';
import styles from './ExampleStandard.scss';

const ExampleStandard = () => (
  <div className={styles.main}>
    <div className={styles.row}>
      <Tag id="myId1" label="Small Tag" removable={false}/>
      <Tag id="myId2" label="Small removable"/>
      <Tag id="myId3" label="Small with Thumb" thumb={<div className={styles.thumb}/>}/>
    </div>
    <div className={styles.row}>
      <Tag id="myId4" label="Large Tag" size="large" removable={false}/>
      <Tag id="myId5" label="Large removable" size="large"/>
      <Tag id="myId3" label="Large with Thumb" size="large" thumb={<div className={styles.thumb2}/>}/>
    </div>
  </div>
);

export default ExampleStandard;
