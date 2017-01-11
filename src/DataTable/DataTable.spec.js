import _ from 'lodash/fp';
import {componentFactory, tableDriverFactory} from './testkit/DataTable';

describe('Table', () => {
  const createDriver = _.compose(tableDriverFactory, componentFactory);

  const defaultProps = {
    id: 'id',
    data: [{a: 'value 1', b: 'value 2'}, {a: 'value 3', b: 'value 4'}],
    columns: [
        {title: 'Row Num', render: (row, rowNum) => rowNum},
        {title: 'A', render: row => row.a},
        {title: 'B', render: row => row.b}
    ],
    rowClass: 'class-name'
  };

  it('should pass id prop to child', () => {
    const driver = createDriver(defaultProps);
    expect(driver.hasChildWithId(defaultProps.id)).toBeTruthy();
  });

  it('should display nothing when data is empty', () => {
    const props = {
      ...defaultProps,
      data: []
    };

    const driver = createDriver(props);
    expect(driver.isDisplayingNothing()).toBeTruthy();
  });

  it('should display header only when data is empty and showHeaderWhenEmpty is true', () => {
    const props = {
      ...defaultProps,
      data: [],
      showHeaderWhenEmpty: true
    };

    const driver = createDriver(props);
    expect(driver.isDisplayingHeaderOnly()).toBeTruthy();
  });

  it('should render column titles', () => {
    const driver = createDriver(defaultProps);
    expect(driver.getTitles()).toEqual(defaultProps.columns.map(col => col.title));
  });

  it('should display correct amount of rows', () => {
    const driver = createDriver(defaultProps);
    expect(driver.getRowsCount()).toBe(defaultProps.data.length);
  });

  it('should render rows', () => {
    const driver = createDriver(defaultProps);
    expect(driver.getRowText(0)).toEqual(['0', 'value 1', 'value 2']);
    expect(driver.getRowText(1)).toEqual(['1', 'value 3', 'value 4']);
  });

  it('should assign class to rows', () => {
    const driver = createDriver(defaultProps);
    expect(driver.getRowsWithClassCount(defaultProps.rowClass)).toBe(defaultProps.data.length);
  });

  it('should call on row click with row data and index', () => {
    const props = {
      ...defaultProps,
      onRowClick: jest.fn()
    };

    const driver = createDriver(props);

    driver.clickRow(0);

    expect(driver.isRowClickable(0)).toBe(true);
    expect(props.onRowClick).toBeCalledWith(props.data[0], 0);

    driver.clickRow(1);

    expect(driver.isRowClickable(1)).toBe(true);
    expect(props.onRowClick).toHaveBeenLastCalledWith(props.data[1], 1);
  });

  it('should not have a row on click handler by default', () => {
    const props = {
      ...defaultProps
    };

    const driver = createDriver(props);

    driver.clickRow(0); // should do nothing
    expect(driver.isRowClickable(0)).toBe(false);
  });

  it('should not trigger click handler if default was prevented', () => {
    const props = {
      ...defaultProps,
      onRowClick: jest.fn()
    };

    const driver = createDriver(props);
    driver.clickRow(0, {isDefaultPrevented: () => true});

    expect(driver.isRowClickable(0)).toBe(true);
    expect(props.onRowClick).not.toBeCalled();
  });
});
