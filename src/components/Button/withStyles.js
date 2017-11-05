import React from 'react';
import {string, object, bool, oneOf} from 'prop-types';
import {css} from 'glamor';
import classNames from 'classnames';

const getTpaStyles = wixTpaStyles => {
  if (Object.keys(wixTpaStyles).length === 0) {
    return '';
  } else {
    const {color, backgroundColor, fontSize, borderColor} = wixTpaStyles;

    return css({
      backgroundColor,
      color,
      fontSize,
      borderColor,
      ':hover': {
        backgroundColor,
        color: 'black'
      }
    }).toString();
  }
};

export const withStyles = WrappedComponent => {
  const StylesWrapper = (props, {theme, wixTpaStyles}) => {
    const styles = require(`./themes/Button-${theme}.scss`);

    const {skin, hover, active, disabled, height} = props;
    const tpaClassName = getTpaStyles(wixTpaStyles);

    const buttonClassName = classNames({
      [styles.button]: true,
      [styles[skin || WrappedComponent.defaultProps.skin]]: true,
      [styles.hover]: hover,
      [styles.active]: active,
      [styles.disabled]: disabled,
      [styles[`height${height}`]]: height !== 'medium',
      [tpaClassName]: !!tpaClassName
    });

    const wixStyles = {
      button: buttonClassName,
      prefix: styles.prefix,
      suffix: styles.suffix
    };

    return <WrappedComponent {...{...props, wixStyles}}/>;
  };

  StylesWrapper.propTypes = {
    active: bool,
    disabled: bool,
    height: oneOf(['small', 'medium', 'large']),
    hover: bool,
    skin: oneOf([
      'transparent',
      'fullred',
      'fullgreen',
      'fullpurple',
      'emptyred',
      'emptygreen',
      'emptybluesecondary',
      'emptyblue',
      'emptypurple',
      'fullblue',
      'login',
      'emptylogin',
      'transparentblue',
      'whiteblue',
      'whiteblueprimary',
      'whitebluesecondary',
      'close-standard',
      'close-dark',
      'close-transparent',
      'icon-greybackground',
      'icon-standard',
      'icon-standardsecondary',
      'icon-white',
      'icon-whitesecondary'
    ])
  };

  StylesWrapper.defaultProps = {
    height: 'medium',
    skin: 'fullblue'
  };

  StylesWrapper.contextTypes = {
    theme: string,
    wixTpaStyles: object
  };

  return StylesWrapper;
};
