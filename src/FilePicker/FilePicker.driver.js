const filePickerDriverFactory = ({ element }) => {
  const error = element.querySelector(`[data-hook=filePicker-error]`);
  const input = element.querySelector(`input`);
  const subLabel = element.querySelector(`[data-hook="sub-label"]`);
  const mainLabel = element.querySelector(`[data-hook="main-label"]`);

  return {
    exists: () => !!element,
    hasError: () => !!error,
    errorMessage: () => error.textContent,
    getInput: () => input.textContent,
    getSubLabel: () => subLabel.textContent,
    getMainLabel: () => mainLabel.textContent,
  };
};

export default filePickerDriverFactory;
