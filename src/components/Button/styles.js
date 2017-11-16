export default ({button}) => ({
  button: {
    color: button.color,
    background: button.backgroundColor,
    borderColor: button.borderColor,
    height: button.height,
    borderRadius: button.borderRadius,
    padding: button.padding,

    fontFamily: button.fontFamily,
    fontSize: button.fontSize,
    lineHeight: button.lineHeight,
    fontStyle: button.fontStyle,
    fontWeight: button.fontWeight,
    textDecoration: button.textDecoration,

    boxSizing: 'border-box',
    '-webkit-font-smoothing': 'antialiased',
    textAlign: 'center',
    border: '1px solid',
    cursor: 'pointer',
    outline: 'none',

    transition: 'background-color 100ms linear, border-color 100ms linear, color 100ms linear',

    '&:hover': {
      color: button.hover.color,
      backgroundColor: button.hover.backgroundColor,
      borderColor: button.hover.borderColor
    },

    '&:disabled': {
      pointerEvents: 'none',
      backgroundColor: button.disabled.backgroundColor,
      borderColor: button.disabled.borderColor
    }
  }
});
