import React from 'react';

import { storiesOf } from '@storybook/react';

import Graph from 'react-graph-vis';
import Input from 'wix-style-react/Input';
import TextButton from 'wix-style-react/TextButton';
import DropdownLayout from 'wix-style-react/DropdownLayout';
import Checkbox from 'wix-style-react/Checkbox';
import Table from 'wix-style-react/Table';
import Box from 'wix-style-react/Box';
import Card from 'wix-style-react/Card';
import Page from 'wix-style-react/Page';
import { Cell, Layout } from 'wix-style-react/Layout';
import { Container, Row, Col } from 'wix-style-react/Grid';
import {
  TableToolbar,
  ItemGroup,
  Item,
  Label,
  Title,
} from 'wix-style-react/TableToolbar';

import components from './components.json';

class CompDeps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Calendar',
      selectedCompIds: ['Calendar', 'AddItem'],
      hierarchical: true,
      showDependencies: true,
      showDependents: true,
      searchTerm: '',
      sort: [],
      data: Object.values(components).slice(0),
    };
    this.onSelect = this.onSelect.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  onSelect(option) {
    this.setState({ value: option.value, selectedCompIds: [option.value] });
  }

  getOptions() {
    return {
      layout: {
        hierarchical: this.state.hierarchical,
      },
      edges: {
        color: '#000000',
      },
      physics: { enabled: false },
    };
  }

  addToGraph({ comp, graph, includeDependencies, includeDependents, level }) {
    if (graph.nodes.find(n => n.id === comp.id) === undefined) {
      graph.nodes.push({ id: comp.id, label: comp.name, level });
    }

    if (this.state.showDependencies && includeDependencies) {
      const nextLevel = level + 1;
      comp.deps.forEach(id => {
        const d = components[id];
        graph.edges.push({ from: comp.id, to: d.id });
        if (graph.nodes.find(n => n.id === d.id) === undefined) {
          graph.nodes.push({ id: d.id, label: d.name, level: nextLevel });
          this.addToGraph({
            comp: d,
            graph,
            includeDependencies,
            level: nextLevel,
          });
        }
      });
    }

    if (this.state.showDependents && includeDependents) {
      const nextLevel = level - 1;
      comp.dependents.forEach(filePath => {
        const d = components[filePath];
        graph.edges.push({ from: d.id, to: comp.id });
        if (graph.nodes.find(n => n.id === d.id) === undefined) {
          graph.nodes.push({ id: d.id, label: d.name, level: nextLevel });
          this.addToGraph({
            comp: d,
            graph,
            includeDependents,
            level: nextLevel,
          });
        }
      });
    }

    return graph;
  }

  filter(compIds) {
    const graph = {
      nodes: [],
      edges: [],
    };

    compIds.forEach(compId => {
      this.addToGraph({
        comp: components[compId],
        graph,
        includeDependencies: this.state.showDependencies,
        includeDependents: this.state.showDependents,
        level: 0,
      });
      const compNode = graph.nodes.find(n => n.id === compId);

      if (compNode) {
        // compNode.chosen = true;
        compNode.color = '#C1E4FE';
      }
    });

    return graph;
  }

  handleDoubleClick = event => {
    const { nodes, edges } = event;
    const comp = Object.values(components).find(c => c.id === nodes[0]);
    this.setState({ selectedCompIds: [comp.name], value: comp.name });
  };

  getEvents() {
    return {
      select: function(event) {
        const { nodes, edges } = event;
      },
      doubleClick: this.handleDoubleClick,
    };
  }

  renderDropDown() {
    return (
      <DropdownLayout
        options={Object.values(components).map(c => ({
          id: c.id,
          value: c.name,
        }))}
        onSelect={this.onSelect}
        onChange={this.onChange}
        value={this.state.value}
        placeholder={'Enter Component Name'}
        predicate={option =>
          option.value.toLowerCase().indexOf(this.state.value.toLowerCase()) !==
          -1
        }
        visible
        maxHeightPixels={780}
      />
    );
  }

  handleSearchOnChange = e => {
    const searchTerm = e.target.value;

    this.setState({ searchTerm });
  };

  renderMainToolbar() {
    // const collectionOptions = [
    //   { id: 0, value: 'All Products' },
    //   { id: 1, value: 'Towels' },
    //   { id: 2, value: 'Slippers' },
    // ];

    // const filterOptions = [
    //   { id: 0, value: 'All' },
    //   { id: 1, value: 'Red' },
    //   { id: 2, value: 'Cyan' },
    // ];

    return (
      <TableToolbar>
        <ItemGroup position="end">
          <Item>
            <Input
              onChange={this.handleSearchOnChange}
              value={this.state.searchTerm}
              placeholder="Component Name"
            />
          </Item>
        </ItemGroup>
      </TableToolbar>
    );
  }

  handleRowClick = row => {
    this.setState({ selectedCompIds: [row.id] });
  };

  handleTableSelectionChanged = ids => {
    this.setState({ selectedCompIds: ids });
  };

  handleSortClick(colNum) {
    const desc = !this.state.sort[colNum];
    const sort = Object.assign({}, this.state.sort, { [colNum]: desc });
    const filelds = {
      1: 'name',
      2: 'depLevel',
      3: 'totalDependents',
    };
    const sortedData = this.sortDataByField(filelds[colNum], desc);

    this.setState({ sort, data: sortedData });
  }

  sortDataByField(field, desc) {
    const newData = this.state.data.slice(0);
    const raw = [{ a: 4 }, { a: 3 }, { a: 2 }, { a: 1 }];
    const sorted = raw.sort((a, b) => a.a < b.a);

    function strcmp(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }
    return newData.sort((a, b) => {
      const v1 = a[field];
      const v2 = b[field];
      return desc
        ? typeof v1 === 'number'
          ? v1 - v2
          : strcmp(v2, v1)
        : typeof v1 === 'number'
        ? v2 - v1
        : strcmp(v1, v2);
    }); // eslint-disable-line
  }

  renderCompTable() {
    const data = this.state.data.filter(c =>
      c.name.toLowerCase().includes(this.state.searchTerm),
    );

    return (
      <Table
        data={data}
        itemsPerPage={20}
        onSortClick={(col, colNum) => this.handleSortClick(colNum)}
        columns={[
          {
            title: 'Name',
            render: row => <span>{row.name}</span>,
            width: '30%',
            minWidth: '100px',
            sortable: true,
            sortDescending: !!this.state.sort[1],
          },
          {
            title: 'Level',
            render: row => <span>{row.depLevel}</span>,
            width: '10%',
            sortable: true,
            sortDescending: !!this.state.sort[2],
          },
          {
            title: 'Deps',
            render: row => <span>{row.totalDependents}</span>,
            width: '10%',
            sortable: true,
            sortDescending: !!this.state.sort[3],
          },
        ]}
        showSelection
        onRowClick={this.handleRowClick}
        onSelectionChanged={this.handleTableSelectionChanged}
        selectedIds={this.state.selectedCompIds}
      >
        <Page.Sticky>
          <Card>
            <Table.ToolbarContainer>
              {() => this.renderMainToolbar()}
            </Table.ToolbarContainer>
            <Table.Titlebar />
          </Card>
        </Page.Sticky>
        <Card>
          <Table.Content titleBarVisible={false} />
        </Card>
      </Table>
    );
  }

  renderControls() {
    return (
      <div style={{ width: '350px' }}>
        <Box align="space-between" verticalAlign="middle">
          <Checkbox
            onChange={e =>
              this.setState({
                showDependents: e.target.checked,
              })
            }
            checked={this.state.showDependents}
          >
            Show Dependents
          </Checkbox>
          <Checkbox
            onChange={e =>
              this.setState({
                showDependencies: e.target.checked,
              })
            }
            checked={this.state.showDependencies}
          >
            Show Dependencies
          </Checkbox>
        </Box>
      </div>
    );
  }

  render() {
    return (
      <div
        style={{
          height: 'calc(100vh - 16px)',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Page upgrade>
          <Page.Header title="Inter-Component Dependencies" />
          <Page.Content>
            <Container stretchVertically>
              <Row stretchViewsVertically>
                <Col span={4}>{this.renderCompTable()}</Col>
                <Col span={8}>
                  <Page.Sticky>
                    <Card stretchVertically>
                      <Card.Header
                        title={this.state.selectedCompIds.join(', ')}
                        suffix={this.renderControls()}
                      />
                      <Card.Content>
                        <div style={{ height: '660px' }}>
                          <Graph
                            key={this.state.selectedCompIds.join(',')}
                            graph={this.filter(this.state.selectedCompIds)}
                            options={this.getOptions()}
                            events={this.getEvents()}
                          />
                        </div>
                      </Card.Content>
                    </Card>
                  </Page.Sticky>
                </Col>
              </Row>
            </Container>
          </Page.Content>
        </Page>
      </div>
    );
  }
}

storiesOf('Internal', module).add('Components Graph', () => <CompDeps />);
