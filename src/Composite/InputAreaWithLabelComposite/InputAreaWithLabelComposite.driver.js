import fieldLabelAttributesDriverFactory from '../../FieldLabelAttributes/FieldLabelAttributes.driver';

const inputAreaWithLabelCompositeDriverFactory = ({ element }) => {
  const label = element.childNodes[0].childNodes[0];
  return {
    exists: () => !!element,
    getLabel: () => label.textContent,
    hasLabel: () => label.tagName.toLowerCase() === 'label',
    getAttr: attrName => element.getAttribute(attrName),
    getNumberOfChildren: () => element.childElementCount,
    getInfoTooltipTestKit: () =>
      fieldLabelAttributesDriverFactory({
        element: element.querySelector('[data-hook="field-label-attributes"]'),
      }).getTooltipTestKit(),
    hasFieldLabelAttributes: () =>
      !!element.querySelectorAll('[data-hook="field-label-attributes"]').length,

    hasInput: () => !!element.querySelector('input.input'),
    hasInputArea: () => !!element.querySelector('textarea'),
  };
};

export default inputAreaWithLabelCompositeDriverFactory;
