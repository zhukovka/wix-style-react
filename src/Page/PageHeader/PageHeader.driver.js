const titleElement = element => element.querySelector('[data-hook="page-header-title"] h2');
const subtitleElement = element => element.querySelector('[data-hook="page-header-subtitle"] span');
const breadcrumbsElement = element => element.querySelector('[data-hook="page-header-breadcrumbs"]');

export default ({element}) => ({
  titleText: () => titleElement(element).innerHTML,
  isTitleExists: () => !!titleElement(element),
  subtitleText: () => subtitleElement(element).innerHTML,
  isSubtitleExists: () => !!subtitleElement(element),
  isBreadcrumbsExists: () => !!breadcrumbsElement(element)
});
