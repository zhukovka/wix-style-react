import React from 'react';

import { storiesOf } from '@storybook/react';

import Graph from 'react-graph-vis';
import allCompsGraph from './graph.json';
import components from './components.json';
import AutoComplete from 'wix-style-react/AutoComplete';
import Checkbox from 'wix-style-react/Checkbox';
import Card from 'wix-style-react/Card';
import Page from 'wix-style-react/Page';
import { Cell, Layout } from 'wix-style-react/Layout';

const events = {
  select: function(event) {
    const { nodes, edges } = event;
  },
};

class CompDeps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      compName: 'Calendar',
      hierarchical: true,
      showDependencies: false,
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

  addToGraph({ comp, graph }) {
    if (graph.nodes.find(n => n.id === comp.id) === undefined) {
      graph.nodes.push({ id: comp.id, label: comp.name });
    }

    if (this.state.showDependencies) {
      comp.deps.forEach(filePath => {
        const d = components[filePath];
        graph.edges.push({ from: comp.id, to: d.id });
        if (graph.nodes.find(n => n.id === d.id) === undefined) {
          graph.nodes.push({ id: d.id, label: d.name });
          this.addToGraph({ comp: d, graph });
        }
      });
    }

    if (this.state.showDependents) {
      comp.dependents.forEach(filePath => {
        const d = components[filePath];
        graph.edges.push({ from: d.id, to: comp.id });
        if (graph.nodes.find(n => n.id === d.id) === undefined) {
          graph.nodes.push({ id: d.id, label: d.name });
          this.addToGraph({ comp: d, graph });
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
      return this.addToGraph({ comp, graph });
    } else {
      return graph;
    }
  }

  render() {
    return (
      <Page>
        <Page.Header title="Inter-Component Dependencies" />
        <Page.Content>
          <Layout>
            <Cell>
              <AutoComplete
                options={Object.values(components).map(c => ({
                  id: c.id,
                  value: c.name,
                }))}
                onSelect={this.onSelect}
                onChange={this.onChange}
                value={this.setState.value}
                placeholder={'Enter Component Name'}
                predicate={option =>
                  option.value
                    .toLowerCase()
                    .indexOf(this.state.value.toLowerCase()) !== -1
                }
              />
            </Cell>
            <Cell>
              <Checkbox
                onChange={e =>
                  this.setState({ hierarchical: e.target.checked })
                }
                checked={this.state.hierarchical}
              >
                hierarchical
              </Checkbox>
              <Checkbox
                onChange={e =>
                  this.setState({ showDependents: e.target.checked })
                }
                checked={this.state.showDependents}
              >
                Show Dependents
              </Checkbox>
              <Checkbox
                onChange={e =>
                  this.setState({ showDependencies: e.target.checked })
                }
                checked={this.state.showDependencies}
              >
                Show Dependencies
              </Checkbox>
            </Cell>
            <Cell>
              <div style={{ height: '100vh', width: '100%' }}>
                <Card stretchVertically>
                  <Graph
                    graph={this.filter(`${this.state.compName}/index.js`)}
                    options={this.getOptions()}
                    events={events}
                  />
                </Card>
              </div>
            </Cell>
          </Layout>
        </Page.Content>
      </Page>
    );
  }
}

storiesOf('Internal', module).add('Components Graph', () => <CompDeps />);
