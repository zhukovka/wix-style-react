module.exports = function (margin) {
  return {
    '&:not(:first-child)': {
      'margin-left': margin
    },

    '&:not(:last-child)': {
      'margin-right': margin
    },

    ':global(.rtl) &': {
      '&:not(:first-child)': {
        'margin-left': 0,
        'margin-right': margin
      },

      '&:not(:last-child)': {
        'margin-left': margin,
        'margin-right': 0
      }
    }
  };
};
