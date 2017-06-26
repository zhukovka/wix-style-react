const dividerDriverFactory = ({element, component}) => {

  return {
    exists: () => !!element,
    getColor: () => element.style._values['border-color'],
    getSize: () => component.props.size,
    getDirection: () => component.props.direction,
    getLength: () => component.props.length,
    getOpacity: () => element.style._values.opacity,
    getWidth: () => element.style._values.width,
    getHeight: () => element.style._values.height,
    getBorder: () => element.style._values.border
  };

};

export default dividerDriverFactory;
