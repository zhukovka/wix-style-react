const breadcrumbsDriverFactory = component => ({
  click: () => component.click(),
  element: () => component
});

export default breadcrumbsDriverFactory;
