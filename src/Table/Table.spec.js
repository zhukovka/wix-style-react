import TableDriverFactory from './Table.driver';
import React from 'react';
import { Table } from './Table';
import { tableTestkitFactory } from '../../testkit';
import { createRendererWithDriver, cleanup } from '../../test/utils/react';

describe('Table', () => {
  const render = createRendererWithDriver(TableDriverFactory);
  const createDriver = jsx => {
    const rendered = render(jsx);
    return rendered.driver;
  };

  const ID_1 = 'aaa',
    ID_2 = 'bbb';
  const defaultProps = {
    id: 'id',
    data: [
      { id: ID_1, a: 'value 1', b: 'value 2' },
      { id: ID_2, a: 'value 3', b: 'value 4' },
    ],
    columns: [
      { title: 'Row Num', render: (row, rowNum) => rowNum },
      { title: 'A', render: row => row.a },
      { title: 'B', render: row => row.b },
    ],
    rowClass: 'class-name',
    showSelection: true,
    children: <Table.Content />,
  };
  const noneSelected = () => [];
  const firstSelected = () => [ID_1];
  const secondSelected = () => [ID_2];
  const allSelected = () => [ID_1, ID_2];

  it('should pass id prop to child', async () => {
    const driver = createDriver(<Table {...defaultProps} />);
    expect(await driver.hasChildWithId(defaultProps.id)).toBeTruthy();
  });

  describe('showSelection prop', () => {
    it('should display selection column', async () => {
      const driver = createDriver(
        <Table {...defaultProps} selectedIds={firstSelected()} />,
      );
      expect(await driver.getRowCheckboxDriver(1).exists()).toBeTruthy();
      expect(
        await driver.getBulkSelectionCheckboxDriver().exists(),
      ).toBeTruthy();
    });

    it('should not display selection column', async () => {
      const driver = createDriver(
        <Table {...defaultProps} showSelection={false} />,
      );
      expect(await driver.getRowCheckboxDriver(1).exists()).toBeFalsy();
      expect(
        await driver.getBulkSelectionCheckboxDriver().exists(),
      ).toBeFalsy();
    });
  });

  describe('selectedIds prop', () => {
    it('should select rows according to selectedIds prop given string ids', async () => {
      const driver = createDriver(
        <Table {...defaultProps} selectedIds={firstSelected()} />,
      );
      expect(await driver.isRowSelected(0)).toBeTruthy();
      expect(await driver.isRowSelected(1)).toBeFalsy();
    });

    it('should select rows according to selectedIds prop given numeric ids', async () => {
      const driver = createDriver(
        <Table
          {...defaultProps}
          data={[
            { id: 1111, a: 'value 1', b: 'value 2' },
            { id: 2222, a: 'value 3', b: 'value 4' },
          ]}
          selectedIds={[1111]}
        />,
      );
      expect(await driver.isRowSelected(0)).toBeTruthy();
      expect(await driver.isRowSelected(1)).toBeFalsy();
    });

    it('should select rows according to selectedIds prop given row index as ids', async () => {
      const driver = createDriver(
        <Table
          {...defaultProps}
          data={[
            { a: 'value 1', b: 'value 2' },
            { a: 'value 3', b: 'value 4' },
          ]}
          selectedIds={[0]}
        />,
      );
      expect(await driver.isRowSelected(0)).toBeTruthy();
      expect(await driver.isRowSelected(1)).toBeFalsy();
    });

    it('should update selection if selection prop has change', async () => {
      const selectedIds = [];
      const { driver, rerender } = render(
        <Table {...defaultProps} selectedIds={selectedIds} />,
      );
      expect(await driver.isRowSelected(0)).toBeFalsy();
      rerender(<Table {...defaultProps} selectedIds={firstSelected()} />);
      expect(await driver.isRowSelected(0)).toBeTruthy();
    });
  });

  describe('setSelectedIds', () => {
    it('should select rows when setSelectedIds is called', async () => {
      let tableInst;
      const { driver } = render(
        <Table
          {...defaultProps}
          selectedIds={noneSelected()}
          ref={c => (tableInst = c)}
        />,
      );
      expect(await driver.isRowSelected(0)).toBeFalsy();
      expect(await driver.isRowSelected(1)).toBeFalsy();
      tableInst.setSelectedIds(allSelected());
      expect(await driver.isRowSelected(0)).toBeTruthy();
      expect(await driver.isRowSelected(1)).toBeTruthy();
    });
  });

  describe('row selection', () => {
    it('should select row when checkbox clicked given row not selected', async () => {
      const driver = createDriver(
        <Table {...defaultProps} selectedIds={firstSelected()} />,
      );
      await driver.clickRowChecbox(1);
      expect(await driver.isRowSelected(1)).toBeTruthy();
    });

    it('should unselect row when checkbox clicked given row selected', async () => {
      const driver = createDriver(
        <Table {...defaultProps} selectedIds={allSelected()} />,
      );
      await driver.clickRowChecbox(1);
      expect(await driver.isRowSelected(1)).toBeFalsy();
    });

    it(`should disable bulk selection when passed 'selectionDisabled' prop`, async () => {
      const driver = createDriver(
        <Table {...defaultProps} selectionDisabled />,
      );
      expect(await driver.isBulkSelectionDisabled()).toBe(true);
    });
    it(`should disable row selection when passed 'selectionDisabled' prop`, async () => {
      const driver = createDriver(
        <Table {...defaultProps} selectionDisabled />,
      );
      expect(await driver.isRowSelectionDisabled(0)).toBe(true);
    });
  });

  describe('re-render', () => {
    it('should re-render on data update', async () => {
      const props = {
        id: 'id',
        columns: [
          { title: 'Row Num', render: (row, rowNum) => rowNum },
          { title: 'A', render: row => row.a },
          { title: 'B', render: row => row.b },
        ],
        rowClass: 'class-name',
      };
      const data = [
        { a: 'value 1', b: 'value 2' },
        { a: 'value 3', b: 'value 4' },
      ];
      const { driver, rerender } = render(<Table {...props} data={data} />);
      const newValue = 'value 1 changed';
      const COLUMN_A_INDEX = 1;
      const ROW_INDEX = 0;
      data[ROW_INDEX].a = newValue;
      rerender(<Table {...props} data={data} />);
      expect(await driver.getCell(ROW_INDEX, COLUMN_A_INDEX).textContent).toBe(
        newValue,
      );
    });

    it('should keep selection when re-rendered given selectedIds not provided (Uncontrolled)', async () => {
      const { driver, rerender } = render(<Table {...defaultProps} />);
      expect(await driver.isRowSelected(1)).toBeFalsy();
      await driver.clickRowChecbox(1);
      expect(await driver.isRowSelected(1)).toBeTruthy();
      rerender(<Table {...defaultProps} />);
      expect(await driver.isRowSelected(1)).toBeTruthy();
    });
  });

  describe('BulkSelection', () => {
    describe('initial render', () => {
      it('should display bulk-selection as checked when all rows are selected', async () => {
        const selectedIds = allSelected();
        const driver = createDriver(
          <Table {...defaultProps} selectedIds={selectedIds} />,
        );
        expect((await driver.getBulkSelectionState()) === 'ALL').toBeTruthy();
        expect((await driver.getBulkSelectionState()) === 'NONE').toBeFalsy();
        expect((await driver.getBulkSelectionState()) === 'SOME').toBeFalsy();
      });

      it('should display bulk-selection as unchecked when no rows are selected', async () => {
        const selectedIds = noneSelected();
        const driver = createDriver(
          <Table {...defaultProps} selectedIds={selectedIds} />,
        );
        expect((await driver.getBulkSelectionState()) === 'NONE').toBeTruthy();
        expect((await driver.getBulkSelectionState()) === 'ALL').toBeFalsy();
      });

      it('should display bulk-selection as partial when some rows are selected', async () => {
        const selectedIds = secondSelected();
        const driver = createDriver(
          <Table {...defaultProps} selectedIds={selectedIds} />,
        );
        expect((await driver.getBulkSelectionState()) === 'SOME').toBeTruthy();
      });

      it('should display bulk-selection as checked when data and selectedIds change', async () => {
        const { driver, rerender } = render(
          <Table
            {...defaultProps}
            data={[{ id: ID_1, a: 'value 1', b: 'value 2' }]}
            selectedIds={[ID_1]}
          />,
        );
        expect((await driver.getBulkSelectionState()) === 'ALL').toBeTruthy();
        rerender(
          <Table
            {...defaultProps}
            data={[
              { id: ID_1, a: 'value 1', b: 'value 2' },
              { id: ID_2, a: 'value 3', b: 'value 4' },
            ]}
            selectedIds={[ID_1, ID_2]}
          />,
        );
        expect((await driver.getBulkSelectionState()) === 'ALL').toBeTruthy();
      });
    });

    describe('Update row selection', () => {
      it('should select all rows when bulk-selection checkbox clicked given no checkboxes are checked', async () => {
        const selectedIds = noneSelected();
        const driver = createDriver(
          <Table {...defaultProps} selectedIds={selectedIds} />,
        );
        await driver.clickBulkSelectionCheckbox();
        expect(await driver.isRowSelected(0)).toBeTruthy();
        expect(await driver.isRowSelected(1)).toBeTruthy();
      });

      it('should select all rows when bulk-selection checkbox clicked given some checkboxes are checked', async () => {
        const selectedIds = secondSelected();
        const driver = createDriver(
          <Table {...defaultProps} selectedIds={selectedIds} />,
        );
        await driver.clickBulkSelectionCheckbox();
        expect(await driver.isRowSelected(0)).toBeTruthy();
        expect(await driver.isRowSelected(1)).toBeTruthy();
      });

      it('should unselect all rows when bulk-selection checkbox clicked given all checkboxes are checked', async () => {
        const selectedIds = allSelected();
        const driver = createDriver(
          <Table {...defaultProps} selectedIds={selectedIds} />,
        );
        await driver.clickBulkSelectionCheckbox();
        expect(await driver.isRowSelected(0)).toBeFalsy();
        expect(await driver.isRowSelected(1)).toBeFalsy();
      });
    });

    describe('onSelectionChanged', () => {
      it('should call onSelectionChanged when bulk-selection checkbox clicked given non selected', async () => {
        const onSelectionChanged = jest.fn();
        const selectedIds = noneSelected();
        const driver = createDriver(
          <Table
            {...defaultProps}
            selectedIds={selectedIds}
            onSelectionChanged={onSelectionChanged}
          />,
        );
        await driver.clickBulkSelectionCheckbox();
        expect(onSelectionChanged).toHaveBeenCalledWith(allSelected(), {
          type: 'ALL',
        });
      });

      it('should call onSelectionChanged when bulk-selection checkbox clicked given all selected', async () => {
        const onSelectionChanged = jest.fn();
        const selectedIds = allSelected();
        const driver = createDriver(
          <Table
            {...defaultProps}
            selectedIds={selectedIds}
            onSelectionChanged={onSelectionChanged}
          />,
        );
        await driver.clickBulkSelectionCheckbox();
        expect(onSelectionChanged).toHaveBeenCalledWith(noneSelected(), {
          type: 'NONE',
        });
      });

      it('should call onSelectionChanged when row selected given no checkboxes are checked', async () => {
        const onSelectionChanged = jest.fn();
        const selectedIds = firstSelected();
        const driver = createDriver(
          <Table
            {...defaultProps}
            selectedIds={selectedIds}
            onSelectionChanged={onSelectionChanged}
          />,
        );
        await driver.clickRowChecbox(1);
        expect(onSelectionChanged.mock.calls).toHaveLength(1);
        expect(onSelectionChanged).toHaveBeenCalledWith(allSelected(), {
          type: 'SINGLE_TOGGLE',
          id: ID_2,
          value: true,
        });
      });
    });

    describe('Update BulkSelection', () => {
      it('should check bulk-selection checkbox when all rows change to check', async () => {
        const selectedIds = secondSelected();
        const driver = createDriver(
          <Table {...defaultProps} selectedIds={selectedIds} />,
        );
        await driver.clickRowChecbox(0);
        expect((await driver.getBulkSelectionState()) === 'ALL').toBeTruthy();
      });

      it('should uncheck bulk-selection checkbox when all rows change to not-selected', async () => {
        const selectedIds = secondSelected();
        const driver = createDriver(
          <Table {...defaultProps} selectedIds={selectedIds} />,
        );
        await driver.clickRowChecbox(1);
        expect((await driver.getBulkSelectionState()) === 'NONE').toBeTruthy();
      });

      it('should show partial in bulk-selection checkbox when row unselected given all rows selected', async () => {
        const selectedIds = allSelected();
        const driver = createDriver(
          <Table {...defaultProps} selectedIds={selectedIds} />,
        );
        await driver.clickRowChecbox(1);
        expect((await driver.getBulkSelectionState()) === 'SOME').toBeTruthy();
      });

      it('should show partial in bulk-selection checkbox when row selected given all rows not selected', async () => {
        const selectedIds = noneSelected();
        const driver = createDriver(
          <Table {...defaultProps} selectedIds={selectedIds} />,
        );
        await driver.clickRowChecbox(1);
        expect((await driver.getBulkSelectionState()) === 'SOME').toBeTruthy();
      });
    });
  });

  describe('Compound components', () => {
    it('should NOT have any compound components', async () => {
      const driver = createDriver(
        <Table {...defaultProps} showSelection selectedIds={noneSelected()} />,
      );
      expect(!!(await driver.getTitlebar())).toBeFalsy();
    });

    it('should have Table.ToolbarContainer with SelectionContext', async () => {
      let toggle;
      const driver = createDriver(
        <Table {...defaultProps} showSelection selectedIds={allSelected()}>
          <Table.ToolbarContainer>
            {({ selectedCount, toggleSelectionById }) => {
              toggle = toggleSelectionById;
              return <div>{`${selectedCount} Selected`}</div>;
            }}
          </Table.ToolbarContainer>
          <Table.Content />
        </Table>,
      );
      expect(driver.element.innerHTML).toMatch('2 Selected');
      toggle(ID_1);
      expect(driver.element.innerHTML).toMatch('1 Selected');
    });

    it('should have Table.Titlebar', async () => {
      const driver = createDriver(
        <Table {...defaultProps} showSelection selectedIds={allSelected()}>
          <div>
            <Table.Titlebar />
          </div>
          <div>
            <Table.Content titleBarVisible={false} />
          </div>
        </Table>,
      );
      expect(!!(await driver.getTitlebar())).toBeTruthy();
    });
  });

  describe('withWrapper', () => {
    afterEach(() => cleanup());

    it('should have working test drivers when without wrapper', async () => {
      const { container } = render(
        <Table
          {...defaultProps}
          showSelection
          selectedIds={allSelected()}
          withWrapper={false}
        >
          <div>
            <div>
              <Table.Titlebar dataHook="test-table-titlebar" />
            </div>
            <div>
              <Table.Content
                titleBarVisible={false}
                dataHook="test-table-content"
              />
            </div>
          </div>
        </Table>,
      );

      const titlebarDriver = tableTestkitFactory({
        wrapper: container,
        dataHook: 'test-table-titlebar',
      });

      const bulkSelectionCheckboxDriver = titlebarDriver.getBulkSelectionCheckboxDriver();
      expect(bulkSelectionCheckboxDriver.isChecked()).toBeTruthy();

      const contentDriver = tableTestkitFactory({
        wrapper: container,
        dataHook: 'test-table-content',
      });

      expect(!!contentDriver.element).toBe(true);
      expect(contentDriver.getRowsCount()).toBe(defaultProps.data.length);
      expect(contentDriver.isRowSelected(0)).toBeTruthy();
    });
  });
});
