import {pxDivide} from './utils';

const pallete = {
  mainColor: '#3899ec', //B10
  dangerColor: '#d8504c'//R05
};

const heightMap = {
  small: '30px',
  medium: '36px',
  large: '42px'
};

const paddingMap = {
  small: '0 17px',
  medium: '0 23px',
  large: '0 29px'
};

const fontSizeMap = {
  small: '14px',
  medium: '16px',
  large: '20px'
};

const lineHeightMap = {
  small: '18px',
  medium: '24px',
  large: '24px'
};

const skinToColorMap = {
  fullblue: '#ffffff'
};

const skinToBackgroundMap = {
  fullblue: pallete.mainColor
};

const skinToBorderColorMap = {
  fullblue: pallete.mainColor
};

const skinToHoverColorMap = {
  fullblue: '#ffffff'
};

const skinToHoverBackgroundMap = {
  fullblue: pallete.mainHoverColor
};

const skinToHoverBorderColorMap = {
  fullblue: pallete.mainHoverColor
};

export default {
  button: {
    fontSize: ({height}) => fontSizeMap[height],
    lineHeight: ({height}) => lineHeightMap[height],

    height: ({height}) => heightMap[height],
    padding: ({height}) => paddingMap[height],
    borderRadius: ({height}) => pxDivide(heightMap[height], 2),

    color: ({skin}) => skinToColorMap[skin],
    backgroundColor: ({skin}) => skinToBackgroundMap[skin],
    borderColor: ({skin}) => skinToBorderColorMap[skin],

    hover: {
      color: ({skin}) => skinToHoverColorMap[skin],
      backgroundColor: ({skin}) => skinToHoverBackgroundMap[skin],
      borderColor: ({skin}) => skinToHoverBorderColorMap[skin]
    },

    disabled: {
      color: 'black',
      backgroundColor: pallete.disabled,
      borderColor: pallete.disabled
    }
  }
};
