import React from 'react';
import {any, bool, oneOf} from 'prop-types';
import classNames from 'classnames';
import styles from './ButtonLayout.scss';
import hexToRgba from 'hex-to-rgba';

const settings = {
  FILL_THEME: 'fill',
  DESIGN_THEME: 'design',
  CONNECTED_THEME: 'connected',
  DEFAULT_RADIUS: 5,
  DEFAULT_BORDER_WIDTH: 1,
  DEFAULT_FILL_BG_OPACITY: 1,
  DEFAULT_FILL_BG_COLOR: hexToRgba('#ae9a65'),
  DEFAULT_FILL_COLOR: hexToRgba('#fff'),
  DEFAULT_DESIGN_BG_COLOR: '#fff',
  DEFAULT_DESIGN_HOVER_BG_COLOR: '#ae9a65',
  DEFAULT_DESIGN_BG_OPACITY: 0,
  DEFAULT_DESIGN_HOVER_BG_OPACITY: 1,
  //DEFAULT_DESIGN_HOVER_BORDER_WIDTH: 5,
  DEFAULT_DESIGN_COLOR: '#ae9a65',
  DEFAULT_DESIGN_HOVER_COLOR: '#fff',
  DEFAULT_DESIGN_BORDER_COLOR: '#ae9a65',
  DEFAULT_DESIGN_HOVER_BORDER_COLOR: '#ae9a65',
  DEFAULT_BORDER_OPACITY: 1,
  DEFAULT_HOVER_BORDER_OPACITY: 1
};

function generateRGBAColor(base, alpah) {
  return hexToRgba(base, alpah);
}

function returnSelectedValue(value, fallback) {
  return value ? value : fallback;
}

const ButtonLayout = props => {
  const {
    theme,
    hover,
    active,
    disabled,
    height,
    children,
  } = props;

  let {
    backgroundColor,
    color,
    backgroundColorOpacity,
    radius,
    borderWidth,
    borderColor,
    borderColorOpacity,
  } = props;

  const className = classNames({
    [styles.button]: true,
    [styles[theme]]: true,
    [styles.hover]: hover,
    [styles.active]: active,
    [styles.disabled]: disabled,
    [styles[`height${height}`]]: height !== 'medium'
  }, children.props.className);

  const commonStyle = {
    height,
    display: 'inline-block'
  };

  let selectedStyle;
  let borderRadius;
  switch (theme) {
    case settings.CONNECTED_THEME:
    case settings.DESIGN_THEME:
      backgroundColorOpacity = returnSelectedValue(backgroundColorOpacity, settings.DEFAULT_DESIGN_BG_OPACITY);
      backgroundColor = returnSelectedValue(backgroundColor, settings.DEFAULT_DESIGN_BG_COLOR);
      borderColor = returnSelectedValue(borderColor, settings.DEFAULT_DESIGN_BORDER_COLOR);
      borderWidth = returnSelectedValue(borderWidth, settings.DEFAULT_BORDER_WIDTH);
      borderColorOpacity = returnSelectedValue(borderColorOpacity, settings.DEFAULT_BORDER_OPACITY);
      color = returnSelectedValue(color, settings.DEFAULT_DESIGN_COLOR);
      borderRadius = `${returnSelectedValue(radius, settings.DEFAULT_RADIUS)}px`;
      selectedStyle = Object.assign(commonStyle, {
        backgroundColor: generateRGBAColor(backgroundColor, backgroundColorOpacity),
        color,
        borderRadius,
        border: `${borderWidth}px solid ${generateRGBAColor(borderColor, borderColorOpacity)}`
      });

      break;
    case settings.FILL_THEME:
    default:
      backgroundColorOpacity = returnSelectedValue(backgroundColorOpacity, settings.DEFAULT_FILL_BG_OPACITY);
      backgroundColor = returnSelectedValue(backgroundColor, settings.DEFAULT_FILL_BG_COLOR);
      selectedStyle = Object.assign(commonStyle, {
        backgroundColor,
        color: color ? color : settings.DEFAULT_FILL_COLOR
      });
      break;
  }

  const _style = Object.assign({},
    children.props.style,
    selectedStyle
  );

  if (React.Children.count(children) === 1) {
    return React.cloneElement(
      children,
      {className, style: _style},
      <div className={styles.inner}>
        {children.props.children}
      </div>
    );
  }
};

ButtonLayout.generateRGBAColor = generateRGBAColor;
ButtonLayout.returnSelectedValue = returnSelectedValue;
ButtonLayout.settings = settings;

ButtonLayout.defaultProps = {
  height: 'medium',
  theme: settings.FILL_THEME
};

const commonProps = {
  active: bool,
  children: any,
  disabled: bool,
  height: oneOf(['small', 'medium', 'large']),
  hover: bool,
  theme: oneOf([
    settings.FILL_THEME,
    settings.DESIGN_THEME,
    settings.CONNECTED_THEME
  ])
};

function numberRange(props, propName) {
  if (!/[1-9]]/.test(props[propName])) {
    return new Error('Validation failed!');
  }
  return null;
}

ButtonLayout.FillPropTypes = Object.assign(commonProps, {
  backgroundColor: any,
  color: any
});

ButtonLayout.DesignPropTypes = Object.assign(commonProps, {
  backgroundColor: any,
  backgroundColorOpacity: any,
  color: any,
  radius: any,
  borderWidth: numberRange,
  borderColor: any,
  borderColorOpacity: any
});

ButtonLayout.ConnectedPropTypes = Object.assign(commonProps, {
  backgroundColor: any,
  backgroundColorOpacity: any,
  color: any,
  radius: any,
  borderWidth: any,
  borderColor: any,
  borderColorOpacity: any
});

ButtonLayout.displayName = 'ButtonLayout';

export default ButtonLayout;
