/* eslint-disable no-console */
const madge = require('madge');

const fs = require('fs');

const entry = '/Users/erezm/Projects/wix-style-react-2/src/index.js';

function initComps(depsObj) {
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
  return comps;
}

/**
 * Updates provided `comps` with filtered comp deps
 */
function filterDepsByComponents(depsObj) {
  const comps = initComps(depsObj);

  /** Returns true if the filePath should be included */
  function filter(filePath) {
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

        if (filter(cur)) {
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
    filterDeps({
      filePath,
      filteredDeps,
      allDeps: depsObj,
      visited,
      level: 0,
    });
    comps[filePath].deps = filteredDeps;
  });

  return comps;
}

/** updates for each component it's dependency level. e.g. component with no dependencies is level 0, a component with a dependency has it's dependency's level + 1  */
function calcAndUpdateDepLevel(comps) {
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
}

function updateDependents(comps) {
  Object.values(comps).forEach(c => {
    c.deps.forEach(filePath => {
      comps[filePath].dependents.push(c.filePath);
    });
  });
}

function calcAndUpdateDependentsCount(comps) {
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
}

function print(comps) {
  Object.values(comps).forEach(c => {
    const { filePath, depLevel, totalDependents } = c;
    console.log(
      `${filePath.replace('/index.js', '')}, ${depLevel}, ${totalDependents}`,
    );
  });
}

function saveAsJson(comps, filePath) {
  fs.writeFile(filePath, JSON.stringify(comps), function(err) {
    if (err) {
      return console.log(err);
    }

    console.log('components saved!');
  });
}

async function buildComponentDeps() {
  const m = await madge(entry);
  const depsObj = m.obj();

  const comps = filterDepsByComponents(depsObj);

  calcAndUpdateDepLevel(comps);
  updateDependents(comps);
  calcAndUpdateDependentsCount(comps);

  // print();
  saveAsJson(comps, './stories/compDeps/components.json');
}

buildComponentDeps();
