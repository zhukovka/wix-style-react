import PropTypes from 'prop-types';

/**
 *
 * @param {*} validator a vlidator to be run (e.g. PropTypes.string)
 * @param {*} sideEffect  a side-effect to be run before validator is called. A function which receives same arguments as a PropTypes validator (props, propName, compoenntName).
 */
export function validatorWithSideEffect(validator, sideEffect) {
  return (props, propName, componentName) => {
    sideEffect(props, propName, componentName);
    return PropTypes.checkPropTypes(
      { [propName]: validator },
      props,
      propName,
      componentName,
    );
  };
}
