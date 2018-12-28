export const getStylableState = (base, style, state) => {
  const stateKey = Object.keys(style.$cssStates({ [state]: true }))[0];
  return base.attr(stateKey);
};
