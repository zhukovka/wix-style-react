import ReactTestUtils from 'react-addons-test-utils';
import navigationStyles from './navigation/styles.scss';

const sideMenuDriverFactory = ({element}) => {
  const getHeader = () => element.querySelector('[data-hook=menu-header]');
  const getNavigation = () => element.querySelector('[data-hook=menu-navigation]');
  const getNavigationLinks = () => element.querySelectorAll('[data-hook=menu-navigation-link]');
  const getNavigationSeparators = () => element.querySelectorAll('[data-hook=menu-navigation-separator]');
  const getNavigationCategories = () => element.querySelectorAll('[data-hook=menu-navigation-category]');
  const getNavigationBackLink = () => element.querySelector('[data-hook=menu-navigation-back-link]');
  const getPromotion = () => element.querySelector('[data-hook=menu-promotion]');
  const getFooter = () => element.querySelector('[data-hook=menu-footer]');

  return {
    exists: () => !!element,
    hasHeader: () => !!getHeader(),
    hasNavigation: () => !!getNavigation(),
    hasPromotion: () => !!getPromotion(),
    hasFooter: () => !!getFooter(),
    hasBackLink: () => !!getNavigationBackLink(),
    headerContent: () => getHeader().textContent,
    navigationLinks: () => getNavigationLinks(),
    isLinkActiveByIndex: index => getNavigationLinks()[index].classList.contains(navigationStyles.linkActive),
    navigationSeparators: () => getNavigationSeparators(),
    navigationCategories: () => getNavigationCategories(),
    navigationCategoryContent: index => getNavigationCategories()[index].textContent,
    clickLinkByIndex: index => ReactTestUtils.Simulate.click(getNavigationLinks()[index]),
    clickBackLink: () => ReactTestUtils.Simulate.click(getNavigationBackLink()),
    promotionContent: () => getPromotion().textContent,
    footerContent: () => getFooter().textContent
  };
};

export default sideMenuDriverFactory;
