# Data Table component

> A table component for displaying data

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| id | string | - | - | An id to pass to the table |
| data | array | [] | - | The data to display |
| columns | array | [] | - | Configuration of the table's columns. each column needs a title and a render method |
| showHeaderWhenEmpty | bool | false | - | Should the table show the header when data is empty |
| rowDataHook | string | - | - | A data-hook to apply to all table body rows |
| rowClass | string | - | - | A class to apply to all table body rows |
| onRowClick | func | - | - | A callback method to call on row click (will be called with 1 parameter - the clicked row's data) |
| infiniteScroll | bool | false | - | If true, table will not render all data to begin with, but will gradually render the data as the user scrolls |
| itemsPerPage | number | 20 | - | If infiniteScroll is on, this prop will determine how many rows will be rendered on each load |
