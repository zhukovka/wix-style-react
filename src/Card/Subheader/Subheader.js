import React, { Component } from 'react';
import { node, string, oneOfType } from 'prop-types';
import Text from '../../Text/ProxyText';
import Box from '../../Box';
import styles from './Subheader.st.css';

const isString = a => typeof a === 'string';

class Subheader extends Component {
  static displayName = 'Card.Subheader';

  static propTypes = {
    /** required card title */
    title: oneOfType([node, string]).isRequired,
    suffix: node,
  };

  render() {
    const { title, suffix } = this.props;

    return (
      <div className={styles.container}>
        <Box verticalAlign="middle" flexGrow={1} overflow="hidden">
          {isString(title) ? (
            <Text ellipsis weight="normal" size="medium" dataHook="title">
              {title}
            </Text>
          ) : (
            <span data-hook="title-node">{title}</span>
          )}
        </Box>

        {suffix && (
          <div data-hook="suffix" className={styles.suffix} children={suffix} />
        )}
      </div>
    );
  }
}

export default Subheader;
