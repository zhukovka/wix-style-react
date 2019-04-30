// import ReactTestUtils from 'react-dom/test-utils';

const nestableListFactory = ({ element, wrapper }) => {
  // in case if wrapper is coming from enzyme, we want to get it instance
  // const vanillaWrapper = wrapper.instance ? wrapper.instance() : wrapper;
  // const isCompositeComponent = ReactTestUtils.isCompositeComponent(
  //   vanillaWrapper,
  // );

  // if (!isCompositeComponent) {
  //   console.warn('NestableList factory expect to receive wrapper as composite component(react instance, and not a dom instance)'); // eslint-disable-line
  // }

  return {
    exists: () => !!element,
    // getItemsNodes: () => {
    //   return wrapper.find('[data-hook="nestable-item"]').length;
    // },
    // reorder: ({ removedId, addedId }) => {
    //   if (backend) {
    //     backend.simulateBeginDrag([
    //       getInstanceOfDraggableSource(
    //         vanillaWrapper,
    //         removedId,
    //       ).getHandlerId(),
    //     ]);
    //     backend.simulateHover([
    //       getInstanceOfDraggableTarget(vanillaWrapper, addedId).getHandlerId(),
    //     ]);
    //     backend.simulateDrop();
    //     backend.simulateEndDrag();
    //   }
    // },
  };
};

export default nestableListFactory;
