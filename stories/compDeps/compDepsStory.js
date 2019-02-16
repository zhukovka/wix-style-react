import React from 'react';

import { storiesOf } from '@storybook/react';

import Graph from 'react-graph-vis';
import allCompsGraph from './graph.json';
import components from './components.json';
import AutoComplete from 'wix-style-react/AutoComplete';
import DropdownLayout from 'wix-style-react/DropdownLayout';
import Checkbox from 'wix-style-react/Checkbox';
import Box from 'wix-style-react/Box';
import Card from 'wix-style-react/Card';
import Page from 'wix-style-react/Page';
import { Cell, Layout } from 'wix-style-react/Layout';

class CompDeps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Calendar',
      compName: 'Calendar',
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
    this.setState({ value: option.value, compName: option.value });
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
      comp.deps.forEach(filePath => {
        const d = components[filePath];
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

  filter(name) {
    const comp = components[name];

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
    this.setState({ compName: comp.name, value: comp.name });
  };

  getEvents() {
    return {
      select: function(event) {
        const { nodes, edges } = event;
      },
      doubleClick: this.handleDoubleClick,
    };
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
              <Cell span={2}>
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
                    option.value
                      .toLowerCase()
                      .indexOf(this.state.value.toLowerCase()) !== -1
                  }
                  visible
                  maxHeightPixels={780}
                />
              </Cell>
              <Cell span={10}>
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
                          key={this.state.compName}
                          graph={this.filter(`${this.state.compName}/index.js`)}
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
