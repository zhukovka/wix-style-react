import React from 'react';
import ReactDOM from 'react-dom';

const filePickerDriverFactory = ({element, wrapper, component}) => {
  const error = element.querySelector(`[data-hook=filePicker-error]`);

  return {
    exists: () => !!element,
    hasError: () => !!error,
    errorMessage: () => error.textContent,
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };
};

export default filePickerDriverFactory;
