import React from 'react';
import { Popover as CorePopover } from 'wix-ui-core/popover';
import { buildChildrenObject } from 'wix-ui-core/dist/src/utils';
import PropTypes from 'prop-types';

import style from './Popover.st.css';

class Popover extends React.Component {
  static displayName = 'Popover';

  static Element = CorePopover.Element;
  static Content = CorePopover.Content;

  static propTypes = {
    ...CorePopover.propTypes,
    dataHook: PropTypes.string,

    /** The theme of the popover */
    theme: PropTypes.oneOf(['dark', 'light']),

    children: (props, propName) => {
      const childrenArr = React.Children.toArray(props[propName]);
      const childrenObj = buildChildrenObject(childrenArr, {
        Element: null,
        Content: null,
      });

      if (!childrenObj.Element) {
        return new Error(
          'Invalid children provided, <Popover.Element/> must be provided',
        );
      }

      if (!childrenObj.Content) {
        return new Error(
          'Invalid children provided, <Popover.Content/> must be provided',
        );
      }

      return childrenArr.reduce((err, child) => {
        if (
          !err &&
          (child.type.displayName !== 'Popover.Element' &&
            child.type.displayName !== 'Popover.Content')
        ) {
          return new Error(
            `Invalid children provided, unknown child <${child.type
              .displayName || child.type}/> supplied`,
          );
        }

        return err;
      }, false);
    },
  };

  static defaultProps = {
    appendTo: 'parent',
  };

  render() {
    const { dataHook, theme, ...rest } = this.props;

    return (
      <div data-hook={dataHook}>
        <CorePopover
          {...rest}
          {...style(
            'root',
            {
              theme,
            },
            this.props,
          )}
        />
      </div>
    );
  }
}

export default Popover;
