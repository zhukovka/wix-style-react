/* eslint-disable no-console */
const madge = require('madge');

const fs = require('fs');

const entry = '/Users/erezm/Projects/wix-style-react-2/src/index.js';

async function traverse() {
  const m = await madge(entry);
  const depsObj = m.obj();

  const comps = {};

  depsObj['index.js'].forEach(
    (f, index) =>
      (comps[f] = {
        filePath: f,
        deps: [],
        dependents: [],
        name: f.replace('/index.js', ''),
        id: index,
      }),
  );

  function isComp(filePath) {
    return comps[filePath];
  }

  function filterDeps({ filePath, filteredDeps, allDeps, visited }) {
    visited.push(filePath);
    const fileDeps = allDeps[filePath];

    if (fileDeps.length === 0) {
      return;
    }

    fileDeps.forEach(cur => {
      if (visited.indexOf(cur) === -1) {
        visited.push(cur);

        if (isComp(cur)) {
          filteredDeps.push(cur);
        } else {
          filterDeps({
            filePath: cur,
            filteredDeps,
            allDeps,
            visited,
          });
        }
      }
    });
  }

  Object.keys(comps).forEach(filePath => {
    const visited = [];
    const filteredDeps = [];
    filterDeps({ filePath, filteredDeps, allDeps: depsObj, visited, level: 0 });
    comps[filePath].deps = filteredDeps;
  });

  function getDepLevel({ deps }) {
    if (deps.length === 0) {
      return 0;
    } else {
      const levels = deps.map(filePath => {
        return getDepLevel({ deps: comps[filePath].deps });
      });
      const res = 1 + Math.max(...levels);

      return res;
    }
  }

  Object.values(comps).forEach(comp => {
    comp.depLevel = getDepLevel({ deps: comp.deps });
  });

  function updateDependents() {
    Object.values(comps).forEach(c => {
      c.deps.forEach(filePath => {
        comps[filePath].dependents.push(c.filePath);
      });
    });
  }

  updateDependents();

  function countDependents(comp) {
    let dependentsCount = comp.dependents.length;

    const counts = comp.dependents.map(filePath => {
      return countDependents(comps[filePath]);
    });

    if (counts.length !== 0) {
      dependentsCount += counts.reduce((a, b) => {
        return a + b;
      }, 0);
    }

    return dependentsCount;
  }
  Object.values(comps).forEach(comp => {
    comp.totalDependents = countDependents(comp);
  });

  function print() {
    Object.values(comps).forEach(c => {
      const { filePath, depLevel, totalDependents, dependents } = c;
      console.log(
        `${filePath.replace('/index.js', '')}, ${depLevel}, ${totalDependents}`,
      );
    });
  }

  function toGraph() {
    const graph = {
      nodes: [],
      edges: [],
    };

    Object.values(comps).forEach(c => {
      const { name, deps, id } = c;
      graph.nodes.push({ id, label: name });
      deps.forEach(filePath => {
        const d = comps[filePath];
        graph.edges.push({ from: id, to: d.id });
      });
    });

    return graph;
  }

  // print();
  fs.writeFile(
    './stories/compDeps/graph.json',
    JSON.stringify(toGraph()),
    function(err) {
      if (err) {
        return console.log(err);
      }

      console.log('graph saved!');
    },
  );
  fs.writeFile(
    './stories/compDeps/components.json',
    JSON.stringify(comps),
    function(err) {
      if (err) {
        return console.log(err);
      }

      console.log('components saved!');
    },
  );
}
traverse();
