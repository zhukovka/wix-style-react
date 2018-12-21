export const getStylableState = async (base, style, state) => {
  const stateKey = Object.keys(style.$cssStates({ [state]: true }))[0];
  return await base.attr(stateKey);
};
