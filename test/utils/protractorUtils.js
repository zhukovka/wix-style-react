export function isFocused(elementFinder) {
  return elementFinder.equals(browser.driver.switchTo().activeElement());
}

