import React from 'react';
import ReactDOM from 'react-dom';
import DataTable from '../DataTable';
import ReactTestUtils from 'react-addons-test-utils';
import _ from 'lodash';
import $ from 'jquery';


const tableDriverFactory = ({component, wrapper}) => {
  const $component = $(component);

  const rootElement = 'div';

  const getHeader = () => $component.find('thead');
  const hasHeader = () => !!getHeader().length;

  const getRows = () => $component.find('tbody tr');
  const getRowsCount = () => getRows().length;
  const getRow = rowIndex => getRows().get(rowIndex);

  return {
    getRowsCount,
    getRowsWithClassCount: className => getRows().filter(`.${className}`).length,
    getRowText: index => getRows().eq(index).find('td').get().map(td => $(td).text()),
    isRowClickable: index => getRows().eq(index).attr('class').indexOf('clickableDataRow') !== -1,
    getTitles: () => getHeader().find('th').get().map(th => $(th).text()),
    isDisplayingNothing: () => $component.find(rootElement).length === 0,
    isDisplayingHeaderOnly: () => hasHeader() && getRowsCount() === 0,
    hasChildWithId: id => $component.find(`#${id}`).length > 0,
    clickRow: (index, eventData) => ReactTestUtils.Simulate.click(getRow(index), eventData),
    setProps: props => {
      ReactDOM.render(<div ref={r => component = r}><DataTable {...props}/></div>, wrapper);
    }
  };
};

const componentFactory = (props = {}) => {
  let component;
  const wrapperDiv = document.createElement('div');
  ReactDOM.render(<div ref={r => component = r}><DataTable {...props}/></div>, wrapperDiv);
  return {component: component.childNodes[0], wrapper: wrapperDiv};
};

const tableTestkitFactory = ({wrapper, id}) => {
  const component = $(wrapper).find(`#${id}`)[0];
  return tableDriverFactory({component, wrapper});
};

export {tableTestkitFactory, componentFactory, tableDriverFactory};
