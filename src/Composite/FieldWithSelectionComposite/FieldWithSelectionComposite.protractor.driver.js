const FieldWithSelectionCompositeDriverFactory = component => ({
  getLabel: () => component.find('label'),
  element: () => component
});

export default FieldWithSelectionCompositeDriverFactory;
