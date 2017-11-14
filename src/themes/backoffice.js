import {pxDivide} from './utils';

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

const pallete = {
  disabled: '#cbd3dc', //D55
  mainColor: '#3899ec', //B10
  mainHoverColor: '#4eb7f5' //B20
};

export default {
  name: 'backoffice',
  pallete,
  button: {
    fontSize: ({height}) => fontSizeMap[height],
    lineHeight: ({height}) => lineHeightMap[height],

    height: ({height}) => heightMap[height],
    padding: ({height}) => paddingMap[height],
    borderRadius: ({height}) => pxDivide(heightMap[height], 2),

    color: ({skin}) => skin === 'fullblue' ? '#ffffff' : 'black',
    backgroundColor: ({skin}) => skin === 'fullblue' ? pallete.mainColor : 'red',
    borderColor: ({skin}) => skin === 'fullblue' ? pallete.mainColor : 'red',

    hover: {
      color: ({skin}) => skin === 'fullblue' ? '#ffffff' : 'black',
      backgroundColor: ({skin}) => skin === 'fullblue' ? pallete.mainHoverColor : 'red',
      borderColor: ({skin}) => skin === 'fullblue' ? pallete.mainHoverColor : 'red'
    },

    disabled: {
      color: 'black',
      backgroundColor: pallete.disabled,
      borderColor: pallete.disabled
    }
  }
};
