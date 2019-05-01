import { baseUniDriverFactory, ReactBase } from '../../test/utils/unidriver';
import { dataTableUniDriverFactory } from '../DataTable/DataTable.uni.driver';
import { checkboxUniDriverFactory } from '../Checkbox/Checkbox.uni.driver';

export const tableUniDriverFactory = base => {
  const reactBase = ReactBase(base);
  const dataTableDriver = dataTableUniDriverFactory(base);
  const getRowCheckboxDriver = index =>
    checkboxUniDriverFactory(
      //need to understand hot wrap native element with uniDriver
      dataTableDriver.getCell(index, 0).$('[data-hook="row-select"]'),
    );
  const getBulkSelectionCheckboxDriver = () =>
    checkboxUniDriverFactory(
      //need to understand hot wrap native element with uniDriver
      dataTableDriver.getHeaderCell(0),
    ).$('[data-hook="table-select"]');

  return {
    ...baseUniDriverFactory(base),
    /** Get driver of row selection checbox by row index */
    getRowCheckboxDriver,
    /** Get driver of row bulk-selection checbox */
    getBulkSelectionCheckboxDriver,
  };
};
