const DEFAULT_RULE = () =>
  ({top: 0, left: 0});

const RULES = {
  'top-left': (anchor, element, margin) => ({
    top: anchor.top - element.height - margin,
    left: anchor.left
  }),
  'top-center': (anchor, element, margin) => ({
    top: anchor.top - element.height - margin,
    left: (anchor.left + (anchor.width / 2)) - (element.width / 2)
  }),
  'top-right': (anchor, element, margin) => ({
    top: anchor.top - element.height - margin,
    left: anchor.left + anchor.width - element.width
  }),
  'bottom-left': (anchor, element, margin) => ({
    top: anchor.top + anchor.height + margin,
    left: anchor.left
  }),
  'bottom-center': (anchor, element, margin) => ({
    top: anchor.top + anchor.height + margin,
    left: (anchor.left + (anchor.width / 2)) - (element.width / 2)
  }),
  'bottom-right': (anchor, element, margin) => ({
    top: anchor.top + anchor.height + margin,
    left: anchor.left + anchor.width - element.width
  }),
  'left-top': (anchor, element, margin) => ({
    top: anchor.top,
    left: anchor.left - element.width - margin
  }),
  'left-center': (anchor, element, margin) => ({
    top: anchor.top + (anchor.height / 2) - (element.height / 2),
    left: anchor.left - element.width - margin
  }),
  'left-bottom': (anchor, element, margin) => ({
    top: anchor.top + anchor.height - element.height,
    left: anchor.left - element.width - margin
  }),
  'right-top': (anchor, element, margin) => ({
    top: anchor.top,
    left: anchor.left + anchor.width + margin
  }),
  'right-center': (anchor, element, margin) => ({
    top: anchor.top + (anchor.height / 2) - (element.height / 2),
    left: anchor.left + anchor.width + margin
  }),
  'right-bottom': (anchor, element, margin) => ({
    top: anchor.top + anchor.height - element.height,
    left: anchor.left + anchor.width + margin
  })
};

export default function position(anchor, element, params) {
  const {placement = 'top', alignment = 'center', margin = 20} = params;
  return (RULES[`${placement}-${alignment}`] || DEFAULT_RULE)(anchor, element, margin);
}
