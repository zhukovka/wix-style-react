import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

const dataTableDriverFactory = ({element, wrapper, component}) => {

  const getHeader = () => element.querySelector('thead');
  const hasHeader = () => !!getHeader();

  const getRows = () => element.querySelectorAll('tbody tr');
  const getRowsCount = () => getRows().length;
  const getRow = rowIndex => getRows()[rowIndex];


  return {
    getRowsCount,
    getRowsWithClassCount: className => Object.values(getRows()).filter(elem => elem.classList.contains(className)).length,
    getRowText: index => Object.values(getRows()[index].querySelectorAll('td')).map(td => td.textContent),
    isRowClickable: index => getRows()[index].classList.contains('clickableDataRow'),
    getTitles: () => Object.values(getHeader().querySelectorAll('th')).map(th => th.textContent),
    isDisplayingNothing: () => !!element,
    isDisplayingHeaderOnly: () => hasHeader() && getRowsCount() === 0,
    hasChildWithId: id => !!element.querySelector(`#${id}`),
    clickRow: (index, eventData) => ReactTestUtils.Simulate.click(getRow(index), eventData),
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };
};

export default dataTableDriverFactory;
