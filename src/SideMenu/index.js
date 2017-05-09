import SideMenu from './core/SideMenu';

import Header from './core/Header';
import Navigation from './core/navigation';
import NavigationLink from './core/navigation/Link';
import NavigationBackLink from './core/navigation/BackLink';
import NavigationSeparator from './core/navigation/Separator';
import NavigationCategory from './core/navigation/Category';
import Promotion from './core/Promotion';
import Footer from './core/footer';
import FooterLink from './core/footer/Link';
import FooterTinyLink from './core/footer/TinyLink';

SideMenu.Logo = Header;
SideMenu.Header = Header;
SideMenu.Navigation = Navigation;
SideMenu.NavigationLink = NavigationLink;
SideMenu.NavigationBackLink = NavigationBackLink;
SideMenu.NavigationSeparator = NavigationSeparator;
SideMenu.NavigationCategory = NavigationCategory;
SideMenu.Promotion = Promotion;
SideMenu.Footer = Footer;
SideMenu.FooterLink = FooterLink;
SideMenu.FooterTinyLink = FooterTinyLink;

export default SideMenu;

