import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { dataTableUniDriverFactory } from '../DataTable/DataTable.uni.driver';
import { checkboxUniDriverFactory } from '../Checkbox/Checkbox.uni.driver';

export const tableUniDriverFactory = base => {
  const dataTableDriver = dataTableUniDriverFactory(base);
  const getRowCheckboxDriver = index =>
    checkboxUniDriverFactory(
      //need to understand how wrap native element with uniDriver
      //(getCell returns native element)
      dataTableDriver.getCell(index, 0).$('[data-hook="row-select"]'),
    );
  const getBulkSelectionCheckboxDriver = () =>
    checkboxUniDriverFactory(
      //need to understand how wrap native element with uniDriver
      //(getHeaderCell returns native element)
      dataTableDriver.getHeaderCell(0),
    ).$('[data-hook="table-select"]');

  const isBulkSelectionChecked = async () => {
    const checkboxDriver = getBulkSelectionCheckboxDriver();
    return (
      (await checkboxDriver.isChecked()) &&
      !(await checkboxDriver.isIndeterminate())
    );
  };
  const isBulkSelectionIndeterminate = async () => {
    const checkboxDriver = getBulkSelectionCheckboxDriver();
    return (
      !(await checkboxDriver.isChecked()) &&
      (await checkboxDriver.isIndeterminate())
    );
  };
  const isBulkSelectionUnchecked = async () => {
    const checkboxDriver = getBulkSelectionCheckboxDriver();
    return (
      !(await checkboxDriver.isChecked()) &&
      !(await checkboxDriver.isIndeterminate())
    );
  };

  return {
    ...baseUniDriverFactory(base),
    /** Get driver of row selection checbox by row index */
    getRowCheckboxDriver,
    /** Get driver of row bulk-selection checbox */
    getBulkSelectionCheckboxDriver,
    /** Whether bulk selection checkbox is disabled */
    isBulkSelectionDisabled: getBulkSelectionCheckboxDriver().isDisabled(),
    /** Whether specific row selection checkbox is disabled */
    isRowSelectionDisabled: index => getRowCheckboxDriver(index).isDisabled(),
    /** Click the row selection checkbox */
    clickRowChecbox: index => getRowCheckboxDriver(index).click(),
    /** Click the bulk-selection checkbox */
    clickBulkSelectionCheckbox: () => getBulkSelectionCheckboxDriver().click(),
    /** Is row selected by index */
    isRowSelected: index => getRowCheckboxDriver(index).isChecked(),
    getBulkSelectionState: async () => {
      if (await isBulkSelectionChecked()) {
        return 'ALL';
      }
      if (await isBulkSelectionIndeterminate()) {
        return 'SOME';
      }
      if (await isBulkSelectionUnchecked()) {
        return 'NONE';
      }
    },
    /** Get title-bar (column titles) */
    getTitlebar: async () => {
      const titleBar = base.$('[data-hook="table-title-bar"]');
      return (await titleBar.exists()) ? titleBar : null;
    },
  };
};
