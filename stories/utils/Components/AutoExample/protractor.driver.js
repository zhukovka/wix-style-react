export default {
  setProps: props => {
    const script = componentProps => {
      const args = Object.keys(componentProps).reduce((props, key) => {
        props[key] = typeof props[key] === 'function' ?
          eval(`(${componentProps[key]})`) : // eslint-disable-line no-eval
          props[key];

        return props;
      }, componentProps);

      window.autoexample.setState({
        propsState: Object.assign({}, window.autoexample.state.propsState, args)
      });
    };

    browser.executeScript(script, props);
  },
  reset: () =>
    browser.executeScript('window.autoexample.resetState()')
};
