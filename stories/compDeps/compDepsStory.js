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
      compName: ['Calendar'],
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
    this.setState({ value: option.value, compName: [option.value] });
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

  filter(names) {
    const comp = components[names[0]];

    const graph = {
      nodes: [],
      edges: [],
    };
    if (comp) {
      this.addToGraph({
        comp,
        graph,
        includeDependencies: this.state.showDependencies,
        includeDependents: this.state.showDependents,
        level: 0,
      });
    }

    const compNode = graph.nodes.find(n => n.id === comp.id);

    if (compNode) {
      // compNode.chosen = true;
      compNode.color = '#C1E4FE';
    }
    return graph;
  }

  handleDoubleClick = event => {
    const { nodes, edges } = event;
    const comp = Object.values(components).find(c => c.id === nodes[0]);
    this.setState({ compName: [comp.name], value: comp.name });
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
    this.setState({ compName: [row.id] });
  };

  renderCompList() {
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
              minWidth: '150px',
            },
          ]}
          showSelection
          onRowClick={this.handleRowClick}
        >
          <Table.ToolbarContainer>
            {() => this.renderMainToolbar()}
          </Table.ToolbarContainer>
          <Table.Content />
        </Table>
      </Card>
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
              <Cell span={3}>{this.renderCompList()}</Cell>
              <Cell span={9}>
                <Layout>
                  <Cell>
                    <Layout>
                      <Cell span={6} />
                      <Cell span={6}>
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
                      </Cell>
                    </Layout>
                  </Cell>
                  <Cell>
                    <Card stretchVertically>
                      <div style={{ height: '700px' }}>
                        <Graph
                          key={this.state.compName.join(',')}
                          graph={this.filter(this.state.compName)}
                          options={this.getOptions()}
                          events={this.getEvents()}
                        />
                      </div>
                    </Card>
                  </Cell>
                </Layout>
              </Cell>
            </Layout>
          </Page.Content>
        </Page>
      </div>
    );
  }
}

storiesOf('Internal', module).add('Components Graph', () => <CompDeps />);
