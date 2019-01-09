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

/**
 * This is a workaround for AutoDocs, so we can apply custom propTypes validators with side-effects, and not affect the generated prop type.
 * If we had support for writing JSDoc for props with a `@type` tag, then we wouldn't need this.
 */
export function extendPropTypes(Component, propTypes) {
  Component.propTypes = { ...Component.propTypes, ...propTypes };
}

/**
 * Runs all validators.
 */
export function allValidators(...validators) {
  return (props, propName, componentName) => {
    validators.forEach(validator => {
      PropTypes.checkPropTypes(
        { [propName]: validator },
        props,
        propName,
        componentName,
      );
    });
  };
}
