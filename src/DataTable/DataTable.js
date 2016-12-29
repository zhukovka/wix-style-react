import React, {PropTypes} from 'react';
import s from './DataTable.scss';
import classNames from 'classnames';
import _ from 'lodash';
import InfiniteScroll from 'react-infinite-scroller';

class DataTable extends React.Component {
  constructor(props) {
    super(props);

    if (props.infiniteScroll) {
      this.state = this.createInitialScrollingState(props);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.infiniteScroll &&
        nextProps.data !== this.props.data) {
      this.setState(this.createInitialScrollingState(nextProps));
    }
  }

  createInitialScrollingState(props) {
    return {currentPage: 0, lastPage: this.calcLastPage(props)};
  }

  render() {
    const {data, showHeaderWhenEmpty, infiniteScroll, itemsPerPage} = this.props;

    if (!data.length && !showHeaderWhenEmpty) {
      return null;
    }

    const rowsToRender = infiniteScroll ?
        data.slice(0, ((this.state.currentPage + 1) * itemsPerPage)) :
        data;

    const table = this.renderTable(rowsToRender);

    if (infiniteScroll) {
      return this.wrapWithInfiniteScroll(table);
    }

    return table;
  }

  wrapWithInfiniteScroll = table => {
    return (<InfiniteScroll
      pageStart={0}
      loadMore={this.loadMore}
      hasMore={this.state.currentPage < this.state.lastPage}
      loader={<div className="loader">Loading ...</div>}
      >
      {table}
    </InfiniteScroll>);
  }

  renderTable = rowsToRender => (
    <div>
      <table id={this.props.id} className={s.table}>
        <thead>
          <tr>
            {this.props.columns.map((column, i) => <th key={i}>{column.title}</th>)}
          </tr>
        </thead>
        {this.renderBody(rowsToRender)}
      </table>
    </div>);

  renderBody = rows => (
    <tbody>
      {rows.map(this.renderRow)}
    </tbody>
  );

  renderRow = (rowData, rowNum) => {
    return (
      <tr key={rowNum} className={this.props.rowClass} data-hook={this.props.rowDataHook} onClick={() => this.props.onRowClick(rowData, rowNum)}>
        {this.props.columns.map((column, colNum) => this.renderCell(rowData, column, rowNum, colNum))}
      </tr>);
  }

  renderCell = (rowData, column, rowNum, colNum) => {
    const classes = classNames({[s.important]: column.important});
    const style = {width: column.width};
    return <td style={style} className={classes} key={colNum}>{column.render && column.render(rowData, rowNum)}</td>;
  };

  calcLastPage = ({data, itemsPerPage}) => Math.ceil(data.length / itemsPerPage) - 1

  loadMore = () => {
    this.setState({currentPage: this.state.currentPage + 1});
  }
}

DataTable.defaultProps = {
  data: [],
  columns: [],
  showHeaderWhenEmpty: false,
  infiniteScroll: false,
  itemsPerPage: 20
};

DataTable.propTypes = {
  id: PropTypes.string,
  data: PropTypes.array,
  columns: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired
  })),
  showHeaderWhenEmpty: PropTypes.bool,
  rowDataHook: PropTypes.string,
  rowClass: PropTypes.string,
  onRowClick: PropTypes.func,
  infiniteScroll: PropTypes.bool,
  itemsPerPage: PropTypes.number
};

DataTable.displayName = 'DataTable';

export default DataTable;
