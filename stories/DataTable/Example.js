import React from 'react';
import DataTable from 'wix-style-react/DataTable';

const style = {
  width: '50%',
};

const baseData = [
    {firstName: 'Meghan', lastName: 'Bishop'},
    {firstName: 'Sara', lastName: 'Porter'},
    {firstName: 'Deborah', lastName: 'Rhodes'},
    {firstName: 'Walter', lastName: 'Jenning'}
];

const generateData = () => {
  let data = [];
  for (let i = 0; i < 100; i++) {
    data = data.concat(baseData);
  }
  return data;
};

class DataTableExample extends React.Component {
  render() {
    return (
      <div style={style}>
        <DataTable
          data={generateData()}
          onRowClick={(row, rowNum) => {
            /*eslint-disable no-alert*/
            window.alert(`You clicked "${row.firstName} ${row.lastName}", row number ${rowNum + 1}`);
            /*eslint-enable no-alert*/
          }}
          infiniteScroll
          itemsPerPage={20}
          columns={[
              {title: 'Row Number', render: (row, rowNum) => rowNum + 1},
              {title: 'First Name', render: row => <span>{row.firstName}</span>},
              {title: 'Last Name', render: row => <span>{row.lastName}</span>}
          ]}
          />
      </div>
    );
  }
}

export default DataTableExample;
