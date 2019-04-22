import { baseUniDriverFactory, ReactBase } from '../../test/utils/unidriver';
import values from '../utils/operators/values';
// const arbitraryEmptyElement = () => document.createElement('div');

export const dataTableUniDriverFactory = base => {
  // When a React component renders null in React 15, a Comment-Element is rendered to the DOM.
  const isDisplayingNothing = async () =>
    !(await base.exists()) ||
    (await reactBase.nodeType()) === Node.COMMENT_NODE;

  /* Since a Comment-Element has no methods like querySelector(),
   * we replace (if needed) it with an arbitrary Element.
   * This allows simple implementation of methods like getRows().
   */
  // const base = () => await isDisplayingNothing() ? arbitraryEmptyElement() : base;
  const reactBase = ReactBase(base);

  const getHeader = () => base.$('thead');
  const hasHeader = () => getHeader().exists();

  const getRows = () => base.$$('tbody tr[data-table-row="dataTableRow"]');
  const getRowsCount = async () =>
    (await isDisplayingNothing()) ? 0 : getRows().count();
  const getRow = rowIndex => getRows().get(rowIndex);
  const getCell = (rowIndex, cellIndex) =>
    getRow(rowIndex)
      .$$('td')
      .get(cellIndex);
  //here
  const getRowDetails = index =>
    base.$(`tbody tr td[data-hook="${index}_details"]`);
  const getHeaderCell = index =>
    getHeader()
      .$$('th')
      .get(index);
  const getSortableTitle = index => base.$(`th [data-hook="${index}_title"]`);
  const getTitleInfoIcon = index =>
    base.$(`th [data-hook="${index}_info_tooltip"]`);
  const getSortableTitleArrowDesc = index =>
    base.$(`th [data-hook="${index}_title"]  [data-hook="sort_arrow_dec"]`);

  return {
    ...baseUniDriverFactory(base),
    getRow,
    getRowsCount,
    /** @deprecated Should be private */
    getRowsWithClassCount: async className => {
      return (await isDisplayingNothing())
        ? 0
        : getRows()
            .filter(elem => elem.hasClass(className))
            .count();
    },
    /** @deprecated Should be private */
    getRowsWithDataHook: async dataHookName =>
      (await isDisplayingNothing())
        ? []
        : base.$$(`[data-hook="${dataHookName}"]`).map(b => b.getNative()), // eslint-disable-line no-restricted-properties

    /** @deprecated Should be private */
    getRowWithDataHook: async dataHookName =>
      (await isDisplayingNothing())
        ? null
        : base.$(`[data-hook="${dataHookName}"]`).getNative(), // eslint-disable-line no-restricted-properties
    /** Returns an array representing the text content of the cells in a given row `index`.  */
    getRowText: async index =>
      (await isDisplayingNothing())
        ? ''
        : getRows()
            .get(index)
            .$$('td')
            .map(td => td.text()),
    /** @deprecated Should be private */
    getRowClasses: async index =>
      values(await ReactBase(getRows().get(index)).getClassList()),
    /**
     * Get header cell element: (columnIndex) => Element
     * @deprecated Should be private
     */
    getHeaderCell: index => getHeaderCell(index).getNative(), // eslint-disable-line no-restricted-properties
    getHeaderCellStyle: index => ReactBase(getHeaderCell(index)).getStyle(),
    getHeaderCellWidth: async index =>
      (await ReactBase(getHeaderCell(index)).getStyle()).width,
    /**
     * Get cell element: (rowIndex, columnIndex) => Element
     * @deprecated Should be private
     */
    getCell: (rowIndex, cellIndex) => getCell(rowIndex, cellIndex).getNative(), // eslint-disable-line no-restricted-properties
    getCellStyle: (rowIndex, colIndex) =>
      ReactBase(getCell(rowIndex, colIndex)).getStyle(),
    getCellWidth: (rowIndex, colIndex) =>
      ReactBase(getCell(rowIndex, colIndex)).width(),
    isRowClickable: index =>
      getRows()
        .get(index)
        .hasClass('clickableDataRow'),
    isRowAnimated: index =>
      getRows()
        .get(index)
        .hasClass('animatedDataRow'),
    getTitles: () =>
      getHeader()
        .$$('th')
        .map(th => th.text()),
    isDisplayingNothing,
    isDisplayingHeaderOnly: async () =>
      (await hasHeader()) && (await getRowsCount()) === 0,
    isDisplayingHeader: () => hasHeader(),
    hasChildWithId: id => base.$(`#${id}`).exists(),
    clickRow: (index, eventData) => ReactBase(getRow(index)).click(eventData),
    mouseEnterRow: (index, eventData) =>
      ReactBase(getRow(index)).mouseEnter(eventData),
    mouseLeaveRow: (index, eventData) =>
      ReactBase(getRow(index)).mouseLeave(eventData),
    hasRowDetails: index => getRowDetails(index).exists(),
    getRowDetailsText: index => getRowDetails(index).text(),
    hasSortableTitle: index => getSortableTitle(index).exists(),
    hasInfoIcon: index => getTitleInfoIcon(index).exists(),
    hasSortDescending: index => getSortableTitleArrowDesc(index).exists(),
    clickSort: (index, eventData) =>
      ReactBase(getHeaderCell(index)).click(eventData),
    /** @deprecated Should be private */
    getRowDetails: index => getRowDetails(index).getNative(), // eslint-disable-line no-restricted-properties
  };
};
