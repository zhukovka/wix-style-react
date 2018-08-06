import React from 'react';
import {node} from 'prop-types';
import styles from './Content.scss';

const Content = ({children}) =>
  <div
    className={styles.root}
    children={children}
    />;

Content.propTypes = {
  children: node
};

export default Content;
