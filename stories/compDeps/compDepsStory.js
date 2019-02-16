import React from 'react';

import { storiesOf } from '@storybook/react';

import Graph from 'react-graph-vis';
import Search from 'wix-style-react/Search';
import DropdownLayout from 'wix-style-react/DropdownLayout';
import Checkbox from 'wix-style-react/Checkbox';
import Table from 'wix-style-react/Table';
import Box from 'wix-style-react/Box';
import Card from 'wix-style-react/Card';
import Page from 'wix-style-react/Page';
import { Cell, Layout } from 'wix-style-react/Layout';
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
            <Search />
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

  renderCompTable() {
    return (
      <Card>
        <Table
          data={Object.values(components)}
          itemsPerPage={20}
          columns={[
            {
              title: 'Name',
              render: row => <span>{row.name}</span>,
              width: '30%',
              minWidth: '100px',
            },
            {
              title: 'Level',
              render: row => <span>{row.depLevel}</span>,
              width: '10%',
            },
            {
              title: 'Deps',
              render: row => <span>{row.totalDependents}</span>,
              width: '10%',
            },
          ]}
          showSelection
          onRowClick={this.handleRowClick}
          onSelectionChanged={this.handleTableSelectionChanged}
          selectedIds={this.state.selectedCompIds}
        >
          <Table.ToolbarContainer>
            {() => this.renderMainToolbar()}
          </Table.ToolbarContainer>
          <Table.Content />
        </Table>
      </Card>
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
        <Page>
          <Page.Header title="Inter-Component Dependencies" />
          <Page.Content>
            <Layout>
              <Cell span={4}>{this.renderCompTable()}</Cell>
              <Cell span={8}>
                <Card>
                  <Card.Header
                    title={this.state.selectedCompIds.join(', ')}
                    suffix={this.renderControls()}
                  />
                  <Card.Content>
                    <div style={{ height: '700px' }}>
                      <Graph
                        key={this.state.selectedCompIds.join(',')}
                        graph={this.filter(this.state.selectedCompIds)}
                        options={this.getOptions()}
                        events={this.getEvents()}
                      />
                    </div>
                  </Card.Content>
                </Card>
              </Cell>
            </Layout>
          </Page.Content>
        </Page>
      </div>
    );
  }
}

storiesOf('Internal', module).add('Components Graph', () => <CompDeps />);
