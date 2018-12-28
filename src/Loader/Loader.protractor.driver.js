import css from './Loader.scss';

const hasClass = (element, styles, cls) => {
  return element
    .getAttribute('class')
    .then(classes => classes.split(' ').some(c => c.includes(styles[cls])));
};

const getLoaderTextElement = component =>
  component.$(`[data-hook="loader-text"]`);

const loaderDriverFactory = component => {
  return {
    /** returns the driver element */
    element: () => component,

    /** true when using the tiny loader */
    isTiny: () => hasClass(component, css, 'tiny'),

    /** true when using the small loader */
    isSmall: () => hasClass(component, css, 'small'),

    /** true when using the medium loader */
    isMedium: () => hasClass(component, css, 'medium'),

    /** true when using the large loader */
    isLarge: () => hasClass(component, css, 'large'),

    /** returns the loader color ('blue' or 'white') */
    getColor: () =>
      hasClass(component, css, 'blue').then(hasBlueClass =>
        hasBlueClass ? 'blue' : 'white',
      ),

    /** true if the element has text */
    hasText: () => getLoaderTextElement(component).isPresent(),

    /** returns the element text (will be in upper case) */
    getText: () => getLoaderTextElement(component).getText(),

    /** true when loader is in error status */
    isError: () => hasClass(component, css, 'error'),

    /** true when loader is in success status */
    isSuccess: () => hasClass(component, css, 'success'),

    /** true when loader is in loading status */
    isLoading: () => hasClass(component, css, 'loading'),
  };
};

export default loaderDriverFactory;
