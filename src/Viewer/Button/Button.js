import React from 'react';
import {any, func, string} from 'prop-types';
import WixComponent from '../../BaseComponents/WixComponent';
import ButtonLayout from '../ButtonLayout/ButtonLayout';
import omit from 'lodash.omit';

class Button extends WixComponent {
  static propTypes = {
    ...ButtonLayout.DesignPropTypes,
    children: any,
    type: string,
    onClick: func
  };

  static defaultProps = ButtonLayout.defaultProps;

  render() {
    const {disabled, onClick, children, type} = this.props;
    let {onHoverColor, color, onHoverBorderWidth, borderWidth, onHoverBorderColor, borderColor, borderColorOpacity, onHoverBorderColorOpacity, onHoverBackgroundColor, backgroundColor, onHoverBackgroundColorOpacity, backgroundColorOpacity, radius, onHoverRadius} = this.props;
    let props;
    switch (this.props.theme) {
      case ButtonLayout.settings.CONNECTED_THEME:
        props = Object.assign(this.props,
        ...ButtonLayout.ConnectedPropTypes,
        {});
        break;
      case ButtonLayout.settings.DESIGN_THEME:
        props = Object.assign(this.props,
        ...ButtonLayout.DesignPropTypes,
        {});
        break;
      case ButtonLayout.settings.FILL_THEME:
      default:
        props = Object.assign(this.props,
        ...ButtonLayout.FillPropTypes,
        {});
        break;
    }
    const buttonLayoutProps = omit(props, ['id', 'onClick', 'type']);

    return (
      <ButtonLayout {...buttonLayoutProps} >
        <button
          onClick={onClick}
          disabled={disabled}
          type={type}
          onMouseEnter={event => {
            const target = event.target;
            if (this.props.theme === ButtonLayout.settings.DESIGN_THEME) {
              onHoverBackgroundColorOpacity = ButtonLayout.returnSelectedValue(onHoverBackgroundColorOpacity, ButtonLayout.settings.DEFAULT_DESIGN_HOVER_BG_OPACITY);
              backgroundColor = ButtonLayout.returnSelectedValue(backgroundColor, ButtonLayout.settings.DEFAULT_DESIGN_HOVER_BG_COLOR);
              onHoverBackgroundColor = ButtonLayout.returnSelectedValue(onHoverBackgroundColor, backgroundColor);
              const hoverBGColor = ButtonLayout.generateRGBAColor(onHoverBackgroundColor, onHoverBackgroundColorOpacity);

              onHoverRadius = ButtonLayout.returnSelectedValue(onHoverRadius, ButtonLayout.settings.DEFAULT_RADIUS);

              borderColor = ButtonLayout.returnSelectedValue(borderColor, ButtonLayout.settings.DEFAULT_DESIGN_HOVER_BORDER_COLOR);
              onHoverBorderColor = ButtonLayout.returnSelectedValue(onHoverBorderColor, borderColor);
              borderColorOpacity = ButtonLayout.returnSelectedValue(borderColorOpacity, ButtonLayout.settings.DEFAULT_HOVER_BORDER_OPACITY);
              onHoverBorderColorOpacity = ButtonLayout.returnSelectedValue(onHoverBorderColorOpacity, borderColorOpacity);
              const hoverBorderColor = ButtonLayout.generateRGBAColor(onHoverBorderColor, onHoverBorderColorOpacity);

              const newHoverBorderWidth = ButtonLayout.returnSelectedValue(borderWidth, ButtonLayout.settings.DEFAULT_BORDER_WIDTH);
              onHoverBorderWidth = ButtonLayout.returnSelectedValue(onHoverBorderWidth, newHoverBorderWidth);

              const newHoverBasicColor = ButtonLayout.returnSelectedValue(color, ButtonLayout.settings.DEFAULT_DESIGN_HOVER_COLOR);
              onHoverColor = ButtonLayout.returnSelectedValue(onHoverColor, newHoverBasicColor);

              target.style.backgroundColor = hoverBGColor;
              target.style.borderRadius = `${onHoverRadius}px`;
              target.style.border = `${onHoverBorderWidth}px solid ${hoverBorderColor}`;
              target.style.color = ButtonLayout.generateRGBAColor(onHoverColor);

            } else if (this.props.theme === ButtonLayout.settings.CONNECTED_THEME) {
              const invertedColor = ButtonLayout.returnSelectedValue(color, ButtonLayout.settings.DEFAULT_DESIGN_COLOR);
              const invertedBackgroundColor = ButtonLayout.returnSelectedValue(backgroundColor, ButtonLayout.settings.DEFAULT_DESIGN_BG_COLOR);
              target.style.backgroundColor = invertedColor;
              target.style.color = ButtonLayout.generateRGBAColor(invertedBackgroundColor);
            }
          }}
          onMouseLeave={event => {
            const target = event.target;
            if (this.props.theme === ButtonLayout.settings.DESIGN_THEME) {
              backgroundColorOpacity = ButtonLayout.returnSelectedValue(backgroundColorOpacity, ButtonLayout.settings.DEFAULT_DESIGN_BG_OPACITY);
              backgroundColor = ButtonLayout.returnSelectedValue(backgroundColor, ButtonLayout.settings.DEFAULT_DESIGN_BG_COLOR);
              const basicBGColor = ButtonLayout.generateRGBAColor(backgroundColor, backgroundColorOpacity);

              radius = ButtonLayout.returnSelectedValue(radius, ButtonLayout.settings.DEFAULT_RADIUS);

              color = ButtonLayout.returnSelectedValue(color, ButtonLayout.settings.DEFAULT_DESIGN_COLOR);

              borderWidth = ButtonLayout.returnSelectedValue(borderWidth, ButtonLayout.settings.DEFAULT_BORDER_WIDTH);
              borderColor = ButtonLayout.returnSelectedValue(borderColor, ButtonLayout.settings.DEFAULT_DESIGN_BORDER_COLOR);
              target.style.backgroundColor = basicBGColor;
              target.style.borderRadius = `${radius}px`;
              target.style.border = `${borderWidth}px solid ${borderColor}`;
              target.style.color = ButtonLayout.generateRGBAColor(color);

            } else if (this.props.theme === ButtonLayout.settings.CONNECTED_THEME) {
              color = ButtonLayout.returnSelectedValue(color, ButtonLayout.settings.DEFAULT_DESIGN_COLOR);
              backgroundColor = ButtonLayout.returnSelectedValue(backgroundColor, ButtonLayout.settings.DEFAULT_DESIGN_BG_COLOR);
              backgroundColorOpacity = ButtonLayout.returnSelectedValue(backgroundColorOpacity, ButtonLayout.settings.DEFAULT_DESIGN_BG_OPACITY);

              target.style.backgroundColor = ButtonLayout.generateRGBAColor(backgroundColor, backgroundColorOpacity);
              target.style.color = ButtonLayout.generateRGBAColor(color);
            }
          }}
          >
          {children}
        </button>
      </ButtonLayout>
    );
  }
}

Button.displayName = 'Button';

export default Button;
