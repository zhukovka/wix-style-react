import defaultsDeep from 'lodash/defaultsDeep';

const core = {
  fontFamily: `"HelveticaNeueW01-45Ligh", "HelveticaNeueW02-45Ligh", "HelveticaNeueW10-45Ligh", "Helvetica Neue", "Helvetica", "Arial", "メイリオ, meiryo", "ヒラギノ角ゴ pro w3", "hiragino kaku gothic pro", "sans-serif"`,
  fontSize: '16px',
  lineHeight: '24px',
  fontStyle: 'normal',
  fontWeight: 'normal',
  textDecoration: 'none',

  height: '36px',
  padding: '0 23px',

  color: 'black',
  backgroundColor: 'grey',
  borderColor: 'black',
  borderRadius: '0',

  hover: {
    color: 'black',
    backgroundColor: 'grey',
    borderColor: 'black'
  },

  disabled: {
    color: 'black',
    backgroundColor: 'grey',
    borderColor: 'black'
  }
};

export default ({button}) => {
  button = defaultsDeep(button, core);

  return {
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
  };
};
