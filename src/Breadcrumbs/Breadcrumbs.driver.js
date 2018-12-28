import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { isClassExists } from '../../test/utils';

const breadcrumbsDriverFactory = ({ element, wrapper, component }) => {
  const optionAt = position => element.childNodes[position];

  return {
    exists: () => !!element,

    /** return the number of the items in the breadcrumbs */
    breadcrumbsLength: () => element.childNodes.length,

    /** return the breadcrumb item content at position  */
    breadcrumbContentAt: position => optionAt(position).textContent,

    /** click on breadcrumb item at position */
    clickBreadcrumbAt: position =>
      ReactTestUtils.Simulate.click(
        optionAt(position).querySelector('[data-hook="breadcrumb-clickable"]'),
      ),

    /** return the active breadcrumb item position or return null if no active item exists */
    getActiveItemId: () => {
      const activeItem = element.querySelector('.active');

      if (!activeItem) {
        return null;
      }

      return Array.from(activeItem.parentNode.children).indexOf(activeItem);
    },

    /** fulfilled if breadcrumbs component is large */
    isLarge: () => isClassExists(element, 'large'),

    /** fulfilled if breadcrumbs component is medium */
    isMedium: () => isClassExists(element, 'medium'),

    /** fulfilled if breadcrumbs component is on white background */
    isOnWhiteBackground: () => isClassExists(element, 'onWhiteBackground'),

    /** fulfilled if breadcrumbs component is on gray background */
    isOnGrayBackground: () => isClassExists(element, 'onGrayBackground'),

    /** fulfilled if breadcrumbs component is on dark background */
    isOnDarkBackground: () => isClassExists(element, 'onDarkBackground'),

    /** returns breadcrumbs component classes */
    getLabelClassList: position =>
      optionAt(position).querySelector('[data-hook="breadcrumbs-item"]')
        .className,

    /** returns true if the item is a link */
    isActiveLinkAt: index => !!optionAt(index).querySelector('a'),
    setProps: props => {
      const ClonedWithProps = React.cloneElement(
        component,
        Object.assign({}, component.props, props),
        ...(component.props.children || []),
      );
      ReactDOM.render(
        <div ref={r => (element = r)}>{ClonedWithProps}</div>,
        wrapper,
      );
    },
  };
};

export default breadcrumbsDriverFactory;
