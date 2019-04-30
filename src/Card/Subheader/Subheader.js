import React, { PureComponent } from 'react';
import { node, string } from 'prop-types';
import Text from '../../Text';
import Box from '../../Box';
import styles from './Subheader.st.css';

const isString = a => typeof a === 'string';

class Subheader extends PureComponent {
  static displayName = 'Card.Subheader';

  static propTypes = {
    /** required card title */
    title: node.isRequired,
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
            title
          )}
        </Box>

        {suffix && <div className={styles.suffix}>{suffix}</div>}
      </div>
    );
  }
}

export default Subheader;
