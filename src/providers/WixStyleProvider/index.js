import React from 'react';
import {any, object} from 'prop-types';
import injectSheet, {ThemeProvider} from 'react-jss';
import coreTheme from '../../themes/core';
import defaultsDeep from 'lodash/defaultsDeep';

export default class WixStyleProvider extends React.PureComponent {
  render() {
    const {children, theme} = this.props;
    return <ThemeProvider theme={defaultsDeep(theme, coreTheme)}>{children}</ThemeProvider>;
  }
}

WixStyleProvider.propTypes = {
  children: any,
  theme: object
};

WixStyleProvider.defaultProps = {
  theme: {}
};

export const withStyles = (Component, styles) =>
  injectSheet(styles, {inject: ['classes']})(Component);
