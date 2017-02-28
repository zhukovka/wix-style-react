import React from 'react';
import styles from './Add.scss';
export default function MenuArrow() {

  return (
    <div className={styles.icon}>
      <svg width="10px" height="10px">
        <path fillRule="evenodd" stroke="rgb(255, 255, 255)" strokeWidth="1px" strokeLinecap="butt" strokeLinejoin="miter" fill="rgb(102, 115, 124)" d="M0,5 L10,5 "/>
        <path fillRule="evenodd" stroke="rgb(255, 255, 255)" strokeWidth="1px" strokeLinecap="butt" strokeLinejoin="miter" fill="rgb(102, 115, 124)" d="M5,0 L5,10 "/>
      </svg>
    </div>
  );
}
