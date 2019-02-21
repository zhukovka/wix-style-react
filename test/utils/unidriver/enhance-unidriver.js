/**
 * Adds extra methods to a Unidriver
 *
 * @param {*} baseUniDriver
 * @param {*} createExtraMethods receives (baseDriver, enhacen, enhanceList), returns an object with extra methods. Extra methods may override base unidriver methods
 * @returns enhacned Unidriver with extra methods
 */
export function enhanceUnidriver(baseUniDriver, createExtraMethods) {
  const { $, $$, ...rest } = baseUniDriver;

  function enhance(_baseUniDriver) {
    return enhanceUnidriver(_baseUniDriver, createExtraMethods);
  }

  function enhanceList(baseUniDriverList) {
    return {
      get: idx => enhance(baseUniDriverList.get(idx)),
      text: baseUniDriverList.text,
      count: baseUniDriverList.count,
      map: baseUniDriverList.map,
      filter: predicate => enhanceList(baseUniDriverList.filter(predicate)),
    };
  }

  return {
    ...rest,
    $: selector => enhance(baseUniDriver.$(selector)),
    $$: selector => enhanceList(baseUniDriver.$$(selector)),
    ...createExtraMethods(baseUniDriver, enhance, enhanceList),
  };
}
