import React from 'react';
import ReactDOM from 'react-dom';
import dropdownLayoutDriver from '../ButtonWithOptions/ButtonWithOptions.driver';
import headerDriverFactory from '../Card/Header/Header.driver';

const statsWidgetDriverFactory = ({element, wrapper, component}) => {
  const getStatistic = index => element.querySelector('[data-hook="stats-widget-content-wrapper"]').childNodes[index];

  const headerElement = element.querySelector(`[data-hook="stats-widget-title"]`);

  const headerDriver = headerDriverFactory({wrapper: element, element: headerElement});

  const driver = {
    exists: () => !!element,

    titleText: () => headerDriver.title(),

    getStatisticTitle: index => getStatistic(index).querySelector('[data-hook="statistics-item-title"]').textContent,

    getStatisticSubTitle: index => getStatistic(index).querySelector('[data-hook="statistics-item-subtitle"]').textContent,

    getStatisticPercentValue: index => getStatistic(index).querySelector('[data-hook="percent-value"]').textContent,

    getStatisticPercentClass: index => getStatistic(index).querySelector('[data-hook="percent-wrapper"]').className,

    getFilterDriver: dataHook => {
      const optionElement = element.querySelector(`[data-hook="${dataHook}"]`);
      return dropdownLayoutDriver({wrapper: element, element: optionElement});
    },

    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };

  return driver;
};

export default statsWidgetDriverFactory;
